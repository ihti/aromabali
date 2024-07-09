import Image from "next/image";
import Link from "next/link";
import oils from "../../data/oils.json";

export default function Page({ params }) {
  const oil = oils.find((oil) => oil.url === params.slug);
  if (!oil) {
    return <div>Oil not found</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{ backgroundColor: oil.color_code }}
    >
      <div className="absolute top-4 left-4">
        <a href="/" className="text-white underline">
          Home
        </a>
      </div>
      <div className="w-full mb-4 sm:mb-0 flex justify-center bg-white">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Aroma Bali"
            width={1450}
            height={756}
            priority
            className="w-[240px] h-auto sm:w-[480px] sm:h-auto"
          />
        </Link>
      </div>
      <h1 className="text-5xl mt-8 uppercase font-semibold tracking-tighter">{oil.name}</h1>
      <p className="bg-white mx-2 p-4 text-gray-900 rounded-xl text-md mt-4 w-full md:w-6/12">{oil.description}</p>
    </div>
  );
}
