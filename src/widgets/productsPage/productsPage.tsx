'use client';

import ArrowTopIcon from '@/src/shared/assets/arrowTopIcon.svg';
import CheckIcon from '@/src/shared/assets/checkIcon.svg';
import FilterIcon from '@/src/shared/assets/filterIcon.svg';
import ProductCard from '@/src/shared/components/productCard/productCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/shared/components/ui/breadcrumb';
import { Button } from '@/src/shared/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import { categories } from '@/src/shared/lib/constants/categories';
import { categoriesAlternative } from '@/src/shared/lib/constants/categoriesAlternative';
import { ALTERNATIVE_CATEGORIES } from '@/src/shared/lib/constants/env.config';
import { bearings } from '@/src/shared/lib/products/bearings';
import { electric_engines } from '@/src/shared/lib/products/electric_engines';
import { gearbox } from '@/src/shared/lib/products/gearbox';
import { invertors } from '@/src/shared/lib/products/invertors';
import { izdeliya_iz_armatury } from '@/src/shared/lib/products/izdeliya_iz_armatury';
import { klimaticheskoe_oborudovanie } from '@/src/shared/lib/products/klimaticheskoe_oborudovanie';
import { listovoy_prokat } from '@/src/shared/lib/products/listovoy_prokat';
import { pumps } from '@/src/shared/lib/products/pumps';
import { schild } from '@/src/shared/lib/products/schild';
import { tali } from '@/src/shared/lib/products/tali';
import { trubniy_prokat } from '@/src/shared/lib/products/trubniy_prokat';
import { IProduct } from '@/src/shared/lib/types/types';
import { cn } from '@/src/shared/lib/utils/cnMerge';
import { PopoverClose } from '@radix-ui/react-popover';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ISorting = 'priceToLow' | 'priceToHeight';

interface ProductsPageProps {
  category: string;
}

type ICountItems = {
  count?: number;
};

const ProductsPage: FC<ProductsPageProps> = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<keyof ICountItems, number>;

  const countStep = 48;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortType, setSortType] = useState<ISorting>('priceToHeight');
  const [itemsCount, setItemsCount] = useState(searchParams.get('count') ?? countStep);

  const showMore = () => {
    setItemsCount((prev: number) => prev + countStep);
    router.push(`?count=${itemsCount + countStep}`, { scroll: false });
  };

  useEffect(() => {
    switch (category) {
      case 'electric-engines':
        setProducts(electric_engines);
        break;
      case 'pumps':
        setProducts(pumps);
        break;
      case 'invertors':
        setProducts(invertors);
        break;
      case 'gearbox':
        setProducts(gearbox);
        break;
      case 'bearings':
        setProducts(bearings);
        break;
      case 'klimaticheskoe-oborudovanie':
        setProducts(klimaticheskoe_oborudovanie);
        break;
      case 'schild':
        setProducts(schild);
        break;
      case 'tali':
        setProducts(tali);
        break;
      case 'trubniy-prokat':
        setProducts(trubniy_prokat);
        break;
      case 'listovoy-prokat':
        setProducts(listovoy_prokat);
        break;
      case 'izdeliya-iz-armatury':
        setProducts(izdeliya_iz_armatury);
        break;
      default:
        break;
    }
  }, [category]);

  const sorting = (type: ISorting) => {
    switch (type) {
      case 'priceToLow':
        setSortType('priceToLow');
        priceToLow();
        break;
      case 'priceToHeight':
        setSortType('priceToHeight');
        priceToHeight();
        break;
    }
  };

  const priceToLow = () => {
    const priceToLow = products.toSorted((a, b) => {
      if (Number(a.price) < Number(b.price)) {
        return 1;
      } else if (Number(a.price) > Number(b.price)) {
        return -1;
      } else {
        return 1;
      }
    });
    setProducts(priceToLow);
  };

  const priceToHeight = () => {
    const priceToLow = products.toSorted((a, b) => {
      if (Number(a.price) < Number(b.price)) {
        return -1;
      } else if (Number(a.price) > Number(b.price)) {
        return 1;
      } else {
        return -1;
      }
    });
    setProducts(priceToLow);
  };

  return (
    <main>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {
                (ALTERNATIVE_CATEGORIES === 'true' ? categoriesAlternative : categories).find(item => {
                  return item.link === category;
                })?.name
              }
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="popover" className="mb-[24px]">
            <FilterIcon className="h-[40px] w-[40px] max-[450px]:h-[24px] max-[450px]:w-[24px]" />
            {sortType === 'priceToHeight' ? 'Дешевле' : 'Дороже'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-hidden">
          <h3 className="t2 max-[450px]:t-xs px-[24px] py-[16px] font-[700] max-[450px]:font-[700]">Сортировка:</h3>
          <div className="flex flex-col">
            <PopoverClose asChild>
              <label
                htmlFor="priceToHeight"
                className="t2 relative inline-flex cursor-pointer items-center justify-between px-[24px] py-[12px] has-[:checked]:bg-white-300"
              >
                <input
                  id="priceToHeight"
                  name="sorting"
                  type="radio"
                  className="peer hidden"
                  checked={sortType === 'priceToHeight'}
                  onChange={() => sorting('priceToHeight')}
                />
                <span>Дешевле</span>
                <CheckIcon className="h-[32px] w-[32px] opacity-0 peer-checked:opacity-100" />
              </label>
            </PopoverClose>
            <PopoverClose asChild>
              <label
                htmlFor="priceToLow"
                className="t2 relative inline-flex cursor-pointer items-center justify-between px-[24px] py-[12px] has-[:checked]:bg-white-300"
              >
                <input
                  id="priceToLow"
                  name="sorting"
                  type="radio"
                  className="peer hidden"
                  checked={sortType === 'priceToLow'}
                  onChange={() => sorting('priceToLow')}
                />
                <span>Дороже</span>
                <CheckIcon className="h-[32px] w-[32px] opacity-0 peer-checked:opacity-100" />
              </label>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>

      <section className="relative grid grid-cols-4 gap-[16px] max-[1264px]:grid-cols-3 max-[968px]:grid-cols-2 max-[632px]:grid-cols-1 max-[450px]:gap-[8px]">
        {products.slice(0, itemsCount).map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            vendorCode={product.vendorCode}
            image={product.image}
            category={category}
          />
        ))}
        <Button
          variant="float"
          className="absolute bottom-0 right-[-104px] max-[1630px]:right-[-80px] max-[1585px]:bottom-[-24px] max-[1585px]:right-0"
          onClick={() => scrollTo(0, 0)}
        >
          <ArrowTopIcon />
        </Button>
      </section>

      <div className={cn('flex w-full justify-center pt-[48px]', products.length <= itemsCount && 'hidden')}>
        <Button className="w-full max-w-[320px]" onClick={showMore}>
          Показать ещё
        </Button>
      </div>
    </main>
  );
};

export default ProductsPage;
