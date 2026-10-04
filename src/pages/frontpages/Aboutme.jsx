import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function Aboutme() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">
      <Navbar />
      <div className="text-center border-4-black mx-[300px] h-[700px] mt-8 mb-8 rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">
        <h1 className="font-bold text-[40px] mb-3 mt-8">Tentang JOKIIN</h1>
        <p className="text-[18px] font-thin">Platform penyedia layanan joki game terbaik, cepat, dan 100% aman</p>
        <div className="border mx-20 mt-8">

        </div>
        </div>
        <Footer/>
      </div>
  );
}