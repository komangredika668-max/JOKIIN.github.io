import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#8b8b50] via-[#484351] to-[#201b29]">

      {/* Navbar */}
      <Navbar />

      {cart.length === 0 ? (
        <div className="p-6 text-center text-white text-xl">
          Belum ada pesanan
        </div>
      ) : (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Pesanan Anda
          </h1>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />

                  <div>
                    <h2 className="font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-600">
                      Rp{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">

                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    className="w-16 border rounded text-center"
                    onChange={(e) =>
                      updateQty(
                        item.id,
                        Math.max(1, parseInt(e.target.value) || 1)
                      )
                    }
                  />

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}