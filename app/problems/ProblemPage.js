"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { database } from "../database/newDb";

export default function ProblemsPage() {
  const searchParams = useSearchParams();
  const device = searchParams.get("device");

  const deviceData = database.find(
    (d) => d.pcType.toLowerCase() === device?.toLowerCase()
  );

  if (!deviceData) return <p>No data found for "{device}"</p>;

  return (
    <div className="flex flex-col gap-16 mt-[160px] items-center justify-center px-10 pb-20">
      {deviceData.problems.map((category, index) => (
        <div
          key={index}
          className="w-full max-w-[1400px] flex flex-col "
        >
          <h2 className="text-2xl font-bold mb-8 ml-10 text-center">
            {category.issue}
          </h2>

          <div className="flex flex-wrap gap-10 justify-center">
            {category.typeOfProblems.map((problem, i) => (
              <Link
                key={i}
                href={{
                  pathname: "/steps",
                  query: {
                    device: deviceData.pcType,
                    problem: problem.problem,
                    issue: category.issue,
                  },
                }}
              >
                <div className="flex flex-col w-[300px] h-[250px] items-center justify-center rounded-lg shadow-md border border-[#171717] gap-5 hover:scale-105 transition">
                  <Image
                    src={problem.image || "/vercel.svg"}
                    alt={problem.problem}
                    width={300}
                    height={170}
                    className="object-contain h-[170px]"
                  />
                  <h3 className="text-center px-4">{problem.problem}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
