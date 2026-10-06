import { Link } from "react-router-dom";

export default function ProductCard({ name, image }) {
  return (
    
    <div className="border-2 rounded-lg p-4 shadow h-[320px] w-[250px] overflow-hidden hover:border-purple-400/10 hover:shadow-lg transition-all duration-200">

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
        className="text-blue-200 font-bold border-blue-200/20 hover:border-purplez-200/20 hover:bg-purple-500/10 bg-blue-500/20 hover:text-purple-400/90 hover:shadow-lg-all duration-200 mt-2 border-2 w-[120px] h-[33px] rounded-md flex justify-center items-center text-[16px] no-underline hover:no-underline text-center"
      >
        Lihat Jasa
      </Link>

    </div>
  );
}