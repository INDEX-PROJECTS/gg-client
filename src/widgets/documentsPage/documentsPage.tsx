'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/shared/components/ui/breadcrumb';
import { Button } from '@/src/shared/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface IDocRoute {
  route: string;
  name: string;
}

const DocumentsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const routes: IDocRoute[] = [
    {
      route: 'credentials',
      name: 'Реквизиты и контакты',
    },
    {
      route: 'directions',
      name: 'Схема проезда',
    },
    {
      route: 'payment',
      name: 'Способы оплаты',
    },
    {
      route: 'refund',
      name: 'Возврат средств',
    },
    {
      route: 'policy',
      name: 'Политика конфиденциальности',
    },
    {
      route: 'offer',
      name: 'Договор оферты',
    },
  ];

  const routeFromUrl = routes.find(item => {
    return item.route === searchParams.get('info');
  });

  const [routePath, setRoutePath] = useState<IDocRoute>(routeFromUrl || routes[0]);

  const setRouterPath = (path: string, route: IDocRoute) => {
    setRoutePath(route);
    router.push(`?info=${path}`, { scroll: false });
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Документация</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{routePath.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="flex gap-[24px]">
        <ul className="flex w-[414px] flex-col gap-[32px] border-r border-black-200 pr-[24px]">
          {routes.map((route: IDocRoute, idx) => (
            <li key={idx}>
              <Button
                variant="docsNavItem"
                onClick={() => setRouterPath(route.route, routes[idx])}
                className={`${route.route === routePath.route && 'text-orange hover:text-orange'}}`}
              >
                {route.name}
              </Button>
            </li>
          ))}
        </ul>
        <div className="">
          <h1 className="h1 leading-[40px]">Реквизиты и контакты</h1>
        </div>
      </main>
    </>
  );
};

export default DocumentsPage;
