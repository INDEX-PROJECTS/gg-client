import { categories } from '@/src/shared/lib/constants/categories';
import { categoriesAlternative } from '@/src/shared/lib/constants/categoriesAlternative';
import { ALTERNATIVE_CATEGORIES } from '@/src/shared/lib/constants/env.config';
import ProductPage from '@/src/widgets/productPage/productPage';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { category: string; productId: string } }) => {
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

  return <ProductPage {...params} />;
};

export default Page;
