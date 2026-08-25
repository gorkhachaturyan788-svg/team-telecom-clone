import { useState } from "react";
import { useCartStore } from "./useCartStore"; // Ճանապարհը ուղղիր ըստ քո ֆայլի տեղի

export default function CosmoTariffs() {
  const [activeTab, setActiveTab] = useState("main");

  // Կարդում ենք զամբյուղը և ֆունկցիան Zustand-ից
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  const icons = {
    wifi: "https://www.telecomarmenia.am/files/icons/1/16511239783327/56x56.png",
    teamTv: "https://www.telecomarmenia.am/files/icons/1/16514909792549/56x56.png",
    min: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png",
    gb: "https://www.telecomarmenia.am/files/icons/1/16251191399435/56x56.png",
    roamingMb: "https://www.telecomarmenia.am/files/icons/1/16994293629645/56x56.png",
    roamingMin: "https://www.telecomarmenia.am/files/icons/1/17616451672333/56x56.png",
    router: "https://www.telecomarmenia.am/files/icons/1/17144783965957/56x56.png",
    sim: "https://www.telecomarmenia.am/files/icons/1/16510709622802/56x56.png",
    powerbank: "https://www.telecomarmenia.am/files/icons/1/17757190432027/56x56.png",
    tvBox: "https://www.telecomarmenia.am/files/icons/1/16251406113014/56x56.png",
    geforce: "https://www.telecomarmenia.am/files/icons/1/17035894329774/56x56.png",
    spotify: "https://www.telecomarmenia.am/images/product_apps/1/17664906151079.png",
    messenger: "https://www.telecomarmenia.am/images/product_apps/1/16251465101635.png",
    whatsapp: "https://www.telecomarmenia.am/images/product_apps/1/1625146527316.png",
    telegram: "https://www.telecomarmenia.am/images/product_apps/1/17664907254379.png",
  };

  const cardHoverStyle = 
    "bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between text-center relative " +
    "transform transition-all duration-300 ease-out " + 
    "hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:z-10 shadow-lg border border-transparent hover:border-gray-200";

  // Օժանդակ ֆունկցիա՝ սակագինը որպես ապրանք զամբյուղ ուղարկելու համար
  const handleAddToCart = (name, price) => {
    const product = {
      id: `cosmo-${name.toLowerCase().replace(/\s+/g, '-')}`, // Ստեղծում ենք յուրահատուկ id
      name: `Կոսմո փաթեթ - ${name}`,
      price: price,
      image: icons.wifi, // Որպես նկար վերցնում ենք wifi-ի իկոնկան
    };
    toggleCartItem(product);
  };

  // Ստուգելու համար արդյոք տվյալ փաթեթը զամբյուղում է
  const checkIsCart = (name) => {
    const id = `cosmo-${name.toLowerCase().replace(/\s+/g, '-')}`;
    return cart.some((item) => item.id === id);
  };

  return (
    <section className="w-full bg-[#003853] py-16 px-4 lg:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TABS */}
        <div className="max-w-[800px] mx-auto bg-white rounded-t-2xl flex overflow-hidden mb-12 shadow-md">
          <button
            onClick={() => setActiveTab("main")}
            className={`flex-1 py-4 text-lg lg:text-xl font-bold transition-colors cursor-pointer ${
              activeTab === "main"
                ? "bg-white text-[#003853] border-b-4 border-[#e85050]"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            Հիմնական
          </button>
          <button
            onClick={() => setActiveTab("regional")}
            className={`flex-1 py-4 text-lg lg:text-xl font-bold transition-colors cursor-pointer ${
              activeTab === "regional"
                ? "bg-white text-[#003853] border-b-4 border-[#e85050]"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            Մարզային
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch pt-4">
          
          {/* CARD 1: ԿՈՍՄՈ 2 */}
          <div className={cardHoverStyle}>
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("ԿՈՍՄՈ 2", 8000)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("ԿՈՍՄՈ 2") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#003853]">ԿՈՍՄՈ 2</h3>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#003853] my-4">8000 ֏</div>

              <div className="space-y-5 text-left mt-8 text-gray-700 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <img src={icons.wifi} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-800">250 <span className="text-xs font-normal">Մբիթ/վրկ</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.min} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">3,200</span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">1500 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.gb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">40 <span className="text-xs font-normal">ԳԲ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.router} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">Beacon 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.sim} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3 Be Free</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <img src={icons.spotify} alt="" className="w-6 h-6 rounded-full" />
                  <img src={icons.messenger} alt="" className="w-6 h-6" />
                  <img src={icons.whatsapp} alt="" className="w-6 h-6" />
                  <img src={icons.telegram} alt="" className="w-6 h-6" />
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-bold">+13</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart("ԿՈՍՄՈ 2", 8000)}
              className={`w-full mt-8 font-bold py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
                checkIsCart("ԿՈՍՄՈ 2") 
                  ? "bg-gray-800 text-white" 
                  : "bg-[#e85050] hover:bg-[#d43f3f] text-white"
              }`}
            >
              {checkIsCart("ԿՈՍՄՈ 2") ? "Զամբյուղում է" : "Միանալ"}
            </button>
          </div>

          {/* CARD 2: ԿՈՍՄՈ 4 (25%) */}
          <div className={cardHoverStyle}>
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("ԿՈՍՄՈ 4 (25%)", 9375)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("ԿՈՍՄՈ 4 (25%)") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <div className="absolute -top-4 -left-2 bg-[#e85050] text-white font-extrabold text-lg px-3 py-1 rounded-full shadow-lg transform -rotate-12">
              25%
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#003853]">ԿՈՍՄՈ 4</h3>
              <div className="my-3">
                <span className="text-xl text-gray-400 line-through font-semibold mr-2">12500</span>
                <span className="text-3xl lg:text-4xl font-extrabold text-[#e85050]">9375 ֏</span>
              </div>
              <div className="space-y-4 text-left mt-6 text-gray-700 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <img src={icons.wifi} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-800">450 <span className="text-xs font-normal">Մբիթ/վրկ</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.teamTv} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">150 <span className="text-xs font-normal">ալիք</span></span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">+1 TeamTV Smart հավելված Android, Samsung, LG Smart հեռուստացույցների համար</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.min} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">5,000</span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">3000 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.gb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">Անսահմ.</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">200 <span className="text-xs font-normal">ՄԲ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMin} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">180 <span className="text-xs font-normal">րոպե</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.router} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">Beacon 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.sim} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3 Be Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.geforce} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-gray-800">Free</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart("ԿՈՍՄՈ 4 (25%)", 9375)}
              className={`w-full mt-8 font-bold py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
                checkIsCart("ԿՈՍՄՈ 4 (25%)") 
                  ? "bg-gray-800 text-white" 
                  : "bg-[#e85050] hover:bg-[#d43f3f] text-white"
              }`}
            >
              {checkIsCart("ԿՈՍՄՈ 4 (25%)") ? "Զամբյուղում է" : "Միանալ"}
            </button>
          </div>

          {/* CARD 3: ԿՈՍՄՈ 4 (700 Մբիթ) */}
          <div className={cardHoverStyle}>
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("ԿՈՍՄՈ 4 700 Մբիթ", 12375)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("ԿՈՍՄՈ 4 700 Մբիթ") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <div className="absolute -top-4 -left-2 bg-[#e85050] text-white font-extrabold text-lg px-3 py-1 rounded-full shadow-lg transform -rotate-12">
              25%
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#003853]">ԿՈՍՄՈ 4</h3>
              <div className="my-3">
                <span className="text-xl text-gray-400 line-through font-semibold mr-2">16500</span>
                <span className="text-3xl lg:text-4xl font-extrabold text-[#e85050]">12375 ֏</span>
              </div>
              <div className="space-y-4 text-left mt-6 text-gray-700 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <img src={icons.wifi} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-800">700 <span className="text-xs font-normal">Մբիթ/վրկ</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.teamTv} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">200 <span className="text-xs font-normal">ալիք</span></span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">+1 TeamTV Smart հավելված Android, Samsung, LG Smart հեռուստացույցների համար</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.min} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">8,000</span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">5000 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.gb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">Անսահմ.</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">300 <span className="text-xs font-normal">ՄԲ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMin} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">180 <span className="text-xs font-normal">րոպե</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.router} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">Beacon 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.powerbank} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">PowerBank</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.sim} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3 Be Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.geforce} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-gray-800">Performance</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart("ԿՈՍՄՈ 4 700 Մբիթ", 12375)}
              className={`w-full mt-8 font-bold py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
                checkIsCart("ԿՈՍՄՈ 4 700 Մբիթ") 
                  ? "bg-gray-800 text-white" 
                  : "bg-[#e85050] hover:bg-[#d43f3f] text-white"
              }`}
            >
              {checkIsCart("ԿՈՍՄՈ 4 700 Մբիթ") ? "Զամբյուղում է" : "Միանալ"}
            </button>
          </div>

          {/* CARD 4: ԿՈՍՄՈ GIG */}
          <div className={cardHoverStyle}>
            {/* 🤍 ՍՐՏԻԿԻ ԿՈՃԱԿ */}
            <button
              onClick={() => handleAddToCart("ԿՈՍՄՈ GIG", 55000)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:scale-110 transition-transform cursor-pointer"
              aria-label="Favorite"
            >
              {checkIsCart("ԿՈՍՄՈ GIG") ? (
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </button>

            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#003853]">ԿՈՍՄՈ GIG</h3>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#003853] my-4">55000 ֏</div>
              <div className="space-y-4 text-left mt-8 text-gray-700 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <img src={icons.wifi} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-semibold text-lg text-gray-800">1 <span className="text-xs font-normal">ԳԲիթ/վրկ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.teamTv} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">200 <span className="text-xs font-normal">ալիք</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={icons.min} alt="" className="w-8 h-8 object-contain mt-0.5" />
                  <div>
                    <span className="font-bold text-lg text-gray-800">8,000</span>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">5000 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.gb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">Անսահմ.</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMb} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">300 <span className="text-xs font-normal">ՄԲ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.roamingMin} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-lg text-gray-800">180 <span className="text-xs font-normal">րոպե</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.router} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3xBeacon2</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.sim} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3 Be Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.tvBox} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-medium text-gray-700">3xTV</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={icons.geforce} alt="" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-gray-800">Performance</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart("ԿՈՍՄՈ GIG", 55000)}
              className={`w-full mt-8 font-bold py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ${
                checkIsCart("ԿՈՍՄՈ GIG") 
                  ? "bg-gray-800 text-white" 
                  : "bg-[#e85050] hover:bg-[#d43f3f] text-white"
              }`}
            >
              {checkIsCart("ԿՈՍՄՈ GIG") ? "Զամբյուղում է" : "Միանալ"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}