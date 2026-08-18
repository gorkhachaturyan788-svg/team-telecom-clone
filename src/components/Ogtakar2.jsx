import React from "react";
import { Link } from "react-router-dom";

export default function Ogtakar2() {
  const cards = [
    {
      title: "Ռոումինգի միացման պայմանները",
      description: "",
      link: "/roaming"
    },
    {
      title: "Ռոումինգի սակագները ծովում և օդում",
      description: "Մնա առցանց, նույնիսկ ծովում և օդում",
      link: "/roaming"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-20 font-sans text-[#003853]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Բաժնի վերնագիրը */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003853] tracking-tight">
          ՕԳՏԱԿԱՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        {/* Քարտերի ցանց */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] transition-all hover:shadow-md"
            >
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003853] leading-snug">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-gray-500 text-sm sm:text-base">
                    {card.description}
                  </p>
                )}
              </div>

              <div>
                <Link
                  to={card.link}
                  className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
                >
                  Ավելին
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}