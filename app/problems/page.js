import { Suspense } from "react";
import ProblemsPage from "./ProblemPage";

export default function Page() {
  return (
    <Suspense fallback={<p className="self-center text-30"
    >Loading problems...</p>}>
      <ProblemsPage />
    </Suspense>
  );
}

