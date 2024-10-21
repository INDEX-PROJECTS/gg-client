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
import { DialogClose } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import InputMask from 'react-input-mask';

interface CheckProductCostDialogProps {
  triggerButton: ReactNode;
}

const CheckProductCostDialog = ({ triggerButton }: CheckProductCostDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Оставьте заявку</DialogTitle>
          <DialogDescription className="uppercase">Наш менеджер перезвонит Вам в ближайшее время</DialogDescription>
        </DialogHeader>
        <InputMask
          inputMode="tel"
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          className="bg-white ring-offset-white t3 flex h-[48px] w-full rounded-sm border border-black-100/40 px-[12px] py-[13px] file:border-0 file:font-medium placeholder:text-black-100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" className="w-[304px] uppercase max-[450px]:w-full">
              Уточнить стоимость
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CheckProductCostDialog;
