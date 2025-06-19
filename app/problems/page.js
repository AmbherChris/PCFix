import { Suspense } from "react";
import ProblemsPage from "./ProblemPage";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading problems...</p>}>
      <ProblemsPage />
    </Suspense>
  );
}

