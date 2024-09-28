import Image from 'next/image';

const DirectionsContent = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="h1 leading-[40px] max-[450px]:text-[22px] max-[450px]:leading-[26.77px]">Схема проезда</h1>
      <div className="relative h-[339px] w-[452px] max-[560px]:h-[300px] max-[560px]:w-full">
        <Image src="/map.png" alt="Схема проезда" fill className="object-cover object-center" />
      </div>
    </div>
  );
};

export default DirectionsContent;
