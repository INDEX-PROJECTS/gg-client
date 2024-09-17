'use client';
import DeleteIcon from '@/src/shared/assets/deleteIcon.svg';
import ProductPattern from '@/src/shared/assets/productPattern.png';
import { Button } from '@/src/shared/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/components/ui/dialog';
import { useBasketStore } from '@/src/shared/lib/store/BasketStore';
import { cn } from '@/src/shared/lib/utils/cnMerge';
import { rubFormat } from '@/src/shared/lib/utils/rubFormat';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { Checkbox } from '../ui/checkbox';

interface BasketDialogProps {
  triggerButton: ReactNode;
}

const BasketDialog = ({ triggerButton }: BasketDialogProps) => {
  const basketItems = useBasketStore(state => state.basketItems);
  const deleteProduct = useBasketStore(state => state.deleteItem);
  const clearBasket = useBasketStore(state => state.deleteAllItems);
  const increaseQuantity = useBasketStore(state => state.increaseQuantity);
  const decreaseQuantity = useBasketStore(state => state.decreaseQuantity);

  const [terms, setTerms] = useState(true);

  const productQuantity = (id: number) => {
    return basketItems.find(item => {
      return item.id === id;
    })?.quantity;
  };

  const totalPrice = rubFormat(basketItems.map(item => Number(item.price) * item.quantity).reduce((a, b) => a + b, 0));

  console.log(totalPrice);

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Корзина</DialogTitle>
        </DialogHeader>

        {!basketItems.length ? (
          <div className="flex w-full flex-col items-center justify-center gap-[16px] py-[190px] text-center">
            <h3 className="t1">Корзина пуста</h3>
            <p className="t3">Перейдите к каталогу, чтобы оформить заказ</p>
          </div>
        ) : (
          <div className="flex flex-col gap-[24px]">
            <div className="inline-flex w-full justify-end">
              <Button variant="text" className="uppercase" onClick={clearBasket}>
                Очистить всё
              </Button>
            </div>

            <div className="flex max-h-[452px] flex-col gap-[16px] overflow-auto max-[450px]:max-h-[464px]">
              {basketItems.map(basketItem => (
                <div key={basketItem.id} className="flex gap-[16px]">
                  <div className="relative flex h-[140px] w-[140px] shrink-0 overflow-hidden rounded-[8px] max-[450px]:h-[48px] max-[450px]:w-[48px]">
                    <Image
                      src={basketItem.image ?? ProductPattern}
                      alt={basketItem.title}
                      fill
                      className={cn(
                        'h-full w-full bg-white-100 object-contain object-center',
                        !basketItem.image && 'object-cover',
                      )}
                      draggable={false}
                      quality={basketItem.image ? 40 : 70}
                      sizes="303px"
                    />
                  </div>
                  <div className="inline-flex h-[140px] w-full max-[450px]:h-[144px]">
                    <div className="flex h-full w-full flex-col justify-between">
                      <div className="flex flex-col gap-[4px]">
                        <h4 className="t3 max-[450px]:t-xs line-clamp-2 max-[450px]:line-clamp-3 max-[450px]:leading-[17.04px]">
                          {basketItem.title}
                        </h4>
                        <div className="flex flex-col gap-[4px]">
                          <span className="t1 max-[450px]:t3 max-[450px]:font-[700] max-[450px]:leading-[21.91px]">
                            {rubFormat(Number(basketItem.price) * basketItem.quantity)}
                          </span>
                          <span className="t3 max-[450px]:t-xs text-backdrop max-[450px]:leading-[17.04px]">
                            {basketItem.vendorCode}
                          </span>
                        </div>
                      </div>

                      <div className="flex w-[140px] items-center">
                        <Button
                          variant="backgroundIcon"
                          className="h2 shrink-0 font-[500]"
                          onClick={() => decreaseQuantity(basketItem.id)}
                        >
                          -
                        </Button>
                        <span className="t2 w-full select-none text-center font-[700]">
                          {productQuantity(basketItem.id)}
                        </span>
                        <Button
                          variant="backgroundIcon"
                          className="h2 shrink-0 font-[500]"
                          onClick={() => increaseQuantity(basketItem.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <Button variant="icon" onClick={() => deleteProduct(basketItem.id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={terms} onClick={() => setTerms(!terms)} />
              <label
                htmlFor="terms"
                className="t3 max-[450px]:t-xs ml-[16px_!important] font-[600] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 max-[450px]:ml-[8px_!important]"
              >
                Я соглашаюсь с{' '}
                <Link href="/" className="border-b border-black-200" target="_blank">
                  условиями оферты
                </Link>
              </label>
            </div>

            <div className="flex w-full justify-between uppercase">
              <h3 className="t1 max-[450px]:t3 text-orange">итого к оплате:</h3>
              <h3 className="t1 max-[450px]:t3 text-orange">{totalPrice}</h3>
            </div>
          </div>
        )}

        <DialogFooter>
          {!basketItems.length ? (
            <DialogClose asChild>
              <Button type="submit" className="w-[304px] uppercase max-[450px]:w-full" asChild>
                <Link href="/">На главную</Link>
              </Button>
            </DialogClose>
          ) : (
            <Button type="submit" className="w-[304px] uppercase max-[450px]:w-full" disabled={!terms}>
              Оформить заказ
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BasketDialog;
