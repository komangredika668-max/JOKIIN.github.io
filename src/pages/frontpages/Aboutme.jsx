import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ShieldCheck, Zap, HandCoins, Headphones } from "lucide-react";

export default function Aboutme() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29] text-white">

      <Navbar />

      <main className="flex-1 flex justify-center px-6 py-8">
        <div className="w-full max-w-4xl">

          {/* Card Utama */}
          <div className="border bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29] border-gray-700 rounded-xl p-8 bg-[#1c1922]/90 shadow-lg">

            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Tentang JOKIIN
              </h1>

              <p className="text-gray-400 mt-2">
                Platform penyedia layanan joki game terbaik, cepat, dan 100% aman.
              </p>
            </div>

            <div className="border-b border-white my-6"></div>

            {/* Keunggulan */}
            <section>
              <h2 className="text-xl font-bold mb-6">
                Mengapa Memilih JOKIIN?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Keamanan */}
                <div className="flex gap-4">
                  <ShieldCheck className="w-7 h-7 text-white shrink-0" />

                  <div>
                    <h3 className="font-bold">
                      Keamanan Terjamin
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Akun kamu ditangani oleh penjoki profesional
                      dengan prosedur keamanan ketat.
                    </p>
                  </div>
                </div>

                {/* Proses Cepat */}
                <div className="flex gap-4">
                  <Zap className="w-7 h-7 text-white shrink-0" />

                  <div>
                    <h3 className="font-bold">
                      Proses Cepat
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Pesanan langsung diproses segera setelah
                      detail konfirmasi diterima.
                    </p>
                  </div>
                </div>

                {/* Harga */}
                <div className="flex gap-4">
                  <HandCoins className="w-7 h-7 text-white shrink-0" />

                  <div>
                    <h3 className="font-bold">
                      Harga Bersahabat
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Tarif terjangkau tanpa ada biaya tersembunyi
                      apapun.
                    </p>
                  </div>
                </div>

                {/* Customer Service */}
                <div className="flex gap-4">
                  <Headphones className="w-7 h-7 text-white shrink-0" />

                  <div>
                    <h3 className="font-bold">
                      Layanan CS 24/7
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Tim support siap membantu memantau
                      perkembangan pesananmu.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pertanyaan */}
            <div className="border border-gray-700 rounded-xl bg-[#27232e] p-6 mt-8 text-center">

              <h2 className="text-lg font-bold">
                Ada Pertanyaan Khusus?
              </h2>

              <p className="text-gray-400 text-sm mt-3">
                Hubungi customer support kami melalui WhatsApp
                untuk konsultasi kustom paket.
              </p>

              <a
                href="https://wa.me/Nomor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <span>◉</span>
                Hubungi CS WhatsApp
              </a>

            </div>

          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}