import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/src/shared/lib/utils/cnMerge';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          't2 gradient duration-700 text-white-100 rounded-sm py-[20px] px-[24px] disabled:bg-white-300 disabled:text-backdrop',
        icon: 'w-[30px] h-[30px]',
        backgroundIcon: 'bg-white-300 w-[40px] h-[40px] rounded-sm hover:bg-white-400',
        text: 't3 font-[700] hover:text-[rgba(0,0,0,0.7)] active:text-[rgba(0,0,0,0.5)]',
        link: 't2 hover:text-[rgba(0,0,0,0.7)] active:text-[rgba(0,0,0,0.5)] max-[375px]:t-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
