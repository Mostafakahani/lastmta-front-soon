import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen text-slate-50 border border-slate-800">
      <header className="flex justify-between m-4 items-center bg-transparent">
        <div>LAST MTA</div>
        <div>
          <button className="border-slate-100 border p-2 rounded-sm ">
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
              className="w-8 sm:w-2/4 h-auto absolute bottom-0 md:top-[100] mb-10 md:w-8 rounded-xl shadow-2xl animate-bounce cursor-pointer"
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
              className=" w-1/4 sm:w-2/4 h-auto absolute bottom-0 md:top-50 md:w-1/4"
            />
            <Image
              src="/images/women.svg"
              alt="women in last mta"
              width={0}
              height={0}
              quality={100}
              style={{ zIndex: 11 }}
              className=" w-3/4 sm:w-2/4 h-auto absolute bottom-0 md:top-50 md:w-1/4"
            />
          </div>
          <div className="relative flex justify-center">
            <h1 className="z-10  absolute shadow-md text-6xl md:text-9xl mx-auto top-24 bg-gradient-to-r from-rose-500 to-purple-500 text-transparent bg-clip-text">
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
              className="object-cover w-20 sm:w-36 h-auto absolute animate-fade-down animate-infinite animate-ease-in-out animate-alternate-reverse animate-fill-both md:left-40"
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
              className="object-cover w-2/4 sm:w-28 h-auto absolute animate-fade-down animate-infinite animate-ease-in-out animate-alternate-reverse animate-fill-both md:right-36 md:top-56"
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
