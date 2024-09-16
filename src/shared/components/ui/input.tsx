import * as React from 'react';

import { cn } from '@/src/shared/lib/utils/cnMerge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'bg-white ring-offset-white t3 flex h-[48px] w-full rounded-sm border border-black-100/40 px-[12px] py-[13px] file:border-0 file:font-medium placeholder:text-black-100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
