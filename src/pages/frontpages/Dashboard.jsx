import ProductCard from "../../components/ProductCard";

import Wuwa from "../../assets/Wuwa-logo.jpg";
import hsr from "../../assets/hsr-logo.jpg";
import zzz from "../../assets/zzz-logo.jpg";
import gi from "../../assets/gi-logo.jpg";

export default function Dashboard() {
  return (
    <div className="px-5 mx-4">

      <div className="h-[40px] rounded-xl bg-[#28242D] text-white mb-3 "></div>

      <div className="text-white">
        <h1 className="text-[45px] font-bold mb-2 pt-4">
          Game yang Tersedia
        </h1>

        <p className="text-[20px] mb-5 font-semibold">
          Pilih game favoritmu untuk melihat daftar layanan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border px-12 py-12 rounded-xl mt-9 text-white">

        <ProductCard
          name="Wuthering Waves"
          image={Wuwa}
        />

        <ProductCard
          name="Honkai: Star Rail"
          image={hsr}
        />

        <ProductCard
          name="Zenless Zone Zero"
          image={zzz}
        />

        <ProductCard
          name="Genshin Impact"
          image={gi}
        />

      </div>
    </div>
  );
}