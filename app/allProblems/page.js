"use client";
import Image from "next/image";
import { database } from "../database/db";

export default function ProblemsPage() {
  const allProblems = database.flatMap((device) =>
    device.problems.map((problem) => ({
      ...problem,
      pcType: device.pcType,
    }))
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center items-start mt-[160px] px-[50px]  w-full">
      {allProblems.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col w-[300px] h-[250px] items-center justify-center rounded-lg shadow-md border border-[#171717] gap-5 bg-white"
        >
          <Image
            src={problem.image}
            alt="problem image"
            width={1080}
            height={1080}
            className="w-auto h-[152px]"
          />
       
          <h2 className="text-center font-medium">
            {problem.pcType}: {problem.problem}
          </h2>
        </div>
      ))}
    </div>
  );
}
