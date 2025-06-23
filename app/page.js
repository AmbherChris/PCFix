import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-[150px]">
      
      <main className="flex justify-center flex-col items-center ">
        <h1 className="text-[70px] w-[700px] text-center">
          Take Control of Your Computer – Learn to Fix It Yourself
        </h1>
        <p className="text-[22px] text-center w-[500px]">
          Easy-to-follow tutorials to diagnose, troubleshoot, and fix your PC
          problems – all in one place.
        </p>
        <Link
          href="/devices"
          className="flex w-[200px] h-[50px] bg-[#000000] text-[22px] text-[white] items-center justify-center rounded-lg mt-10 dark:bg-white dark:text-black "
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
