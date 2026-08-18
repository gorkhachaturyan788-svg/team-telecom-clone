import React from "react";
import { Link } from "react-router-dom";

export default function VcharumErkrord() {
  const cards = [
    {
      title: "Բալանսի փոխանցում",
      description: "Ծառայությունը թույլ է տալիս Team բջջային ցանցի կանխավճարային բաժանորդներին բջջայինի հաշվից գումար փոխանցել Team-ի մեկ այլ...",
      link: "#"
    },
    {
      title: "Զանգի՛ր ինձ",
      description: "Ծառայությունը թույլ է տալիս Team կանխավճարային և հետվճարային հաշվարկային համակարգի բաժանորդին հաղորդագրություն...",
      link: "#"
    },
    {
      title: "Վստահության րոպեներ",
      description: "Եթե ձեր հաշվեկշիռը մոտ է 0-ի, իսկ այդ պահին հաշիվը վերալիցքավորելու...",
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black text-[#003853] tracking-tight">
          ՎՃԱՐՈՒՄ ԵՎ ՀԱՄԱԼՐՈՒՄ
        </h2>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#003853]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-[#ff4d4f] text-[#ff4d4f] font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors"
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