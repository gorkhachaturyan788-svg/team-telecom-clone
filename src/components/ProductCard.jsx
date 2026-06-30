export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 p-6 flex flex-col items-center">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 object-contain"
      />

      <h3 className="text-center font-medium mt-4">
        {product.name}
      </h3>

      <p className="text-2xl font-bold mt-3">
        {product.price} ֏
      </p>

      <button className="mt-4 border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
        Ավելացնել զամբյուղ
      </button>

    </div>
  );
}