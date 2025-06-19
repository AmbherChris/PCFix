"use client";

import { useSearchParams } from "next/navigation";
import { database } from "../database/db";

export default function ProblemsPage() {
  const searchParams = useSearchParams();
  const device = searchParams.get("device");

  const deviceData = database.find(
    (d) => d.pcType.toLowerCase() === device?.toLowerCase()
  );

  if (!deviceData) return <p>No data found.</p>;

  return (
    <div className="flex gap-20 justify-center items-center mt-[160px]">
      {deviceData.problems.map((problem, index) => (
        <div key={index}
        className="flex w-[300px] h-[250] items-center justify-center rounded-lg shadow-md border-1 border-[#171717]">
          <h2 >{problem.problem}</h2>
        </div>
      ))}
    </div>
  );
}
