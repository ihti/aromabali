import Image from "next/image";
import oils from "./data/oils.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-14 relative">
      <div className="hidden sm:block absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-left bg-contain" style={{ backgroundImage: 'url(/bg-penjor.svg)' }}></div>
      <header className="w-full max-w-4xl mx-auto mb-12 text-center relative z-10">
        <Image
          src="/logo-transparent.png"
          alt="Aroma Bali"
          width={1450}
          height={756}
          priority
          className="w-[240px] h-auto sm:w-[480px] mx-auto"
        />
      </header>

      <section className="w-full max-w-4xl mx-auto mb-12 relative z-10">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center">
          Esencija tropskog raja u vašem domu
        </h1>

        <div className="space-y-4 text-md">
          <p>
            Aroma Bali donosi čaroliju balinežanske kulture i prirode u vaše
            svakodnevno iskustvo opuštanja. Naša kolekcija pažljivo odabranih
            masažnih ulja inspirirana je bogatom tradicijom i egzotičnim
            mirisima indonezijskog otoka Bali.
          </p>

          <p>
            Svako ulje u našoj liniji proizvoda stvoreno je s ljubavlju i
            pažnjom, kombinirajući tradicionalne recepture s modernim
            razumijevanjem njege kože. Koristimo samo najkvalitetnije sastojke,
            uključujući čista esencijalna ulja i hranjiva bazna ulja, kako bismo
            vam pružili izvrsno iskustvo masaže.
          </p>

          <p>
            Bilo da tražite duboku relaksaciju, obnovu energije, romantičnu
            atmosferu ili njegu kože, Aroma Bali nudi ulje koje odgovara vašim
            potrebama. Naši proizvodi su osmišljeni da zadovolje različite
            preferencije, od osvježavajućeg mirisa limunske trave do senzualnog
            jasmina, od umirujuće sandalovine do egzotičnog ylang ylanga.
          </p>

          <p>
            Aroma Bali nije samo masažno ulje - to je putovanje osjetila koje
            vas vodi kroz mirisne vrtove i slikovite krajolike Balija.
            Dopustite da vas mirisi Aroma Bali ulja prenesu u stanje duboke opuštenosti i unutarnjeg mira.
          </p>

          <p>
            Otkrijte čaroliju Balija s Aroma Bali - vašim ključem za svakodnevni
            luksuz i wellness.
          </p>

        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto relative z-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Naša ulja</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {oils.map((oil) => (
            <Link key={oil.url} href={`/massage-oil/${oil.url}`}>
              <div
                className="rounded-full p-2 px-4 transition-transform hover:scale-105"
                style={{ backgroundColor: oil.color_code }}
              >
                <h3 className="text-xs sm:text-sm text-gray-50 font-medium uppercase">
                  {oil.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-md mt-4">
          250ml: Idealno za ličnu upotrebu, uživajte u svakom trenutku masaže i prepustite se mirisu i šarmu Balija u udobnosti vlastitog doma.
        </p>
        <p className="text-md mt-2">
          500ml: Savršeno za spa centre i salone, osiguravajući da vaši klijenti osjetete šarm Balija.
        </p>
      </section>

      <section className="w-full max-w-4xl mx-auto mt-8 sm:mt-12 text-center relative z-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Kontakt</h2>
        {/* <p className="text-md mb-2">Email: info@aromabali.com</p> */}
        <p className="text-md">Tel: +387 61 157 264</p>
      </section>
    </main>
  );
}
