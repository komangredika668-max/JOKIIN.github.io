import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Wuwa from "../../assets/Wuwa-logo.jpg";
import hsr from "../../assets/hsr-logo.jpg";
import zzz from "../../assets/zzz-logo.jpg";
import gi from "../../assets/gi-logo.jpg";

export default function JasaJoki() {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">
            <Navbar />

            <div className="h-full mx-[80px] bg-gradient-to-r from-[#6b6b47] via-[#484351] to-[#292436]">

                <div className="text-center border-4-black mx-[80px] h-[850px] px-[30px] mt-12 mb-8 rounded-xl drop-shadow-md text-white bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]">

                    {/* Judul */}
                    <div className="relative text-left px-6 pt-8">

                        <h1 className="font-bold text-[45px]">
                            Jasa Joki
                        </h1>

                        <p className="text-[20px] text-blue-100 mt-1">
                            Pilih paket layanan sesuai dengan kebutuhan target kamu
                        </p>

                    </div>

                    {/* Garis */}
                    <div className="border mx-6 mt-6 border-white/10"></div>

                    {/* Card Game */}
                    <div className="grid grid-cols-2 gap-6 mx-6 mt-8">

                        {/* Wuthering Waves */}
                        <div className="bg-black/30 backdrop-blur-md rounded-xl border w-full h-[308px] border-white/10 p-6 hover:border-white/20 transition text-left">

                            <div className="flex items-center gap-3">
                                <img
                                    src={Wuwa}
                                    alt="Wuthering Waves"
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        Wuthering Waves
                                    </h2>
                                    <p className="text-[13px] text-gray-400 mt-1">
                                        Game Action RPG
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-5 pt-3 space-y-3">

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Story Quest</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Exploration 100%</span>
                                    <span>Rp40.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Farming Material</span>
                                    <span>Rp30.000</span>
                                </div>

                            </div>

                            <Link 
                            to="/product/1"
                            className="bg-white text-black font-semibold flex justify-center h-[40px] my-8 items-center rounded-[10px]">
                                Lihat Detail
                            </Link>

                        </div>


                        {/* Zenless Zone Zero */}
                        <div className="bg-black/30 backdrop-blur-md rounded-xl border w-full h-[308px] border-white/10 p-6 hover:border-white/20 transition text-left">

                            <div className="flex items-center gap-3">
                                <img
                                    src={zzz}
                                    alt="Zenles Zone Zero"
                                    className="w-12 h-12 object-cover rounded-lg"
                                />

                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        Zenless Zone Zero
                                    </h2>

                                    <p className="text-[13px] text-gray-400 mt-1">
                                        Urban Fantasy Action
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-5 pt-3 space-y-3">

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Story Commission</span>
                                    <span>Rp50.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Shiyu Defense Clear</span>
                                    <span>Rp45.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Hollow Zero Routine</span>
                                    <span>Rp35.000</span>
                                </div>

                            </div>

                           <Link 
                            to="/product/3"
                            className="bg-white text-black font-semibold flex justify-center h-[40px] my-8 items-center rounded-[10px]">
                                Lihat Detail
                            </Link>

                        </div>


                        {/* Genshin Impact */}
                        <div className="bg-black/30 backdrop-blur-md rounded-xl border w-full h-[308px] border-white/10 p-6 hover:border-white/20 transition text-left">

                            <div className="flex items-center gap-3">
                                <img
                                    src={gi}
                                    alt="Genhsin Impact"
                                    className="w-12 h-12 object-cover rounded-lg"
                                />

                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        Genshin Impact
                                    </h2>

                                    <p className="text-[13px] text-gray-400 mt-1">
                                        Open-World RPG
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-5 pt-3 space-y-3">

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Story Progress (Archon Quest)</span>
                                    <span>Rp50.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Farming Material & Artifact</span>
                                    <span>Rp30.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Spiral Abyss Floor 9-12</span>
                                    <span>Rp40.000</span>
                                </div>

                            </div>

                            <Link 
                            to="/product/4"
                            className="bg-white text-black font-semibold flex justify-center h-[40px] my-8 items-center rounded-[10px]">
                                Lihat Detail
                            </Link>

                        </div>


                        {/* Honkai Star Rail */}
                        <div className="bg-black/30 backdrop-blur-md rounded-xl border w-full h-[308px] border-white/10 p-6 hover:border-white/20 transition text-left">

                            <div className="flex items-center gap-3">
                                <img
                                    src={hsr}
                                    alt="Honkai Star Rail"
                                    className="w-12 h-12 object-cover rounded-lg"
                                />

                                <div>
                                    <h2 className="font-bold text-[18px]">
                                        Honkai: Star Rail
                                    </h2>

                                    <p className="text-[13px] text-gray-400 mt-1">
                                        Turn-Based RPG
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-5 pt-3 space-y-3">

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Trailblaze Mission Story</span>
                                    <span>Rp50.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Memory of Chaos Clear</span>
                                    <span>Rp40.000</span>
                                </div>

                                <div className="flex justify-between text-[14px] font-semibold">
                                    <span>Simulated / Divergent Universe</span>
                                    <span>Rp35.000</span>
                                </div>

                            </div>

                            <Link 
                            to="/product/2"
                            className="bg-white text-black font-semibold flex justify-center h-[40px] my-8 items-center rounded-[10px]">
                                Lihat Detail
                            </Link>

                        </div>

                    </div>

                </div>



            </div>
            <Footer />
        </div>
    );
}