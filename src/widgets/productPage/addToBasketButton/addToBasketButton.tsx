'use client';
import CheckProductCostDialog from '@/src/shared/components/checkProductCostDialog/checkProductCostDialog';
import { Button } from '@/src/shared/components/ui/button';
import { useBasketStore } from '@/src/shared/lib/store/BasketStore';
import { IProduct } from '@/src/shared/lib/types/types';

const AddToBasketButton = ({ id, title, image, price, vendorCode, description }: IProduct) => {
  const addToCart = useBasketStore(state => state.addToCart);
  const basketItems = useBasketStore(state => state.basketItems);

  const isInBasket = basketItems.findIndex(item => {
    return item.id === id;
  });

  return (
    <>
      {price === 'По запросу' ? (
        <CheckProductCostDialog
          triggerButton={<Button className="w-full py-[28px] uppercase">Уточнить стоимость</Button>}
        />
      ) : (
        <Button
          className="w-full py-[28px] uppercase"
          onClick={() => addToCart({ id, title, image, price, vendorCode, description, quantity: 1 })}
          disabled={isInBasket !== -1}
        >
          {isInBasket !== -1 ? 'Уже в корзине' : 'В корзину'}
        </Button>
      )}
    </>
  );
};

export default AddToBasketButton;
