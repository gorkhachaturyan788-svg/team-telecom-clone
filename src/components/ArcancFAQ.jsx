import React, { useState } from "react";

export default function ArcancFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumn = [
    {
      question: "Ինչպե՞ս ստանալ օնլայն ապառիկ (ACBA Bank)",
      answer: "Այցելե՛ք Team e-shop, ընտրե՛ք ցանկացած սմարթֆոն և պատվերի ձևակերպման փուլում ընտրե՛ք \"Գնել ապառիկ\" տարբերակը ACBA Bank-ի միջոցով:"
    },
    {
      question: "Ինչպե՞ս ստանալ օնլայն ապառիկ (EVOCABANK)",
      answer: "Այցելե՛ք Team e-shop, ընտրե՛ք սմարթֆոններ, զամբյուղում ընտրե՛ք ապառիկի տարբերակը և ներբեռնեք անհրաժեշտ փաստաթղթերը Evocabank-ի համար:"
    },
    {
      question: "Ինչպե՞ս ստանալ օնլայն ապառիկ (ՎՏԲ)",
      answer: "Ընտրե՛ք ապրանքը, պատվերի էջում նշե՛ք ապառիկը, ստացե՛ք հաստատման ծածկագիրը ձեր հեռախոսահամարին և մուտքագրեք համապատասխան դաշտում:"
    },
    {
      question: "Ի՞նչ անել, եթե ես այլևս չեմ ցանկանում օգտագործել տրամադրված վարկը:",
      answer: "Եթե չեք ցանկանում շարունակել, կարող եք պարզապես չհաստատել կամ չօգտագործել տրամադրված սահմանաչափը, կամ կապ հաստատել մեր աջակցման թիմի հետ:"
    },
    {
      question: "Ի՞նչ անել, եթե հաստատված վարկային սահմանաչափը մասամբ է ծածկում պատվերի ամբողջական արժեքը:",
      answer: "Այդ դեպքում մնացած տարբերությունը կարող եք վճարել բանկային քարտով պատվերի ձևակերպման ընթացքում:"
    }
  ];

  const rightColumn = [
    {
      question: "Ինչպե՞ս օգտագործել ստացված վարկը:",
      answer: "Ստացված վարկային սահմանաչափը կարող եք ուղղակիորեն կիրառել Team e-shop-ում ընտրված ապրանքների գնման և ձևակերպման համար:"
    },
    {
      question: "Ինչպե՞ս տեղեկանալ հայտի ընթացքի և կարգավիճակի մասին:",
      answer: "Մեր մասնագետները կապ կհաստատեն ձեզ հետ հայտի մշակման և ընթացքի մասին տեղեկացնելու համար:"
    },
    {
      question: "ՎՏԲ հարթակում գրանցման ձեռնարկ",
      answer: "ՎՏԲ հարթակում գրանցվելու և ապառիկ ձևակերպելու համար անհրաժեշտ է հետևել համակարգի կողմից տրվող հրահանգներին և մուտքագրել պահանջվող տվյալները:"
    },
    {
      question: "Ի՞նչ ապրանքներ է հնարավոր գնել առցանց ապառիկի միջոցով:",
      answer: "Առցանց ապառիկի միջոցով հնարավոր է գնել սմարթֆոններ, հեռախոսահամարներ և այլ ասորտիմենտի ապրանքներ Team e-shop-ից:"
    },
    {
      question: "Ի՞նչ պայմաններով է տրամադրվում առցանց ապառիկը:",
      answer: "Ապառիկը տրամադրվում է համագործակցող բանկերի (ACBA Bank, Evocabank, VTB Bank) սահմանած պայմաններին և ժամկետներին համապատասխան:"
    }
  ];

  const renderAccordionItem = (item, index, offset = 0) => {
    const globalIndex = index + offset;
    const isOpen = openIndex === globalIndex;

    return (
      <div 
        key={globalIndex}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200"
      >
        <button
          onClick={() => toggleAccordion(globalIndex)}
          className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
        >
          <span className="font-bold text-[#003853] text-sm sm:text-base pr-4">
            {item.question}
          </span>
          <span className={`transform transition-transform duration-300 text-[#ff4d4f] font-bold text-lg ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full bg-[#f7f5f0] py-20 md:py-28 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Վերնագիր */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#003853] tracking-tight">
            Հաճախ տրվող հարցեր
          </h2>
        </div>

        {/* Երկսյուն Ցանց (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Ձախ սյունակ */}
          <div className="space-y-4">
            {leftColumn.map((item, index) => renderAccordionItem(item, index, 0))}
          </div>

          {/* Աջ սյունակ */}
          <div className="space-y-4">
            {rightColumn.map((item, index) => renderAccordionItem(item, index, 100))}
          </div>
        </div>

      </div>
    </div>
  );
}