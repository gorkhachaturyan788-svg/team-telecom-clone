import { useCartStore } from "./useCartStore"; 

export default function ProductCard({ product }) {
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border border-gray-200 p-6 flex flex-col items-center bg-white rounded-2xl shadow-sm transition-all hover:shadow-md relative">

      <button
        onClick={() => toggleCartItem(product)}
        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
        aria-label="Favorite"
      >
        {isInCart ? (
          <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        )}
      </button>

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

      <button 
        onClick={() => toggleCartItem(product)}
        className={`mt-4 w-full border-2 px-6 py-2.5 rounded-full font-bold text-sm transition-colors cursor-pointer ${
          isInCart 
            ? "bg-[#ff4d4f] text-white border-[#ff4d4f]" 
            : "border-[#ff4d4f] text-[#ff4d4f] hover:bg-[#ff4d4f] hover:text-white"
        }`}
      >
        {isInCart ? "Զամբյուղում է" : "Ավելացնել զամբյուղ"}
      </button>

    </div>
  );
}