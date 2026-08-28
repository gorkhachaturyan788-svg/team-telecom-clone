import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Ներմուծում ենք Link-ը

const services = [
  {
    id: 1,
    title: "ԲՋՋԱՅԻՆ ԿԱՊ",
    img: "https://www.telecomarmenia.am/images/advanced_slider/2/17574203779594.jpeg",
    to: "/tariffs/mobile", // Ավելացրեցինք հղման ուղին
  },
  {
    id: 2,
    title: "ՖԻՔՍՎԱԾ ԿԱՊ",
    img: "https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png",
    to: "/tariffs/fixed", // Օրինակի համար կարող եք փոխել կամ ավելացնել մյուսների համար էլ
  },
  {
    id: 3,
    title: "ՀԱՎԵԼՎԱԾՆԵՐ",
    img: "https://www.telecomarmenia.am/images/block_with_news_slides/1/17225928741325.png",
    to: "/services/entertainment",
  },
  {
    id: 4,
    title: "ԻՆՏԵՐՆԵՏ ԵՎ TV",
    img: "https://armlur.am/wp-content/uploads/2026/03/1500.png",
    to: "/tariffs/combo",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    const current = sectionRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-[#f4f4f4] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 min-h-[260px] sm:h-[300px] flex flex-col sm:flex-row items-center justify-between shadow-lg transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "max-[550px]:opacity-0 max-[550px]:translate-y-10 max-[550px]:scale-95 " +
                    (index % 2 === 0
                      ? "md:-translate-x-20 md:opacity-0 md:scale-95"
                      : "md:translate-x-20 md:opacity-0 md:scale-95")
              }`}
          >
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left w-full sm:w-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-blue-950">
                {service.title}
              </h3>
              {/* Փոխարինել ենք button-ը Link-ով և ավելացրել to ատրիբուտը */}
              <Link 
                to={service.to} 
                className="inline-block text-orange-600 text-base sm:text-lg font-bold hover:underline"
              >
                Ավելին ›
              </Link>
            </div>

            {/* Նկարի մաս */}
            <div className="w-36 h-36 sm:w-52 sm:h-52 flex items-center justify-center shrink-0 mt-4 sm:mt-0">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}