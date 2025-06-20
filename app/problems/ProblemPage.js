"use client";
import Image from "next/image";
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
    <div className="flex flex-wrap  gap-20 mt-[160px]  justify-center">
      <div className="flex flex-wrap justify-center items-center w-[1400px] gap-20  ">
      {deviceData.problems.map((problem, index) => (
        <div key={index}
        className="flex flex-col w-[300px] h-[250px] items-center justify-center rounded-lg shadow-md border-1 border-[#171717] gap-5 ">
          
          <Image 
          src={problem.image} 
          alt="image" 
          width={1080} 
          height={1080}
          className="w-auto h-[152px]"/>
          <h2 >{problem.problem}</h2>
        </div>
      ))}</div>
    </div>
  );
}
