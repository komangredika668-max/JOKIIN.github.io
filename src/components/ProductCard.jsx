import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="border-4 rounded-lg p-4 shadow hover:shadow-lg">

      {/* Gambar Produk */}
      <img
        src={p.img}
        alt={p.name}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />

      <h2 className="font-semibold">
        {p.name}
      </h2>

      <p className="text-gray-600">
        Rp {p.price.toLocaleString("id-ID")}
      </p>

      <Link
        to={`/product/${p.slug}`}   
        state={p}
        className="text-white hover:underline mt-2 border w-[100px] h-[33px] rounded-md block text-xl text-center "
      >
        Lihat Jasa
      </Link>
    </div>
  );
}