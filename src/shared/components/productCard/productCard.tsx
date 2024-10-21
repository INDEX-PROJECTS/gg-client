import CheckProductCostDialog from '@/src/shared/components/checkProductCostDialog/checkProductCostDialog';
import ImageLoader from '@/src/shared/components/productCard/imageLoader/imageLoader';
import { Button } from '@/src/shared/components/ui/button';
import { useBasketStore } from '@/src/shared/lib/store/BasketStore';
import { IProduct } from '@/src/shared/lib/types/types';
import { rubFormat } from '@/src/shared/lib/utils/rubFormat';
import Link from 'next/link';
import { FC } from 'react';

interface ProductCardProps extends IProduct {
  category: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, title, image, price, vendorCode, description, category }) => {
  const addToCart = useBasketStore(state => state.addToCart);
  const basketItems = useBasketStore(state => state.basketItems);
  const increaseQuantity = useBasketStore(state => state.increaseQuantity);
  const decreaseQuantity = useBasketStore(state => state.decreaseQuantity);

  const isInBasket = basketItems.findIndex(item => {
    return item.id === id;
  });

  const productQuantity = basketItems.find(item => {
    return item.id === id;
  })?.quantity;

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
            <h3 className="t1 text-orange max-[450px]:text-[22px]">
              {price === 'По запросу' ? price : rubFormat(Number(price))}
            </h3>
          </div>
          <Link href={`/${category}/${id}`} className="t3 line-clamp-2">
            {title}
          </Link>
        </div>
        {price === 'По запросу' ? (
          <CheckProductCostDialog triggerButton={<Button className="w-full uppercase">Уточнить стоимость</Button>} />
        ) : isInBasket === -1 ? (
          <Button
            className="w-full uppercase"
            onClick={() => addToCart({ id, title, image, price, vendorCode, description, quantity: 1 })}
          >
            в корзину
          </Button>
        ) : (
          <div className="flex w-full items-center">
            <Button
              variant="backgroundIcon"
              className="h1 h-[64px] w-[64px] shrink-0 font-[500]"
              onClick={() => decreaseQuantity(id)}
            >
              -
            </Button>
            <span className="t2 w-full select-none text-center font-[700]">{productQuantity}</span>
            <Button
              variant="backgroundIcon"
              className="h1 h-[64px] w-[64px] shrink-0 font-[500]"
              onClick={() => increaseQuantity(id)}
            >
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
