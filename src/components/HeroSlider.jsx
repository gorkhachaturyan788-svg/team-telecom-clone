import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { sliderSlides } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full h-[450px] md:h-[500px] bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full"
      >
        {sliderSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgClass} text-white flex items-center`}>
              <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight">{slide.title}</h1>
                  <p className="text-lg text-gray-200 leading-relaxed">{slide.description}</p>
                  <button className="bg-white text-blue-950 font-bold px-8 py-3.5 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
                <div className="hidden md:flex justify-center text-[180px] select-none opacity-20 font-bold">
                  TEAM
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}