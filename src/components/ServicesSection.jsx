import { useEffect, useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "ԲՋՋԱՅԻՆ ԿԱՊ",
    img: "https://www.telecomarmenia.am/images/advanced_slider/2/17574203779594.jpeg",
  },
  {
    id: 2,
    title: "ՖԻՔՍՎԱԾ ԿԱՊ",
    img: "https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png",
  },
  {
    id: 3,
    title: "ՀԱՎԵԼՎԱԾՆԵՐ",
    img: "https://www.telecomarmenia.am/images/block_with_news_slides/1/17225928741325.png",
  },
  {
    id: 4,
    title: "ԻՆՏԵՐՆԵՏ ԵՎ TV",
    img: "https://armlur.am/wp-content/uploads/2026/03/1500.png",
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
    <section ref={sectionRef} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-[#f4f4f4] rounded-[40px] p-10 h-[300px] flex items-center justify-between shadow-lg transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : index % 2 === 0
                  ? "-translate-x-20 opacity-0 scale-95"
                  : "translate-x-20 opacity-0 scale-95"
              }`}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-blue-950">
                {service.title}
              </h3>
              <button className="text-orange-600 text-lg font-bold hover:underline">
                Ավելին ›
              </button>
            </div>

            <div className="w-52 h-52 flex items-center justify-center shrink-0">
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