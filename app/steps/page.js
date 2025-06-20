import { Suspense } from "react";
import ProblemsPage from "./ProblemPage";
import StepPage from "./HowSteps";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading problems...</p>}>
      <StepPage />
    </Suspense>
  );
}

