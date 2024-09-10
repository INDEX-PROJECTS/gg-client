import { Children } from '../../lib/types/types';
import { cn } from '../../lib/utils/cnMerge';

interface MainContainerProps extends Children {
  className?: string;
}

const MainContainer = ({ className, children }: MainContainerProps) => {
  return (
    <div className={cn('flex w-full justify-center px-[48px] max-[500px]:px-[15px]', className)}>
      <div className="w-full max-w-[1328px]">{children}</div>
    </div>
  );
};

export default MainContainer;
