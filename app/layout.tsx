import MainContainer from '@/src/shared/components/mainContainer/mainContainer';
import Footer from '@/src/widgets/footer/footer';
import Header from '@/src/widgets/header/header';
import type { Metadata } from 'next';
import { Ruda } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const ruda = Ruda({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ruda',
});

export const metadata: Metadata = {
  title: 'ГУРУ ГРУПП',
  description: 'Профессиональное и промышленное оборудование.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ruda.variable} font-sans`}>
        <Header />
        <MainContainer className="flex-grow pb-[80px] pt-[48px] max-[660px]:pb-[40px] max-[660px]:pt-[24px]">
          {children}
        </MainContainer>
        <Footer />
      </body>
    </html>
  );
}
