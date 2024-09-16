import { categories } from '@/src/shared/lib/constants/categories';
import ProductsPage from '@/src/widgets/productsPage/productsPage';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { category: string } }) {
  if (
    !categories
      .map(category => {
        return category.link;
      })
      .includes(params.category)
  ) {
    notFound();
  }

  return <ProductsPage {...params} />;
}
