import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { products } from "../../utils/data";
import { useCart } from "../../context/CartContext";
export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();


  // Mencari game berdasarkan ID
  const product =
    products.find((item) => item.id === Number(id)) ||
    location.state;

  // Menyimpan layanan yang dipilih
  const [selectedService, setSelectedService] = useState(
    product?.services?.[0] || null
  );

  // Menyimpan target yang dipilih
  const [selectedTarget, setSelectedTarget] = useState(null);

  // Input email
  const [email, setEmail] = useState("");

  // Input password
  const [password, setPassword] = useState("");

  // Catatan tambahan
  const [note, setNote] = useState("");

  // Ketika jenis layanan berubah
  const handleServiceChange = (e) => {
    const serviceId = Number(e.target.value);

    const service = product.services.find(
      (item) => item.id === serviceId
    );

    setSelectedService(service);

    // Reset target ketika layanan berubah
    setSelectedTarget(null);
  };

  // Ketika target dipilih
  const handleTargetChange = (e) => {
    const targetId = Number(e.target.value);

    const target = selectedService.targets.find(
      (item) => item.id === targetId
    );

    setSelectedTarget(target);
  };

  // Format harga
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  // Harga saat ini
  const totalPrice = selectedTarget?.price || 0;

  // Tombol pesan
  const handleOrder = (e) => {
    e.preventDefault();

    if (!selectedService || !selectedTarget) {
      alert("Silakan pilih layanan dan target terlebih dahulu.");
      return;
    }

    if (!email || !password) {
      alert("Email dan password harus diisi.");
      return;
    }

    addToCart({
      id: `${product.id}-${selectedService.id}-${selectedTarget.id}`,
      game: product.name,
      image: product.image,
      logo: product.logo,
      service: selectedService.name,
      target: selectedTarget.name,
      email: email,
      password: password,
      note: note,
      price: selectedTarget.price,
    });

    alert("Pesanan berhasil ditambahkan!");
  };

  if (!product) {
    return (
      <div>
        <Navbar />

        <div className="p-6 text-center">
          <h1 className="text-xl font-bold">
            Produk tidak ditemukan
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#15131b] text-white bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">
      <Navbar />

      <div className="p-6">
        <div className="max-w-4xl mx-auto">

          {/* CARD UTAMA */}
          <form
            onSubmit={handleOrder}
            className="border border-gray-700 rounded-xl p-6 bg-[#1d1a24] shadow-lg  bg-gradient-to-r from-[#4b4b30] via-[#2e2a36] to-[#201c29]"
          >

            {/* NAMA GAME */}
            <p className="text-white font-bold uppercase tracking-wide">
              {product.name}
            </p>

            {/* JUDUL */}
            <h1 className="text-3xl font-bold mt-2">
              {selectedService?.name || "Pilih Layanan"}
            </h1>

            {/* GARIS */}
            <div className="border-b border-white my-6"></div>

            {/* DESKRIPSI */}
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase mb-2">
                Deskripsi
              </h2>

              <p className="text-gray-300">
                {selectedService?.description ||
                  "Silakan pilih jenis layanan."}
              </p>
            </div>

            {/* JENIS LAYANAN */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2">
                Pilih Jenis Layanan
              </label>

              <select
                value={selectedService?.id || ""}
                onChange={handleServiceChange}
                className="w-full bg-[#111016] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              >
                {product.services.map((service) => (
                  <option
                    key={service.id}
                    value={service.id}
                  >
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* TARGET */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2">
                Target Proses
              </label>

              <select
                value={selectedTarget?.id || ""}
                onChange={handleTargetChange}
                className="w-full bg-[#111016] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="">
                  Pilih Target
                </option>

                {selectedService?.targets.map((target) => (
                  <option
                    key={target.id}
                    value={target.id}
                  >
                    {target.name} - Rp
                    {formatPrice(target.price)}
                  </option>
                ))}
              </select>
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email akun"
                className="w-full bg-[#111016] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password akun"
                className="w-full bg-[#111016] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* CATATAN */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2">
                Catatan Tambahan (Opsional)
              </label>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                placeholder="Tuliskan login method (Google/FB/Kuro/HoYoverse) atau instruksi khusus lainnya..."
                className="w-full bg-[#111016] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            {/* TOTAL HARGA */}
            <div className="border border-gray-700 rounded-xl bg-[#27232e] p-5 mb-5">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-300">
                    Total Biaya
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Sudah termasuk garansi keamanan
                  </p>
                </div>

                <p className="text-2xl font-bold">
                  Rp{formatPrice(totalPrice)}
                </p>

              </div>
            </div>

            {/* TOMBOL */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Pesan Jasa
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}