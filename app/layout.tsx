import MainContainer from '@/src/shared/components/mainContainer/mainContainer';
import Header from '@/src/widgets/header/header';
import type { Metadata } from 'next';
import { Ruda } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const ruda = Ruda({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ruda',
});

export const metadata: Metadata = {
  title: 'ГУРУ ГРУПП',
  description: 'Профессиональное и промышленное оборудование.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ruda.variable} font-sans`}>
        <MainContainer>
          <Header />
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
