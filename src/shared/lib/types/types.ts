import { ReactNode } from 'react';

export type Children = {
  children?: ReactNode;
};

export interface IProduct {
  id: number;
  title: string;
  description: string | null;
  price: string;
  vendorCode: string;
  image: string | null;
}
