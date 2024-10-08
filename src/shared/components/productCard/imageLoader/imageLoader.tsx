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
          className={cn(
            'h-full w-full bg-white-100 object-contain object-center',
            !loaded ? 'opacity-0' : !image && 'object-cover',
          )}
          draggable={false}
          onLoad={() => setLoaded(true)}
          quality={image ? 50 : 90}
          sizes="303px"
        />
      }
      {!loaded && <Skeleton className="h-full w-full" />}
    </>
  );
};

export default ImageLoader;
