import React from "react";
import { Link } from "react-router-dom";

export default function Harc2() {
  const cards = [
    {
      title: "Բալանսի փոխանցում",
      description: "Ծառայությունը թույլ է տալիս Team բջջային ցանցի կանխավճարային բաժանորդներին բջջային հաշվից գումար փոխանցել Team-ի մեկ այլ...",
      link: "/payment"
    },
    {
      title: "Զանգի՛ր ինձ",
      description: "Ծառայությունը թույլ է տալիս Team կանխավճարային և հետվճարային հաշվարկային համակարգի բաժանորդին հաղորդագրություն...",
      link: "/payment"
    },
    {
      title: "Վստահության րոպեներ",
      description: "Եթե ձեր հաշվեկշիռը մոտ է 0-ի, իսկ այդ պահին հաշիվը վերալիցքավորելու հնարավորություն չունե՞ք, օգտվե՛ք...",
      link: "/payment"
    },
    {
      title: "Լիցքավորի՛ր իմ հաշիվը",
      description: "Telecom Armenia կանխավճարային և հետվճարային համակարգի բաժանորդներին «Լիցքավորի՛ր իմ հաշիվը»...",
      link: "/payment"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Բաժնի վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003853] tracking-tight">
          ՎՃԱՐՈՒՄ ԵՎ ՀԱՄԱԼՐՈՒՄ
        </h2>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003853]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#ff4d4f] text-[#ff4d4f] font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-all duration-300"
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