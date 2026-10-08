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
          Layanan Populer
        </h1>

        <p className="text-[20px] mb-5 font-semibold">
          Layanan Joki Favorit Pilihan Gamers
        </p>
        <div className="flex justify-center overflow-hidden h-[400px] gap-[30px] items-center px-[30px] rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">
          {/*Border 1 */}
          <div className="border-2 rounded-xl h-[320px] w-[380px]">
            <div className="border border-purple-400 text-purple-200 bg-purple-500/20 h-[40px] w-[130px] font-semibold rounded-[8px] mt-6 ml-6 flex items-center justify-center">
              <span>Paling Laris</span>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[30px]">
                <h1>Story Progres</h1>
              </div>
              <div className="mt-2 text-blue-100">
                <p>Penuntasan misi story utama & sampingan cepat tanpa lelah, anda bisa request penyelesaian story sesuai dengan keinginan anda.</p>
              </div>
              <div className="mt-4 py-2 text-[18px] text-blue-100 border-t border-white/10">
                <p>Harga paketan atau menyesuaikan dengan request anda</p>
              </div>
            </div>
          </div>
          {/*Border 2 */}
          <div className="border-2 rounded-xl h-[320px] w-[380px]">
            <div className="border border-emerald-400 text-emerald-200 h-[40px] w-[180px] bg-emerald-500/20 font-semibold rounded-[8px] mt-6 ml-6 flex items-center justify-center">
              <span>Harian & Mingguan</span>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[30px]">
                <h1>Farming Material</h1>
              </div>
              <div className="mt-2 text-blue-100">
                <p>Farming material karakter atau senjata cepat tanpa ribet anda bisa request material dan jumlah sesuai kebutuhan akun anda.</p>
              </div>
              <div className="mt-4 py-2 text-[18px] text-blue-100 border-t border-white/10">
                <p>Harga paketan atau menyesuaikan dengan request anda</p>
              </div>
            </div>
          </div>
          {/*Border 3 */}
          <div className="border-2 rounded-xl h-[320px] w-[380px]">
              <div className="border h-[40px] w-[130px] border-red-400 text-red-200 bg-red-500/20 font-semibold rounded-[8px] mt-6 ml-6 flex items-center justify-center">
              <span>Progres</span>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[30px]">
                <h1>Explorasi</h1>
              </div>
              <div className="mt-2 text-blue-100">
                <p>Layanan explorasi berbagai area di dalam game, temukan chest, selesaikan puzzle, mengumpulkan berbagai item dan reward untuk mengingkatkan progres explorasi.</p>
              </div>
              <div className="mt-4 py-2 text-[18px] text-blue-100 border-t border-white/10">
                <p>Harga paketan atau menyesuaikan dengan request anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white mt-[12px]">
        <h1 className="text-[45px] font-bold mb-2 pt-4">
          Cara Memesan
        </h1>
      
      {/*Cara Pemesanan*/}
        <p className="text-[20px] mb-5 font-semibold">
          Proses simpel dan transparan dalam 4 langkah mudah
        </p>
        <div className="flex justify-center overflow-hidden h-[280px] gap-[40px] items-center px-[30px] rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">
          {/*Border 1 */}
          <div className="border-2 rounded-xl h-[200px] w-[250px]">
            <div className="flex items-center justify-center mr-7">
            <div className="border border-purple-400 text-xl text-white bg-purple-500 h-[40px] w-[40px] font-semibold rounded-full mt-6 ml-6 flex items-center justify-center ">
              <span>1</span>
              </div>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[20px] text-center">
                <h1>Pilih Game</h1>
              </div>
              <div className="mt-2 text-blue-100 text-center text-[14px]">
                <span>Tentukan game yang ingin anda jokikan.</span>
              </div>
            </div>
          </div>
          {/*Border 2 */}
          <div className="border-2 rounded-xl h-[200px] w-[250px]">
            <div className="flex items-center justify-center mr-7">
            <div className="border border-purple-400 text-xl text-white bg-purple-500 h-[40px] w-[40px] font-semibold rounded-full mt-6 ml-6 flex items-center justify-center ">
              <span>2</span>
              </div>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[20px] text-center">
                <h1>Pilih Jasa</h1>
              </div>
              <div className="mt-2 text-blue-100 text-center text-[14px]">
                <p>Pilih Kategori & paket layanan yang anda butuhkan.</p>
              </div>
            </div>
          </div>
          {/*Border 3 */}
          <div className="border-2 rounded-xl h-[200px] w-[250px]">
            <div className="flex items-center justify-center mr-7">
            <div className="border border-purple-400 text-xl text-white bg-purple-500 h-[40px] w-[40px] font-semibold rounded-full mt-6 ml-6 flex items-center justify-center ">
              <span>3</span>
              </div>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[20px] text-center">
                <h1>Isi Detail</h1>
              </div>
              <div className="mt-2 text-blue-100 text-center text-[14px]">
                <p>Masukan data akun, target, dan catatan khusus.</p>
              </div>
            </div>
          </div>
           {/*Border 4 */}
          <div className="border-2 rounded-xl h-[200px] w-[250px]">
            <div className="flex items-center justify-center mr-7">
            <div className="border border-purple-400 text-xl text-white bg-purple-500 h-[40px] w-[40px] font-semibold rounded-full mt-6 ml-6 flex items-center justify-center ">
              <span>4</span>
              </div>
            </div>
            <div className="px-6">
              <div className="mt-2 font-bold text-[20px] text-center">
                <h1>Pesanan Diproses</h1>
              </div>
              <div className="mt-2 text-blue-100 text-center text-[14px]">
                <p>Joki pengerjaan langsung jalan secara cepat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}