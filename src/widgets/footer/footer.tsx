import Logo from '@/src/shared/assets/Logo.svg';
import MainContainer from '@/src/shared/components/mainContainer/mainContainer';
import { Button } from '@/src/shared/components/ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <MainContainer className="bg-white-200">
      <footer className="flex justify-between py-[64px] max-[1080px]:flex-col max-[1080px]:gap-[64px] max-[660px]:py-[40px]">
        <div className="flex w-[320px] flex-col gap-[48px] max-[435px]:w-full max-[435px]:gap-[16px]">
          <div className="flex flex-col gap-[24px] max-[435px]:gap-[8px]">
            <Logo className="h-[72px] w-[72px]" />
            <div className="flex flex-col gap-[8px] max-[435px]:gap-0">
              <h1 className="h2">ГУРУ ГРУПП</h1>
              <p className="t2">Двигатель производства и бизнеса</p>
            </div>
          </div>

          <Button className="w-full">Заказать звонок</Button>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h2 className="h2">Контакты</h2>
          <div className="flex flex-col gap-[24px] max-[435px]:gap-[8px]">
            <div className="flex gap-[30px] max-[1080px]:flex-wrap max-[435px]:gap-[8px]">
              <div className="flex flex-col gap-[4px]">
                <h4 className="t-xs text-backdrop">Прием звонка 24/7</h4>
                <Link href="tel:+79191232395" className="t1 text-orange">
                  8 (919) 123-23-95
                </Link>
              </div>
              <div className="flex flex-col gap-[4px]">
                <h4 className="t-xs text-backdrop">E-mail</h4>
                <Link href="mailto:guru-grupp@mail.ru" className="t1">
                  Guru-grupp@mail.ru
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <h4 className="t-xs text-backdrop">Адресс Офиса</h4>
              <h3 className="t2 max-w-[400px]">г. Челябинск, ул. молодогвардейцев 60в, оф. 505</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h2 className="h2">ИНФОРМАЦИЯ</h2>
          <ul className="flex flex-col gap-[16px]">
            <li>
              <Button variant="link" asChild>
                <Link href="">Каталог</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="">О компании</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="">Преимущества</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="">Документация</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">Корзина</Button>
            </li>
          </ul>
        </div>
      </footer>
    </MainContainer>
  );
};

export default Footer;
