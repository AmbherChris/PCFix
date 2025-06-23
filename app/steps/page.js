import { Suspense } from 'react';
import StepPage from './StepPage';

export default function Page() {
  return (
    <Suspense fallback={<p className='self-center text-30'>Loading step...</p>}>
      <StepPage />
    </Suspense>
  );
}
