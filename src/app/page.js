import Image from "next/image";
import oils from "./data/oils.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-14">
      <div className="mx-auto mb-4 sm:mb-0 text-center">
        <Image
          src="/logo.png"
          alt="Aroma Bali"
          width={1450}
          height={756}
          priority
          className="w-[240px] h-auto sm:w-[480px] sm:h-auto"
        />
      </div>
      
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {oils.map((oil) => (
          <Link key={oil.url} href={`/oil/${oil.url}`}>
            <div  className="rounded-full p-2 px-4 mb-2 sm:mb-0" style={{ backgroundColor: oil.color_code }}>
              <h2 className="text-xs sm:text-sm text-gray-50 font-medium uppercase">{oil.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}