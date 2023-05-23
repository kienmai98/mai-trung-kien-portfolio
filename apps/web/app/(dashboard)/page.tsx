import { Suspense } from 'react';
import { Introduce } from '@/web/components/Dashboard';
import Loading from './loading';

export default function DashboardPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="my-28">
        <Introduce />
      </div>
    </Suspense>
  );
}
