import ImageLoader from '@/src/shared/components/productCard/imageLoader/imageLoader';
import { Button } from '@/src/shared/components/ui/button';
import { IProduct } from '@/src/shared/lib/types/types';
import { rubFormat } from '@/src/shared/lib/utils/rubFormat';
import Link from 'next/link';
import { FC } from 'react';

interface ProductCardProps extends IProduct {
  category: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, title, image, price, vendorCode, description, category }) => {
  return (
    <div className="flex h-[533px] w-full flex-col gap-[24px] rounded-sm bg-white-100 p-[8px] max-[450px]:h-[505px] max-[450px]:gap-[16px]">
      <Link href={`/${category}/${id}`}>
        <div className="relative flex h-[303px] flex-col overflow-hidden rounded-[8px]">
          <ImageLoader image={image} title={title} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-[24px] max-[450px]:gap-[16px]">
        <div className="flex flex-col gap-[8px] max-[450px]:gap-[4px]">
          <div className="flex flex-col gap-[2px]">
            <p className="t-xs text-backdrop">Артикул: {vendorCode}</p>
            <h3 className="t1 text-orange max-[450px]:text-[22px]">{rubFormat(Number(price))}</h3>
          </div>
          <Link href={`/${category}/${id}`} className="t3 line-clamp-2">
            {title}
          </Link>
        </div>
        <Button className="w-full uppercase">в корзину</Button>
      </div>
    </div>
  );
};

export default ProductCard;
