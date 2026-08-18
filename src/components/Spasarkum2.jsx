import React from "react";
import { Link } from "react-router-dom";

export default function Spasarkum2() {
  const cards = [
    {
      title: "Սակագնային փաթեթի փոփոխություն",
      description: "Ընտրի՛ր քեզ առավել հարմար սակագնային փաթեթը",
      link: "/support/subscriber-service"
    },
    {
      title: "Վճարման վավերականության ժամկետ",
      description: "",
      link: "/support/subscriber-service"
    },
    {
      title: "Համարի փոխարինում",
      description: "Ցանկացած պահին Դուք կարող եք փոխել ձեր համարը",
      link: "/support/subscriber-service"
    },
    {
      title: "«Գեղեցիկ» համարի ընտրություն",
      description: "Դուք կարող եք ընտրել այն հեռախոսահամարը, որը ձեզ ավելի է...",
      link: "/support/subscriber-service"
    },
    {
      title: "Համարի արգելափակում",
      description: "Անվճար արգելափակեք հեռախոսահամարը",
      link: "/support/subscriber-service"
    },
    {
      title: "PIN/PUK կոդերի վերականգնում",
      description: "Վերականգնեք ձեր PIN/PUK կոդերը մեր սպասարկման գրասենյակներում",
      link: "/support/subscriber-service"
    },
    {
      title: "Համարի վերականգնում",
      description: "Հեռախոսահամարի անվճար վերականգնում հետվճարային...",
      link: "/support/subscriber-service"
    },
    {
      title: "SMS",
      description: "Հետաքրքիր դարձրְ՛ք շփումը մտերիմների և ընկերների հետ SMS...",
      link: "/support/subscriber-service"
    },
    {
      title: "Հեռախոսի տեղադրում",
      description: "Գրասենյակում հեռախոս տեղադրելը շատ հեշտ է` Լրացրեք հայտը Սպասե՛ք...",
      link: "/support/subscriber-service"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Բաժնի վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003853] tracking-tight">
          ԲԱԺԱՆՈՐԴԱՅԻՆ ՍՊԱՍԱՐԿՈՒՄ
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
                {card.description && (
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                )}
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