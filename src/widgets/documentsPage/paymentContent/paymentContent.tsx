import Image from 'next/image';

const PaymentContent = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="h1 leading-[40px] max-[450px]:text-[22px] max-[450px]:leading-[26.77px]">Правила оплаты</h1>
      <p className="t3 max-[450px]:t-xs">
        К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide, МИР.
        <br />
        <br />
        Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите способ оплаты: банковской
        картой.
        <br />
        <br />
        При оплате заказа банковской картой, обработка платежа происходит на авторизационной странице банка, где Вам
        необходимо ввести данные Вашей банковской карты:
        <br />
        <br />
        <ul className="ml-[32px] flex list-disc flex-col gap-[16px]">
          <li>тип карты;</li>
          <li>номер карты;</li>
          <li>срок действия карты (указан на лицевой стороне карты);</li>
          <li>Имя держателя карты (латинскими буквами, точно также как указано на карте);</li>
          <li>CVC2/CVV2 код;</li>
        </ul>
        <br />
        <br />
        <div className="relative h-[279px] w-[422px] max-[545px]:w-full">
          <Image src="/cardholder.png" alt="" fill className="object-contain object-center" />
        </div>
        <br />
        <br />
        Если Ваша карта подключена к услуге 3D-Secure, Вы будете автоматически переадресованы на страницу банка,
        выпустившего карту, для прохождения процедуры аутентификации. Информацию о правилах и методах дополнительной
        идентификации уточняйте в Банке, выдавшем Вам банковскую карту.
        <br />
        <br />
        Безопасность обработки интернет-платежей через платежный шлюз банка гарантирована международным сертификатом
        безопасности PCI DSS. Передача информации происходит с применением технологии шифрования TLS. Эта информация
        недоступна посторонним лицам.
        <br />
        <br />
        <span className="font-[700]">
          Советы и рекомендации по необходимым мерам безопасности проведения платежей с использованием банковской карты:
        </span>
        <br />
        <br />
        <ul className="ml-[32px] flex list-disc flex-col gap-[16px]">
          <li>
            <span className="font-[700]">берегите свои пластиковые карты</span> так же, как бережете наличные деньги. Не
            забывайте их в машине, ресторане, магазине и т.д.;
          </li>
          <li>
            никогда <span className="font-[700]">не передавайте полный номер своей кредитной карты</span> по телефону
            каким-либо лицам или компаниям;
          </li>
          <li>
            всегда имейте под рукой номер телефона для экстренной связи с банком, выпустившим вашу карту, и в случае ее
            утраты немедленно свяжитесь с банком;
          </li>
          <li>
            вводите реквизиты карты только при совершении покупки. Никогда не указывайте их по каким-то другим причинам.
          </li>
        </ul>
        <br />
        <br />
        <Image src="/horizontalLogos.png" alt="" width={3056} height={238} className="max-[425px]:hidden" />
        <Image src="/verticalLogos.png" alt="" width={742} height={1494} className="hidden max-[425px]:block" />
      </p>
    </div>
  );
};

export default PaymentContent;
