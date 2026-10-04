import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function JasaJoki() {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">
            <Navbar />
            <div className="text-center border-4-black mx-[300px] h-[700px] mt-8 mb-8 rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">
                <h1 className="font-bold text-[50px] mb-1 mt-8">Jasa Joki</h1>
                <p className="text-[18px] font-thin border-none h-[50px] mt-3 py-[11px] rounded-2xl mx-[220px] bg-gradient-to-r from-[#28242D] to-[#221f27]">Pilih paket layanan sesuai dengan kebutuhan target kamu</p>
                <div className="border mx-20 mt-7"></div>

            <div className="flex justify-center ">
                <div className=" bg-black/30 backdrop-blur-md rounded-xl border w-[200px] mx-20 mt-12 h-[200px] border-white/10 p-6 space-y-5 hover:border-white/20 transition">
                    <div>Wuthering Waves</div>
                </div>
                 <div className=" bg-black/30 backdrop-blur-md rounded-xl border w-[200px] mx-20 mt-12 h-[200px] border-white/10 p-6 space-y-5 hover:border-white/20 transition">
                    <div>Honkai Star Rail</div>
                </div>
                
                </div>
            </div>
            <Footer />

        </div>
    );
}