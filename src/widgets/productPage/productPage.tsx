import ProductPattern from '@/src/shared/assets/productPattern.png';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/shared/components/ui/breadcrumb';
import { categories } from '@/src/shared/lib/constants/categories';
import { bearings } from '@/src/shared/lib/products/bearings';
import { electric_engines } from '@/src/shared/lib/products/electric_engines';
import { gearbox } from '@/src/shared/lib/products/gearbox';
import { invertors } from '@/src/shared/lib/products/invertors';
import { klimaticheskoe_oborudovanie } from '@/src/shared/lib/products/klimaticheskoe_oborudovanie';
import { pumps } from '@/src/shared/lib/products/pumps';
import { schild } from '@/src/shared/lib/products/schild';
import { tali } from '@/src/shared/lib/products/tali';
import { IProduct } from '@/src/shared/lib/types/types';
import { rubFormat } from '@/src/shared/lib/utils/rubFormat';
import AddToBasketButton from '@/src/widgets/productPage/addToBasketButton/addToBasketButton';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FC } from 'react';

interface ProductPageProps {
  category: string;
  productId: string;
}

const ProductPage: FC<ProductPageProps> = ({ category, productId }) => {
  let products: IProduct[] = [];

  switch (category) {
    case 'electric-engines':
      products = electric_engines;
      break;
    case 'pumps':
      products = pumps;
      break;
    case 'invertors':
      products = invertors;
      break;
    case 'gearbox':
      products = gearbox;
      break;
    case 'bearings':
      products = bearings;
      break;
    case 'klimaticheskoe-oborudovanie':
      products = klimaticheskoe_oborudovanie;
      break;
    case 'schild':
      products = schild;
      break;
    case 'tali':
      products = tali;
      break;
    default:
      break;
  }

  const product = products.find(item => {
    return item.id === Number(productId);
  });

  if (!product) {
    notFound();
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${category}`}>
              {
                categories.find(item => {
                  return item.link === category;
                })?.name
              }
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="flex gap-[48px] max-[950px]:flex-col max-[950px]:gap-[24px]">
        <div className="relative h-[544px] w-[544px] flex-shrink-0 overflow-hidden rounded-[8px] max-[1280px]:h-[444px] max-[1280px]:w-[444px] max-[1080px]:h-[344px] max-[1080px]:w-[344px] max-[950px]:h-[303px] max-[950px]:w-full">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="h-full w-full bg-white-100 object-contain object-center"
              draggable={false}
            />
          ) : (
            <Image
              src={ProductPattern}
              alt={product.title}
              fill
              className="h-full w-full bg-white-100 object-cover object-center"
              draggable={false}
            />
          )}
        </div>

        <div className="flex flex-col justify-between gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px]">
              <span className="title text-orange max-[950px]:text-[48px] max-[950px]:leading-[58.42px] max-[450px]:text-[32px] max-[450px]:leading-[38.94px]">
                {rubFormat(Number(product.price))}
              </span>
              <div className="flex flex-col gap-[6px]">
                <h1 className="h1 max-[950px]:h2 leading-[40px] max-[450px]:text-[22px] max-[450px]:leading-[26.77px]">
                  {product.title}
                </h1>
                <h4 className="t2 max-[450px]:t3 text-backdrop">Артикул: {product.vendorCode}</h4>
              </div>
            </div>
            <p className="t3 max-[450px]:t-xs">{product.description}</p>
          </div>

          <AddToBasketButton
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            vendorCode={product.vendorCode}
          />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
