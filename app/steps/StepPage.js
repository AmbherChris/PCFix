"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { database } from "../database/newDb";

export default function StepPage() {
  const searchParams = useSearchParams();
  const device = searchParams.get("device");
  const problemName = searchParams.get("problem");

  const deviceData = database.find(
    (d) => d.pcType.toLowerCase() === device?.toLowerCase()
  );

  // Flatten all problems from all categories
  const allProblems =
    deviceData?.problems.flatMap((category) => category.typeOfProblems) ?? [];

  const problemData = allProblems.find(
    (p) => p.problem.toLowerCase() === problemName?.toLowerCase()
  );

  if (!deviceData || !problemData) return <p>Problem not found.</p>;

  const steps = problemData.stepsInfo;

  return (
    <div className="mt-20 max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={problemData.image || "/placeholder.png"}
          alt={problemData.image}
          width={600}
          height={400}
          className="w-[70px]"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{problemData.problem}</h1>
          <p className="text-gray-700 dark:text-white">{problemData.problemDescription}</p>
        </div>
      </div>

      {steps.map((step, index) => (
        <div key={index} className="bg-white dark:bg-black p-6 rounded shadow-xs mb-4 shadow-black dark:shadow-white">
          <div className="flex gap-1 text-xl font-semibold mb-2 items-center">
            <h2 className="bg-[black] dark:bg-white dark:text-black rounded-md px-3 py-1  text-white">
              Step {step.stepNumber.trim()}
            </h2>
            <p className=" px-2">{step.stepTitle}</p>
          </div>
          <p className="mb-2">
            <strong>Why:</strong> {step.why}
          </p>
          <ul className="list-disc pl-6 mb-2">
            {step.steps.map(
              (s, i) => s && <li key={i}>{s}</li> // skip empty ones
            )}
          </ul>
          <p>
            <strong>Takeaway:</strong> {step.takeaways}
          </p>
        </div>
      ))}
    </div>
  );
}
