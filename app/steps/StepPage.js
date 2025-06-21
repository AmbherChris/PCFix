"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { database } from "../database/db";

export default function StepPage() {
  const searchParams = useSearchParams();
  const device = searchParams.get("device");
  const problemName = searchParams.get("problem");

  const deviceData = database.find(
    (d) => d.pcType.toLowerCase() === device?.toLowerCase()
  );

  const problemData = deviceData?.problems.find(
    (p) => p.problem.toLowerCase() === problemName?.toLowerCase()
  );

  if (!deviceData || !problemData) return <p>Problem not found.</p>;

  const steps = problemData.stepsInfo;

  return (
    <div className="mt-20 max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-3 ">
        <Image
          src={problemData.image}
          alt="problem image"
          width={600}
          height={400}
          className=" w-[70px]"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold  ">{problemData.problem}</h1>
          <p className=" text-gray-700 ">{problemData.problemDescription}</p>
        </div>
      </div>

      {steps.map((steps, index) => (
        <div key={index} className="bg-white p-6 rounded shadow-md mb-4">
          <h2 className="flex gap-2 text-xl font-semibold mb-2 ">
            Step {steps.stepNumber}<p>{steps.stepTitle}</p> 
          </h2>
          <p className="mb-2">
            <strong>Why:</strong> {steps.why}
          </p>
          <ul className="list-disc pl-6 mb-2">
            
            {steps.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
              
              
            ))}
            
          </ul>
          <p>
            <strong>Takeaway:</strong> {steps.takeaways}
          </p>
        </div>
      ))}
    </div>
  );
}
