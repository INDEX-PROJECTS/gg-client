'use client';

import CheckboxIcon from '@/src/shared/assets/checkboxIcon.svg';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { cn } from '@/src/shared/lib/utils/cnMerge';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ring-offset-white peer h-[26.67px] w-[26.67px] shrink-0 rounded-[6.67px] border border-white-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-black-200 data-[state=checked]:bg-black-200 data-[state=checked]:text-white-100 max-[450px]:h-[20px] max-[450px]:w-[20px]',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('text-current flex items-center justify-center')}>
      <CheckboxIcon className="h-[10px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
