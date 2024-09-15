'use client';
import ProductPattern from '@/src/shared/assets/productPattern.png';
import { Skeleton } from '@/src/shared/components/ui/skeleton';
import { IProduct } from '@/src/shared/lib/types/types';
import { cn } from '@/src/shared/lib/utils/cnMerge';
import Image from 'next/image';
import { useState } from 'react';

const ImageLoader = ({ image, title }: Pick<IProduct, 'image' | 'title'>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {
        <Image
          src={image ?? ProductPattern}
          alt={title}
          fill
          className={cn('h-full w-full bg-white-100 object-cover object-center', !loaded && 'opacity-0')}
          loading="eager"
          draggable={false}
          onLoadingComplete={() => setLoaded(true)}
        />
      }
      {!loaded && <Skeleton className="h-full w-full" />}
    </>
  );
};

export default ImageLoader;
