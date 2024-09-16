import CheckIcon from '@/src/shared/assets/checkIcon.svg';
import { InputHTMLAttributes } from 'react';

interface RadioSortingButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const RadioSortingButton = ({ text, id, name, checked, onChange }: RadioSortingButtonProps) => {
  return (
    <label
      htmlFor="priceToHeight"
      className="t2 relative inline-flex cursor-pointer items-center justify-between px-[24px] py-[12px] has-[:checked]:bg-white-300"
    >
      <input id={id} name={name} type="radio" className="peer hidden" checked={checked} onChange={onChange} />
      <span>{text}</span>
      <CheckIcon className="h-[32px] w-[32px] opacity-0 peer-checked:opacity-100" />
    </label>
  );
};

export default RadioSortingButton;
