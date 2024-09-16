import { categories } from '@/src/shared/lib/constants/categories';
import ProductPage from '@/src/widgets/productPage/productPage';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { category: string; productId: string } }) => {
  if (
    !categories
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
