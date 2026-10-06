import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">

      <Navbar />

      <main className="flex-1 px-6 py-10">

        {cart.length === 0 ? (
          <div className="text-center text-white text-xl py-20">
            Belum ada pesanan
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">

            <h1 className="text-3xl font-bold mb-8 text-white">
              Pesanan Anda
            </h1>

            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-white"
                >

                  <div className="flex gap-5">

                    {/* Gambar Game */}
                    <img
                      src={item.logo}
                      alt={item.game}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    {/* Informasi */}
                    <div className="flex-1">

                      <h2 className="text-xl font-bold">
                        {item.game}
                      </h2>

                      <div className="mt-3 space-y-1 text-sm">

                        <p>
                          <span className="text-gray-400">
                            Layanan:
                          </span>{" "}
                          {item.service}
                        </p>

                        <p>
                          <span className="text-gray-400">
                            Target:
                          </span>{" "}
                          {item.target}
                        </p>

                        {item.note && (
                          <p>
                            <span className="text-gray-400">
                              Catatan:
                            </span>{" "}
                            {item.note}
                          </p>
                        )}

                      </div>

                      <p className="mt-4 font-semibold text-lg">
                        Rp{item.price.toLocaleString("id-ID")}
                      </p>

                    </div>

                    {/* Quantity + Delete */}
                    <div className="flex flex-col items-end justify-between">

                      <input
                        type="number"
                        value={item.qty}
                        min="1"
                        className="w-16 border rounded text-center text-black"
                        onChange={(e) =>
                          updateQty(
                            item.id,
                            Math.max(
                              1,
                              parseInt(e.target.value) || 1
                            )
                          )
                        }
                      />

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Hapus
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Total */}
            <div className="mt-8 bg-black/30 border border-white/10 rounded-xl p-6 text-white">

              <div className="flex justify-between items-center">

                <span className="text-xl font-semibold">
                  Total Pesanan
                </span>

                <span className="text-2xl font-bold">
                  Rp{totalPrice.toLocaleString("id-ID")}
                </span>

              </div>

            </div>

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}