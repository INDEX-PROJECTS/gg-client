const RefundContent = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="h1 leading-[40px] max-[450px]:text-[22px] max-[450px]:leading-[26.77px]">Возврат товара</h1>
      <p className="t3 max-[450px]:t-xs">
        Процедура возврата товара регламентируется статьей 26.1 федерального закона «О защите прав потребителей».
        <br />
        <br />
        <ul className="ml-[32px] flex list-disc flex-col gap-[16px]">
          <li>
            Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение
            семи дней;
          </li>
          <li>
            Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские
            свойства, а также документ, подтверждающий факт и условия покупки указанного товара;
          </li>
          <li>
            Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные
            свойства, если указанный товар может быть использован исключительно приобретающим его человеком;
          </li>
          <li>
            При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по
            договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем
            через десять дней со дня предъявления потребителем соответствующего требования;
          </li>
        </ul>
      </p>
      <h1 className="h1 leading-[40px] max-[450px]:text-[22px] max-[450px]:leading-[26.77px]">Отказ от услуги</h1>
      <p className="t3 max-[450px]:t-xs">
        Право потребителя на расторжение договора об оказании услуги регламентируется статьей 32 федерального закона «О
        защите прав потребителей»
        <br />
        <br />
        <ul className="ml-[32px] flex list-disc flex-col gap-[16px]">
          <li>
            Потребитель вправе расторгнуть договор об оказании услуги в любое время, уплатив исполнителю часть цены
            пропорционально части оказанной услуги до получения извещения о расторжении указанного договора и возместив
            исполнителю расходы, произведенные им до этого момента в целях исполнения договора, если они не входят в
            указанную часть цены услуги;
          </li>
          <li>
            Потребитель при обнаружении недостатков оказанной услуги вправе по своему выбору потребовать:
            <br />
            <br />
            <ul className="ml-[32px] flex list-disc flex-col gap-[16px]">
              <li>безвозмездного устранения недостатков;</li>
              <li>соответствующего уменьшения цены;</li>
              <li>возмещения понесенных им расходов по устранению недостатков своими силами или третьими лицами;</li>
            </ul>
          </li>
          <li>
            Потребитель вправе предъявлять требования, связанные с недостатками оказанной услуги, если они обнаружены в
            течение гарантийного срока, а при его отсутствии в разумный срок, в пределах двух лет со дня принятия
            оказанной услуги;
          </li>
          <li>
            Исполнитель отвечает за недостатки услуги, на которую не установлен гарантийный срок, если потребитель
            докажет, что они возникли до ее принятия им или по причинам, возникшим до этого момента.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default RefundContent;
