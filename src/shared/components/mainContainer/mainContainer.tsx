import { children } from '@/src/shared/lib/types/types';

const MainContainer = ({ children }: children) => {
  return <div className="m-[0_auto] max-w-[1328px]">{children}</div>;
};

export default MainContainer;
