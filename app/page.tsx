import GeoIcon from '@/src/shared/assets/geoIcon.svg';
import Pattern from '@/src/shared/assets/pattern.svg';
import { Button } from '@/src/shared/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col gap-[80px] max-[768px]:gap-[40px] max-[400px]:gap-[24px]">
      <section className="flex flex-col gap-[8px] text-white-100 max-[400px]:gap-[4px]">
        <div className="flex gap-[8px] max-[890px]:flex-col max-[400px]:gap-[4px]">
          <div className="bg-black-100 flex h-[80px] w-full min-w-[570px] grow-0 items-center gap-[12px] rounded-l-md rounded-r-sm px-[24px] max-[890px]:min-w-0 max-[890px]:justify-center max-[890px]:rounded-md max-[890px]:text-center max-[400px]:h-[64px]">
            <GeoIcon className="max-[890px]:hidden" />
            <h3 className="t2 max-[400px]:t-xs">г. Челябинск, ул. молодогвардейцев 60в, оф. 505</h3>
          </div>
          <div className="bg-black-100 flex h-[80px] w-full max-w-[320px] flex-col items-end justify-center gap-[4px] rounded-sm rounded-l-sm rounded-r-md px-[24px] max-[890px]:w-full max-[890px]:max-w-full max-[890px]:items-center max-[890px]:rounded-md max-[400px]:h-[64px]">
            <Link href="tel:+79191232395" className="t2 max-[400px]:t-xs">
              8 (919) 123-23-95
            </Link>
            <Link href="mailto:guru-grupp@mail.ru" className="t2 max-[400px]:t-xs">
              Guru-grupp@mail.ru
            </Link>
          </div>
        </div>

        <div className="bg-black-100 flex w-full gap-[24px] rounded-md p-[24px] text-white-100 max-[1024px]:flex-col-reverse">
          <div className="flex max-w-[630px] shrink-0 flex-col justify-between max-[1024px]:max-w-full max-[1024px]:items-center max-[1024px]:gap-[40px]">
            <div className="flex flex-col gap-[56px] max-[1024px]:gap-[24px] max-[400px]:gap-[8px]">
              <h1 className="title max-[718px]:h1 text-center uppercase max-[400px]:text-[22px] max-[400px]:leading-[26.77px]">
                профессиональное <br />и промышленное оборудование
              </h1>
              <h3 className="h1 text-center font-[400] uppercase leading-[24px] max-[718px]:text-[22px] max-[718px]:leading-[22px] max-[400px]:text-[14px] max-[400px]:leading-[20px]">
                двигатель производства и бизнеса
              </h3>
            </div>
            <Button className="w-full py-[28px] uppercase">Заказать звонок</Button>
          </div>
          <div className="h-[500px] w-full overflow-hidden max-[1024px]:h-[240px] max-[1024px]:w-full">
            <Pattern className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[24px] max-[400px]:gap-[16px]">
        <h1 className="title max-[400px]:h1">Каталог товаров</h1>
        <div className="grid w-full grid-cols-4 gap-[16px] max-[1070px]:grid-cols-2 max-[568px]:grid-cols-1 max-[400px]:gap-[4px]">
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Электродвигатели</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Насосы</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Частотные преобразователи и устройства плавного пуска</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Редукторы и мотор-редукторы</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Подшипники</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Климатическое оборудование</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Электрощитовое оборудование</Link>
          </Button>
          <Button asChild className="h-[193px] uppercase max-[400px]:h-[180px]">
            <Link href="">Тали</Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-[24px] max-[400px]:gap-[16px]">
        <h1 className="title max-[400px]:h1">О компании</h1>
        <div className="w-full rounded-md bg-white-200 p-[24px]">
          <p className="t2 max-[400px]:t-xs">
            Компания ГУРУ ГРУПП является надежным поставщиком оборудования промышленного назначения. Мы всегда учитываем
            интересы наших клиентов, предлагаем гибкую систему скидок на весь ассортимент нашей продукции, предоставляем
            удобный каталог и своевременную консультацию наших от наших специалистов, что максимально экономит время и
            делает работу клиентов с нами удобной и быстрой.
          </p>
        </div>
      </section>
    </main>
  );
}
