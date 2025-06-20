import { Suspense } from 'react';
import StepPage from './StepPage';

export default function Page() {
  return (
    <Suspense fallback={<p>Loading step...</p>}>
      <StepPage />
    </Suspense>
  );
}
