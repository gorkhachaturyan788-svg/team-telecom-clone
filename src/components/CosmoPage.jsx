import { useState, useEffect } from "react";
import CosmoTariffs from "./CosmoTariffs";
import InfoBanner from "./InfoBanner";
import BeFreeSection from "./BeFreeSection";
import TVTelecom from "./TVTelecom";
import TclTvPromo from "./TclTvPromo"
import CosmoBoxPromo from "./CosmoBoxPromo";
import NokiaWifiPromo from "./NokiaWifiPromo";
import NokiaBeaconPromo from "./NokiaBeakonPromo";
import NokiaVideoSection from "./NokiaVideoSection";

export default function CosmoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bgColor: "bg-[#ece8e1]",
      boxColor: "bg-[#5c8290]",
      title: "Միացի՛ր ԿՈՍՄՈ 4",
      subtitle: "Զեղչը գործում է 16.07.2026թ- 16.10.2026թ. միանալու դեպքում",
      btnText: "Միացիր հիմա",
      btnColor: "bg-[#e85050] text-white hover:bg-[#d43f3f]",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17758194399312.png",
    },
    {
      id: 2,
      bgColor: "bg-[#ece8e1]",
      boxColor: "bg-[#5c8290]",
      title: "Զգա արագությունը՝ մեծ էկրանով",
      subtitle: 'TCL QLED 55" սմարթ TV',
      btnText: "Ավելին",
      btnColor: "bg-[#e85050] text-white hover:bg-[#d43f3f]",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17857440992138.png",
    },
    {
      id: 3,
      bgColor: "bg-[#ece8e1]",
      boxColor: "bg-[#808080]",
      title: "ԿՈՍՄՈ",
      subtitle: "Առաջին ամիսն ԱՆՎՃԱՐ` առցանց միանալու դեպքում:",
      btnText: "Միացիր հիմա",
      btnColor: "bg-white text-[#e85050] hover:bg-gray-100",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17775256210007.png",
    },
    {
      id: 4,
      bgColor: "bg-[#022839]",
      boxColor: "bg-[#01354d]",
      title: "ԿՈՍՄՈ GIG",
      subtitle: "1 ԳԲ գերարագ ինտերնետ լավագույն Nokia սարքով:",
      btnText: "Իմանալ ավելին",
      btnColor: "bg-white text-[#003853] hover:bg-gray-100",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17767669719393.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full bg-[#003853] min-h-screen">
      
      {/* 1. Սլայդեր */}
      <section className={`relative transition-colors duration-500 overflow-hidden ${slides[currentSlide].bgColor}`}>
        <div className="max-w-[1300px] mx-auto min-h-[420px] lg:min-h-[480px] flex items-center justify-between px-6 lg:px-12 py-8 relative">
          
          <button 
            onClick={prevSlide}
            className="absolute left-3 lg:left-6 z-20 p-2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-8 lg:px-12">
            <div className={`md:col-span-5 ${slides[currentSlide].boxColor} text-white p-8 lg:p-10 rounded-2xl shadow-sm flex flex-col justify-between min-h-[260px] lg:min-h-[290px] transition-all duration-300`}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-wide mb-4">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-sm lg:text-base font-normal text-gray-100 opacity-90 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <div className="mt-6">
                <button 
                  className={`px-7 py-2.5 rounded-full font-bold text-sm lg:text-base transition-all duration-200 shadow-md cursor-pointer ${slides[currentSlide].btnColor}`}
                >
                  {slides[currentSlide].btnText}
                </button>
              </div>
            </div>

            <div className="md:col-span-7 flex justify-center items-center">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="max-h-[300px] lg:max-h-[380px] w-auto object-contain transition-all duration-500 transform hover:scale-[1.01]"
              />
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-3 lg:right-6 z-20 p-2 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? "w-3 bg-[#e85050]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      <CosmoTariffs />

      <InfoBanner />

      <BeFreeSection />

      <TVTelecom />

     <TclTvPromo/>

     <CosmoBoxPromo />

     <NokiaWifiPromo/>

     <NokiaBeaconPromo/>

     <NokiaVideoSection/>
    </div>
  );
}