import { useState } from "react";

const slides = [
  {
    url: "https://www.telecomarmenia.am/images/advanced_slider/2/17817016265264.jpeg",
  },
  {
    url: "https://www.telecomarmenia.am/images/advanced_slider/2/17815293313539.jpeg",
  },
  {
    url: "https://www.telecomarmenia.am/images/advanced_slider/2/17797054143953.jpeg",
  },
];

export default function EshopSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden bg-black">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.url}
            alt="eshop slide"
            className="w-full h-full object-contain bg-black"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-20 text-white space-y-4">
            <h1 className="text-3xl md:text-5xl font-black uppercase">
              {slide.title}
            </h1>

            <p className="text-lg md:text-xl">
              {slide.subtitle}
            </p>

            <button className="bg-[#E54B24] w-fit px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
              {slide.btn}
            </button>
          </div>
        </div>
      ))}

      {/* LEFT */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-10 h-10 rounded-full hover:bg-black/50"
      >
        ❮
      </button>

      {/* RIGHT */}
      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-10 h-10 rounded-full hover:bg-black/50"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === current ? "bg-[#E54B24] w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}