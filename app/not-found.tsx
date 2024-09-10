import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pb-[108px] pt-[140px] max-[660px]:pb-[90px] max-[660px]:pt-[106px]">
      <div className="flex flex-col items-center gap-[12px]">
        <div className="flex flex-col items-center gap-[8px] text-center">
          <span className="error-title">404</span>
          <p className="error-subtitle max-[450px]:t-xs">Такой страницы не существует</p>
        </div>

        <Link href="/" className="t1 max-[450px]:t2 font-[600] text-orange transition-[filter] hover:brightness-[95%]">
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
