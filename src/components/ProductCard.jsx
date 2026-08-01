export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 p-6 flex flex-col items-center bg-white rounded-2xl shadow-sm transition-all hover:shadow-md">

      <div className="overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-center font-bold text-[#003853] mt-2 text-lg">
        {product.name}
      </h3>

      <p className="text-2xl font-black text-[#003853] mt-3">
        {product.price} <span className="text-sm font-normal text-gray-500">֏</span>
      </p>

      <button className="mt-4 w-full border-2 border-[#ff4d4f] text-[#ff4d4f] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors">
        Ավելացնել զամբյուղ
      </button>

    </div>
  );
}