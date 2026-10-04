import { products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
  return (
    <div className="px-5 mx-4">
      <div className="h-[40px] rounded-xl bg-[#28242D] text-white"></div>
      <div className="border-none px-6 w-[450px] h-[105px] rounded-xl mt-4 bg-[#28242D] text-white ">
      <h1 className="text-3xl font-bold mb-2 pt-4">
        Game yang Tersedia 
      </h1>
      <p className="mb-5 font-semibold">Pilih game pavoritmu untuk melihat daftar layanan</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-4 px-12 py-12 rounded-xl mt-9 bg-gradient-to-r from-[#7b7b5d] via-[#484351] to-[#403B4A] text-white">
        {products.map((item) => (
          <ProductCard
            p={item}
          />
        ))}
      </div>
    </div>
  );
}