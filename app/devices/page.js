import Image from "next/image";
import Link from "next/link";


export default function DevicesPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-50">
      <h1 className="text-4xl font-bold">Select a type of Computer</h1>
      <div className="flex gap-[50px] mt-20">
        <Link href={{
          pathname: "/problems",
          query: { device: "Desktop" }
        }}><div className="flex flex-col border-2 border-[#171717] w-[300px] h-[250px] items-center justify-center rounded-xl shadow-lg">
          <Image src={"/desktop.png"} alt="image of desktop" 
          width={512}
          height={512}
          className="w-[250px]"/>
          <h2>Desktop</h2>
        </div></Link>
        <Link href={{
          pathname: "/problems",
          query: { device: "Laptop" }
        }}>
        <div className="flex flex-col border-2 border-[#171717] w-[300px] h-[250px] items-center justify-center rounded-xl shadow-lg">
          <Image src={"/laptop.png"} alt="image of desktop" 
          width={512}
          height={512}
          className="w-[250px]"/>
          <h2>Laptop</h2>
        </div></Link>
      </div>
      
    </div>
  );
}
