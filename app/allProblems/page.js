"use client";
import Image from "next/image";
import { database } from "../database/newDb";

export default function ProblemsPage() {
  const allProblems = database.flatMap((device) =>
    device.problems.flatMap((issueCategory) =>
      issueCategory.typeOfProblems.map((problem) => ({
        ...problem,
        pcType: device.pcType,
        issue: issueCategory.issue,
      }))
    )
  );

  return (
    <div className="flex flex-col justify-center items-center pt-20 dark:text-white">
      <h2 className="text-[30px] font-bold">List of Problems</h2>
      <div className="flex flex-wrap gap-10 justify-center items-start mt-[10px] px-[50px] w-full pb-20">
      {allProblems.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col w-[300px] h-[250px] items-center justify-center rounded-lg shadow-md border border-[#171717] dark:border-white gap-5 bg-white dark:bg-black"
        >
          <Image
            src={problem.image || "/fallback.png"} // Optional fallback
            alt={problem.problem}
            width={1080}
            height={1080}
            className="w-auto h-[152px]"
          />
          <h2 className="text-center font-medium text-sm px-4">
            <strong>{problem.pcType}:</strong> {problem.problem}
          </h2>
        </div>
      ))}</div>
    </div>
  );
}
