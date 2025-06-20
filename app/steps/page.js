
export const dynamic = 'force-dynamic';
'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { database } from '../database/db';

export default function StepPage() {
  const searchParams = useSearchParams();
  const device = searchParams.get('device');
  const problemName = searchParams.get('problem');

  const deviceData = database.find(
    (d) => d.pcType.toLowerCase() === device?.toLowerCase()
  );

  const problemData = deviceData?.problems.find(
    (p) => p.problem.toLowerCase() === problemName?.toLowerCase()
  );

  if (!deviceData || !problemData) return <p>Problem not found.</p>;

  const steps = problemData.stepsInfo;

  return (
    <div className="mt-32 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">{problemData.problem}</h1>
      <Image
        src={problemData.image}
        alt="problem image"
        width={600}
        height={400}
        className="mb-6 w-[100px]"
      />
      <p className="mb-4 text-gray-700">{problemData.problemDescription}</p>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Step {steps.stepNumber}: {steps.stepTitle}
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
    </div>
  );
}
