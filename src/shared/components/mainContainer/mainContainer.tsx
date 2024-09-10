import { children } from '@/src/shared/lib/types/types';

const MainContainer = ({ children }: children) => {
  return (
    <div className="flex w-full justify-center px-[48px] max-[500px]:px-[15px]">
      <div className="w-full max-w-[1328px]">{children}</div>
    </div>
  );
};

export default MainContainer;
