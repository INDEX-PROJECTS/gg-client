import { categories } from '@/src/shared/lib/constants/categories';
import { categoriesAlternative } from '@/src/shared/lib/constants/categoriesAlternative';
import { ALTERNATIVE_CATEGORIES } from '@/src/shared/lib/constants/env.config';
import ProductsPage from '@/src/widgets/productsPage/productsPage';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { category: string } }) {
  if (
    ALTERNATIVE_CATEGORIES === 'true'
      ? !categoriesAlternative
      : !categories
          .map(category => {
            return category.link;
          })
          .includes(params.category)
  ) {
    notFound();
  }

  return <ProductsPage {...params} />;
}
