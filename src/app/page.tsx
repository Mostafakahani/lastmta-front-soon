"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen text-slate-50 border border-slate-800">
      <header className="flex justify-between m-4 items-center bg-transparent">
        <div>LAST MTA</div>
        <div>
          <button
            className="border-slate-100 border p-2 rounded-sm "
            onClick={() => window.open("https://t.me/LasTMTA", "_blank")}
          >
            NOTIFY ME
          </button>
        </div>
      </header>
      <main>
        <div>
          <div className="flex justify-center">
            <Image
              src="/images/tel.svg"
              alt="women in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 12 }}
              onClick={() => router.push("https://t.me/LasTMTA")}
              className="w-8 h-auto absolute bottom-0 md:top-[100] mb-10 md:w-8 rounded-xl shadow-2xl animate-bounce cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/women.svg"
              alt="women in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 11 }}
              className=" w-80 sm:w-96 h-auto absolute bottom-0 md:top-50 md:w-1/4"
            />
          </div>
          <div className="relative flex justify-center">
            <h1 className="z-10 text-center xl:text-left absolute shadow-md text-7xl md:text-9xl mx-auto top-24 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              COMING SOON
            </h1>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/circal.svg"
              alt="circal in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 1 }}
              className="object-cover w-20 right-10 sm:w-36 h-auto absolute animate-fade-down2 md:left-40"
            />
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/circal.svg"
              alt="circal in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 1 }}
              className="object-cover w-5 left-10 sm:w-96 h-max absolute animate-fade-down2  md:right-30 md:top-96"
            />
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/circal.svg"
              alt="circal in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 1 }}
              className="object-cover top-[424px] w-96 sm:w-28 h-auto absolute animate-fade-down animate-infinite animate-ease-in-out animate-alternate-reverse animate-fill-both md:right-36 md:top-56"
            />
          </div>
          <Image
            src="/images/stars.svg"
            alt="stars in last mta"
            width={0}
            height={0}
            quality={100}
            style={{ zIndex: -1 }}
            className="object-cover w-screen h-screen relative"
          />
        </div>
      </main>
    </div>
  );
}
