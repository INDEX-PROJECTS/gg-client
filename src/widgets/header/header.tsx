import Logo from '@/src/shared/assets/Logo.svg';
import MainContainer from '@/src/shared/components/mainContainer/mainContainer';
import { Button } from '@/src/shared/components/ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <MainContainer>
      <header className="mb-[48px] mt-[26px] flex w-full flex-row items-center justify-between max-[660px]:mt-[15px] max-[660px]:flex-col max-[660px]:gap-[15px]">
        <Link href="/" className="flex items-center gap-[24px] max-[660px]:flex-col max-[660px]:gap-[8px]">
          <Logo className="h-[72px] w-[72px] max-[375px]:h-[40px] max-[375px]:w-[40px]" />
          <h1 className="h1 max-[660px]:hidden">
            ГУРУ
            <br />
            ГРУПП
          </h1>
          <h1 className="h1 max-[375px]:t1 hidden max-[660px]:block max-[375px]:font-[800]">ГУРУ ГРУПП</h1>
        </Link>

        <ul className="inline-flex gap-[40px] max-[768px]:gap-[24px]">
          <li>
            <Button variant="link" asChild className="max-[375px]:t-xs">
              <Link href="">Каталог</Link>
            </Button>
          </li>
          <li className="max-[1200px]:hidden">
            <Button variant="link" asChild className="max-[375px]:t-xs">
              <Link href="">О компании</Link>
            </Button>
          </li>
          <li className="max-[1024px]:hidden">
            <Button variant="link" asChild className="max-[375px]:t-xs">
              <Link href="">Преимущества</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild className="max-[375px]:t-xs">
              <Link href="">Документация</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="max-[375px]:t-xs">
              Корзина
            </Button>
          </li>
        </ul>
      </header>
    </MainContainer>
  );
};

export default Header;
