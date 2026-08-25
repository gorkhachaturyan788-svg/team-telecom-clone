import { useCartStore } from "./useCartStore";

export default function NumberCard({ id, badge, number, price, oldPrice }) {
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  const cartItemId = `number-${id}`;

  const handleAddToCart = () => {
    const numericPrice = parseInt(String(price || 0).replace(/,/g, ""), 10);

    const product = {
      id: cartItemId,
      name: `Համար՝ ${number}`,
      price: numericPrice,
      image: "https://www.telecomarmenia.am/files/icons/1/16510709622802/56x56.png",
    };
    toggleCartItem(product);
  };

  const isCart = cart.some((item) => item.id === cartItemId);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between overflow-hidden relative transition-all duration-300 hover:shadow-2xl">
      
      {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
      <button
        onClick={handleAddToCart}
        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-transform cursor-pointer"
        aria-label="Favorite"
      >
        {isCart ? (
          <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        )}
      </button>

      {/* ԿԱՊՈՒՅՏ ՎԵՐՆԱՄԱՍ */}
      <div className="bg-[#05143a] text-white py-8 px-6 text-center">
        <span className="text-3xl font-black tracking-widest">
          {badge}
        </span>
      </div>

      {/* ՍՊԻՏԱԿ ՀԱՏՎԱԾ */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-2xl font-extrabold text-[#1b2d46] tracking-wider mb-4 text-center">
            {number}
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            {oldPrice && (
              <span className="text-gray-400 line-through text-xs font-medium">
                {oldPrice} ֏
              </span>
            )}
            <span className="text-2xl font-extrabold text-[#1b2d46]">
              {price} <span className="text-sm font-normal">֏</span>
            </span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full font-bold py-3 rounded-full text-sm transition-all duration-200 shadow cursor-pointer ${
            isCart
              ? "bg-[#05143a] text-white"
              : "border border-[#e85050] text-[#e85050] hover:bg-[#e85050] hover:text-white"
          }`}
        >
          {isCart ? "Զամբյուղում է" : "Ավելացնել զամբյուղ"}
        </button>
      </div>

    </div>
  );
}