import Image from "next/image";
import Background from "../../../public/Images /Hairdresser David Geib.jpg";
import Header from "./Header";
import { Button } from "../ui/button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Island_Moments } from "next/font/google";

const inter = Island_Moments({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="bg-gray-900 h-screen">
      <Header />
      <div className="relative isolate h-screen overflow-hidden">
        <Image
          src={Background}
          alt="Picture of the author"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black -z-10 opacity-60"></div>

        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className={"grid gap-20 grid-cols-2 " + inter.className}>
            <h1 className="text-7xl text-right font-bold tracking-tight text-white sm:text-9xl">
              Good Hair
            </h1>
            <div></div>
            <div></div>
            <h1 className="text-7xl font-bold text-left tracking-tight text-white sm:text-9xl">
              Good Vibes
            </h1>
          </div>
          <div className="mt-24 flex flex-col items-center justify-center gap-y-20">
            <Button variant="outline" className={" text-4xl py-5 " + inter.className}>
              Book Now
            </Button>
            <ArrowDownIcon
              className="h-12 w-12 text-white animate-bounce hover:animate-none hover:cursor-pointer"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
