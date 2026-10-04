import { Link } from "react-router-dom";
import logo from "../assets/J.jpg";

export default function Navbar() {
  return (
    <nav className="bg-[#28242D] text-white border-none px-20 py-4 flex justify-between items-center border-b-2 sticky top-0 z-50 backdrop-blur-md bg-opacity-70">

      <div className="flex items-center">
  <img
    src={logo}
    alt="JOKIIN"
    className="w-12 h-12 object-contain rounded-md"
  />
  <h1 className="font-bold text-2xl px-3">
  JOKIIN
</h1>
</div>

      <div className="flex gap-12 text-lg font-semibold">
         <Link
          to="/"
           onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`transition ${
            location.pathname === "/"
              ? "text-blue-400"
              : "text-white hover:text-gray-500"
          }`}
        >
          Home
        </Link>

           <Link
          to="/JasaJoki"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`transition ${
            location.pathname === "/JasaJoki"
              ? "text-blue-400"
              : "text-white hover:text-gray-500"
          }`}
        >
          Jasa Joki
        </Link>

          <Link
          to="/Pesanan"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Pesanan
        </Link>

          <Link
          to="/aboutme"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="hover:text-gray-500 transition"
        >
          Tentang Kami
        </Link>

      </div>
    </nav>
  );
}