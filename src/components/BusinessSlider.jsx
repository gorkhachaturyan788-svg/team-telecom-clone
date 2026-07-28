import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "PRO",
    items: ["PROգրեսիվ", "PROդուկտիվ", "PROֆեսիոնալ"],
    btnText: "Մանրամասն",
    img: "https://www.telecomarmenia.am/images/advanced_slider/1/1650973651394.png"
  },
  {
    id: 2,
    title: "Միացե՛ք",
    text: "Փորձարկե՛ք հնարավորությունները ԱՆՎՃԱՐ",
    btnText: "Միանալ",
    img: "https://www.telecomarmenia.am/images/advanced_slider/1/1696925830142.png"
  },
  {
    id: 3,
    title: "Բիզնես",
    items: ["ԱՄՆ, Կանադա, Չինաստան ցանցեր", "ՀՀ բոլոր ցանցեր", "Ռուսաստան Beeline ցանց"],
    btnText: "Մանրամասն",
    img: "https://www.telecomarmenia.am/images/advanced_slider/1/16969336013421.png"
  }
];

export default function BusinessSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="w-full bg-[#003853] py-20 px-[5%] max-[550px]:px-4 text-white relative flex items-center">
      <button onClick={prevSlide} className="text-3xl md:text-5xl px-1 md:px-4 hover:text-gray-400 z-10 shrink-0">❮</button>

      <div className="flex flex-col md:flex-row w-full items-center justify-around gap-8 md:gap-4 transition-opacity duration-500">
        <div className="w-full md:max-w-[40%] space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl max-[550px]:text-3xl md:text-6xl font-bold tracking-tight">{slides[current].title}</h1>
          
          {slides[current].items ? (
            <ul className="space-y-3 text-lg md:text-2xl font-medium inline-block text-left">
              {slides[current].items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl md:text-3xl font-medium leading-tight">{slides[current].text}</p>
          )}

          <Link to="#" className="inline-block bg-white text-[#ff5a5f] px-12 py-3 rounded-full font-bold mt-6 hover:bg-gray-100 transition">
            {slides[current].btnText}
          </Link>
        </div>

        <div className="w-full md:w-[40%] flex justify-center">
          <img src={slides[current].img} alt="Slider" className="w-full max-w-[300px] md:max-w-none h-auto object-contain" />
        </div>
      </div>

      <button onClick={nextSlide} className="text-3xl md:text-5xl px-1 md:px-4 hover:text-gray-400 z-10 shrink-0">❯</button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${current === index ? 'bg-red-500' : 'bg-white'}`}></div>
        ))}
      </div>
    </section>
  );
}