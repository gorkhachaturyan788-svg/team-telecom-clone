import React, { useState } from "react";

export default function Hetevel4() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Ի՞նչ է նշանակում բաժանորդագրությամբ գնել հեռախոսահամար:",
      answer: "Ստորև կարող եք ավելի մանրամասն ծանոթանալ բաժանորդագրությամբ հեռախոսահամարի ձեռք բերման պայմաններին:"
    },
    {
      question: "Ինչպե՞ս ձեռք բերել հեռախոսահամար բաժանորդագրությամբ:",
      answer: "Ընտրեք համարը eShop-ից, լրացրեք պատվերի տվյալները և ընտրեք բաժանորդագրության տարբերակը:"
    },
    {
      question: "Ի՞նչ է պատահում, եթե բաժանորդային պայմանագիրը դադարեցվի մինչև նշված ժամկետը:",
      answer: "Ժամկետից շուտ պայմանագրի դադարեցման դեպքում կարող են կիրառվել համապատասխան պայմաններով նախատեսված վճարներ կամ սահմանափակումներ:"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#f7f5f0] py-20 md:py-28 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#003853] text-center tracking-tight">
          Հաճախ տրվող հարցեր
        </h2>

        {/* Հարցերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-[#003853] font-bold text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 text-red-500 font-bold ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 pt-4 animate-[fadeIn_0.3s_ease-out]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}