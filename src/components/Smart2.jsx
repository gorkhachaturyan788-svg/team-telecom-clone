import React from "react";
import { Link } from "react-router-dom";

export default function Smart2() {
  const unlimitedPackages = [
    {
      title: "Video Unlimit",
      description: "Միացրու և վայելիր անսահմանափակ տեսանյութերը",
      link: "/tariffs/mobile"
    },
    {
      title: "Music Unlimit",
      description: "Միացրու և վայելիր անսահմանափակ երաժշտությունը",
      link: "/tariffs/mobile"
    },
    {
      title: "Social Unlimit",
      description: "Միացրու և վայելիր անսահմանափակ սոցիալական ցանցերը",
      link: "/tariffs/mobile"
    },
    {
      title: "Messenger Unlimit",
      description: "Միացրու և վայելիր անսահմանափակ մեեսենջերներ",
      link: "/tariffs/mobile"
    }
  ];

  const gigaPackages = [
    {
      title: "Giga 1+1ԳԲ",
      description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար",
      link: "/tariffs/mobile"
    },
    {
      title: "Giga 2+1ԳԲ",
      description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար",
      link: "/tariffs/mobile"
    },
    {
      title: "Giga 5+1ԳԲ",
      description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար",
      link: "/tariffs/mobile"
    },
    {
      title: "Giga 10 ԳԲ",
      description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար",
      link: "/tariffs/mobile"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-20 font-sans text-[#003853]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Բաժին 1: Անսահմանափակ հավելվածներ */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
              Անսահմանափակ հավելվածներ
            </h2>
            <span className="text-xl font-bold text-gray-400">▲</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unlimitedPackages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#003853] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={item.link}
                    className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2 rounded-full transition-all text-xs uppercase tracking-wider"
                  >
                    Մանրամասն
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Բաժին 2: Giga */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
              Giga
            </h2>
            <span className="text-xl font-bold text-gray-400">▲</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gigaPackages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#003853] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={item.link}
                    className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2 rounded-full transition-all text-xs uppercase tracking-wider"
                  >
                    Մանրամասն
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}