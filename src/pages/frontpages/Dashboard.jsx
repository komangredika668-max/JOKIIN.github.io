import ProductCard from "../../components/ProductCard";
import { ShieldAlert, Phone, CreditCardCheck, Zap } from "lucide-react";

import Wuwa from "../../assets/Wuwa-logo.jpg";
import hsr from "../../assets/hsr-logo.jpg";
import zzz from "../../assets/zzz-logo.jpg";
import gi from "../../assets/gi-logo.jpg";

export default function Dashboard() {
  return (
    <div className="px-5 mx-4">

      <div className="h-[60px] rounded-xl bg-[#28242D] text-white mb-3 py-[16px] flex justify-center gap-10">
        <div className="flex items-center gap-2">
          <ShieldAlert size={18} />
          <span>Jaminan Proteksi Akun</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span>Jaminan Layanan 12 Jam</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCardCheck size={18} />
          <span>Pembayaran Aman & Terpercaya</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap size={18} />
          <span>Proses Cepat</span>
        </div>
      </div>

      <div className="text-white">
        <h1 className="text-[45px] font-bold mb-2 pt-4">
          Game yang Tersedia
        </h1>

        <p className="text-[20px] mb-5 font-semibold">
          Pilih game favoritmu untuk melihat daftar layanan
        </p>
      </div>

      <div className="flex justify-center gap-[60px] px-[30px] py-12 rounded-xl mt-9 drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">

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
        <div className="text-white mt-[12px]">
        <h1 className="text-[45px] font-bold mb-2 pt-4">
          Game yang Tersedia
        </h1>

        <p className="text-[20px] mb-5 font-semibold">
          Pilih game favoritmu untuk melihat daftar layanan
        </p>
        <div className="flex justify-center h-[400px] gap-[30px] items-center px-[30px] rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">
          <div className="border rounded-xl h-[260px] w-[400px]">
          <div className="border-none h-[40px] w-[120px] bg-black rounded-[8px] mt-4 ml-4 flex items-center justify-center">
          <span>Paling Laris</span>
          </div>
          </div>

          </div>
        </div>
        </div>
  );
}