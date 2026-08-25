import { useCartStore } from "./useCartStore"; // Ճանապարհը ուղղիր ըստ քո ֆայլի տեղի

export default function BeFreeSection() {
  // Կարդում ենք զամբյուղը և ֆունկցիան Zustand-ից
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  // Օժանդակ ֆունկցիա՝ Be Free փաթեթը զամբյուղ ուղարկելու համար (գները կարող ես փոխել ըստ անհրաժեշտության)
  const handleAddToCart = (name, price, image) => {
    const product = {
      id: `befree-${name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `Be Free փաթեթ - ${name}`,
      price: price,
      image: image,
    };
    toggleCartItem(product);
  };

  // Ստուգելու համար արդյոք տվյալ փաթեթը զամբյուղում է
  const checkIsCart = (name) => {
    const id = `befree-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return cart.some((item) => item.id === id);
  };

  const card1Img = "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17658825869005.png";
  const card2Img = "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17841229532579.png";

  return (
    <section className="w-full bg-[#003853] mt-28 pt-16 pb-24 px-4 lg:px-8 font-sans text-white border-t border-cyan-900/30">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* TOP BANNER PART */}
        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-16">
          <div className="md:col-span-7 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              Be Free-ն հատուկ գնով
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-[480px]">
              Դարձի՛ր ԿՈՍՄՈ կամ ԿՈՄԲՈ փաթեթներից մեկի բաժանորդ և ստացիր մինչև 3 SIM քարտ` հատուկ սակագներով։
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <img
              src="https://www.telecomarmenia.am/images/block_with_text/1/17761517712737.png"
              alt="3 BE FREE SIM քարտ"
              className="max-h-[160px] lg:max-h-[190px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 tracking-wide max-w-[850px] leading-tight">
          Ձեռք բեր Be Free փաթեթները հատուկ գնով
        </h2>

        {/* CARDS GRID */}
        <div className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
          
          {/* Be Free Card 1 */}
          <div className="relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]">
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("Be Free 1", 2500, card1Img)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("Be Free 1") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <img
              src={card1Img}
              alt="Be Free Card 1"
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl cursor-pointer"
              onClick={() => handleAddToCart("Be Free 1", 2500, card1Img)}
            />
          </div>

          {/* Be Free Card 2 */}
          <div className="relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]">
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("Be Free 2", 3500, card2Img)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("Be Free 2") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <img
              src={card2Img}
              alt="Be Free Card 2"
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl cursor-pointer"
              onClick={() => handleAddToCart("Be Free 2", 3500, card2Img)}
            />
          </div>

        </div>

      </div>
    </section>
  );
}