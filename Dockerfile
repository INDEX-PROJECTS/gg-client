# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем только package files для кэширования слоя с зависимостями
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем зависимости из предыдущего этапа
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код
COPY . .

# Переменные окружения для сборки
# NEXT_PUBLIC_* переменные встраиваются в код на этапе сборки
ARG NEXT_PUBLIC_ENABLED_PAYMENT
ARG NEXT_PUBLIC_ALTERNATIVE_CATEGORIES
ARG NEXT_PUBLIC_DOMAIN_NAME
ARG NEXT_PUBLIC_PAYMENT_LINK

ENV NEXT_PUBLIC_ENABLED_PAYMENT=$NEXT_PUBLIC_ENABLED_PAYMENT
ENV NEXT_PUBLIC_ALTERNATIVE_CATEGORIES=$NEXT_PUBLIC_ALTERNATIVE_CATEGORIES
ENV NEXT_PUBLIC_DOMAIN_NAME=$NEXT_PUBLIC_DOMAIN_NAME
ENV NEXT_PUBLIC_PAYMENT_LINK=$NEXT_PUBLIC_PAYMENT_LINK

# Отключаем телеметрию Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Собираем приложение
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

# Создаем непривилегированного пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Копируем production зависимости
COPY --from=deps /app/node_modules ./node_modules

# Копируем сборку Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Отключаем телеметрию
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]