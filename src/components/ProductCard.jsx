import { Link } from "react-router-dom";

export default function ProductCard({ name, image }) {
  return (
    
    <div className="border-2 rounded-lg p-4 shadow hover:shadow-lg h-[320px] w-[250px] overflow-hidden">

      {/* Logo Game */}
      <img
        src={image}
        alt={name}
        className="w-full object-cover rounded-lg mb-3"
      />

      {/* Nama Game */}
      <h2 className="font-semibold text-xl">
        {name}
      </h2>

      {/* Tombol Lihat Jasa */}
      <Link
        to="/JasaJoki"
        className="text-blue-500 hover:underline mt-2 border w-[120px] h-[33px] rounded-md block text-xl text-center"
      >
        Lihat Jasa
      </Link>

    </div>
  );
}