'use client';

import { Button } from '@/src/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/components/ui/dialog';
import { ReactNode, useState } from 'react';
import InputMask from 'react-input-mask';

interface OrderCallDialogProps {
  triggerButton: ReactNode;
}

const OrderCallDialog = ({ triggerButton }: OrderCallDialogProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  return (
    <Dialog
      onOpenChange={() => {
        setTimeout(() => setSuccess(false), 500);
      }}
    >
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        {!success ? (
          <>
            <DialogHeader>
              <DialogTitle>Заказать звонок</DialogTitle>
            </DialogHeader>
            <InputMask
              inputMode="tel"
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              className="bg-white ring-offset-white t3 flex h-[48px] w-full rounded-sm border border-black-100/40 px-[12px] py-[13px] file:border-0 file:font-medium placeholder:text-black-100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <DialogFooter>
              <Button
                className="w-[304px] uppercase max-[450px]:w-full"
                onClick={() => {
                  setPending(true);
                  setTimeout(() => {
                    setSuccess(true);
                    setPending(false);
                  }, 700);
                }}
              >
                {pending ? 'Отрпавка...' : 'Заказать звонок'}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <DialogHeader>
            <DialogDescription className="uppercase">Наш менеджер свяжется с вами</DialogDescription>
          </DialogHeader>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderCallDialog;
