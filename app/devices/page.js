"use client";
import Image from "next/image";
import Link from "next/link";

export default function DevicesPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-50">
      <h1 className="text-4xl font-bold">Select a type of Computer</h1>
      <div className="flex gap-[50px] mt-20">
        <Link
          href={{
            pathname: "/problems",
            query: { device: "Desktop" },
          }}
        >
          <div className="flex flex-col border-2 border-[#171717] w-[300px] h-[250px] items-center justify-center rounded-xl shadow-lg gap- p-4 dark:border-white">
            <Image
              src={"/desktop.png"}
              alt="image of desktop"
              width={300}
              height={170}
              className="object-contain h-fill w-auto "
            />
            <h2>Desktop</h2>
          </div>
        </Link>
        <button onClick={() => alert("Not available")}>
          <div className="relative flex flex-col border-2 border-[#171717] w-[300px] h-[250px] items-center justify-center rounded-xl shadow-lg">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black dark:bg-white  bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <span className="text-white dark:text-black text-xl font-bold">
                Not Available
              </span>
            </div>

            <Image
              src={"/laptop.png"}
              alt="image of laptop"
              width={512}
              height={512}
              className="w-[250px] z-0"
            />
            <h2 className="z-0">Laptop</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
