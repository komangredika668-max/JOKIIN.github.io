import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";


import Background1 from "../assets/Wuwa-bg.jpg";
import Background2 from "../assets/hsr-bg.png";
import Background3 from "../assets/zzz-bg.jpg";
import Background4 from "../assets/gi-bg.jpg";

export default function MainLayout() {
  const backgrounds = [
    Background1,
    Background2,
    Background3,
    Background4
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29] ">
      {/* Header Navbar */}
      <Navbar />
                  <div className="h-full mx-[80px] bg-gradient-to-r from-[#6b6b47] via-[#484351] to-[#292436]">
      <div className="overflow-hidden flex justify-center items-center mx-20 h-[450px] mt-12 rounded-xl relative drop-shadow-md"
      >
        {/* Bg-Image */}
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`
        absolute inset-0 bg-cover bg-no-repeat bg-center transition-all  duration-[1000ms] ease-in-out

        ${currentBg === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
              }
      `}
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/20"></div>

        <div className="relative z-10 text-center text-white bg-black/40 p-5 rounded-xl">
          <h1 className="font-bold text-5xl text-white">
            Jasa Joki Game RPG Terpercaya
          </h1>

          <p className="text-lg mt-3 py-2 text-white">
            Selesaikan quest, farming material, hingga konten endgame tanpa
            ribet. Progres cepat dan akun anda dijamin aman
          </p>
        </div>
      </div>

      {/* Main Section */}
      <main className="flex-1 p-12 text">
        <Outlet />
      </main>
</div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 E-Commerce Simple App | Version 1.0</p>
      </footer>
      </div>

  );
}