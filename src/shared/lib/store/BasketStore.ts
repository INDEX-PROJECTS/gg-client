import { IProduct } from '@/src/shared/lib/types/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IBasketItem extends IProduct {
  quantity: number;
}

interface BasketState {
  basketItems: IBasketItem[];
  addToCart: (product: IBasketItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
  deleteAllItems: () => void;
}

export const useBasketStore = create<BasketState>()(
  devtools(
    persist(
      set => ({
        basketItems: [],
        addToCart: product => set(state => ({ basketItems: [...state.basketItems, product] })),
        increaseQuantity: id => {
          set(state => {
            const itemIndex = state.basketItems.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
              const updatedBasketItems = [...state.basketItems];
              updatedBasketItems[itemIndex].quantity += 1;
              return { basketItems: updatedBasketItems };
            }

            return state;
          });
        },
        decreaseQuantity: id => {
          set(state => {
            const itemIndex = state.basketItems.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
              const updatedBasketItems = [...state.basketItems];
              updatedBasketItems[itemIndex].quantity -= 1;
              if (updatedBasketItems[itemIndex].quantity <= 0) {
                return { basketItems: updatedBasketItems.filter(item => item.id !== id) };
              }
              return { basketItems: updatedBasketItems };
            }

            return state;
          });
        },
        deleteItem: id => set(state => ({ basketItems: [...state.basketItems].filter(item => item.id !== id) })),
        deleteAllItems: () => set(() => ({ basketItems: [] })),
      }),
      {
        name: 'basket-storage',
      },
    ),
  ),
);
