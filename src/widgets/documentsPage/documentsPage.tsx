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
import CredentialsContent from '@/src/widgets/documentsPage/credentialsContent/credentialsContent';
import DirectionsContent from '@/src/widgets/documentsPage/directionsContent/directionsContent';
import OfferContent from '@/src/widgets/documentsPage/offerContent/offerContent';
import PaymentContent from '@/src/widgets/documentsPage/paymentContent/paymentContent';
import PolicyContent from '@/src/widgets/documentsPage/policyContent/policyContent';
import RefundContent from '@/src/widgets/documentsPage/refundContent/refundContent';
import { useMediaQuery } from '@custom-react-hooks/use-media-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface IDocRoute {
  route: string;
  name: string;
  content?: ReactNode;
}

type IDocParam = {
  info?: string;
};

const DocumentsPage = () => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const [smallScreen, setSmallScreen] = useState<boolean | null>(null);

  useEffect(() => {
    setSmallScreen(matches);
  }, [matches]);

  const searchParams = useSearchParams() as unknown as Map<keyof IDocParam, string>;
  const router = useRouter();

  const routes: IDocRoute[] = [
    {
      route: 'credentials',
      name: 'Реквизиты и контакты',
      content: <CredentialsContent />,
    },
    {
      route: 'directions',
      name: 'Схема проезда',
      content: <DirectionsContent />,
    },
    {
      route: 'payment',
      name: 'Способы оплаты',
      content: <PaymentContent />,
    },
    {
      route: 'refund',
      name: 'Возврат средств',
      content: <RefundContent />,
    },
    {
      route: 'policy',
      name: 'Политика конфиденциальности',
      content: <PolicyContent />,
    },
    {
      route: 'offer',
      name: 'Договор оферты',
      content: <OfferContent />,
    },
  ];

  const routeFromUrl = routes.find(item => {
    return item.route === searchParams.get('info');
  });

  const [routePath, setRoutePath] = useState<IDocRoute | null>(routeFromUrl || routes[0]);

  const [routePathSmall, setRoutePathSmall] = useState<IDocRoute | null>(routeFromUrl || null);

  const setRouterPath = (path: string, route: IDocRoute) => {
    setRoutePath(route);
    setRoutePathSmall(route);
    router.push(`?info=${path}`, { scroll: false });
  };

  return (
    <>
      {smallScreen !== null && (
        <>
          {!smallScreen ? (
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>Документация</BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {routePath && (
                    <BreadcrumbItem>
                      <BreadcrumbPage>{routePath.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                </BreadcrumbList>
              </Breadcrumb>

              <main className="flex gap-[24px]">
                <ul className={'flex w-[414px] flex-shrink-0 flex-col gap-[32px] border-r border-black-200 pr-[24px]'}>
                  {routes.map((route: IDocRoute, idx) => (
                    <li key={idx}>
                      <Button
                        variant="docsNavItem"
                        onClick={() => setRouterPath(route.route, routes[idx])}
                        className={`${routePath && route.route === routePath.route && 'text-orange hover:text-orange'}}`}
                      >
                        {route.name}
                      </Button>
                    </li>
                  ))}
                </ul>
                {routePath && routePath.content}
              </main>
            </>
          ) : (
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  {routePathSmall ? (
                    <>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          className="cursor-pointer"
                          onClick={() => {
                            setRoutePath(null);
                            setRoutePathSmall(null);
                            router.push(`/documents`, { scroll: false });
                          }}
                        >
                          Документация
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{routePathSmall.name}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  ) : (
                    <BreadcrumbPage>Документация</BreadcrumbPage>
                  )}
                </BreadcrumbList>
              </Breadcrumb>

              {!routePathSmall ? (
                <main className="flex justify-center gap-[24px]">
                  <ul className={'flex w-full flex-shrink-0 flex-col items-center gap-[32px] max-[450px]:gap-[24px]'}>
                    {routes.map((route: IDocRoute, idx) => (
                      <li key={idx}>
                        <Button
                          variant="docsNavItem"
                          onClick={() => setRouterPath(route.route, routes[idx])}
                          className="break-words text-center max-[450px]:text-[22px] max-[450px]:leading-[26.77px]"
                        >
                          {route.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </main>
              ) : (
                <main>{routePathSmall.content}</main>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default DocumentsPage;
