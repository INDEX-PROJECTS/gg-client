import DocumentsPage from '@/src/widgets/documentsPage/documentsPage';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={null}>
      <DocumentsPage />
    </Suspense>
  );
};

export default Page;
