import React, { useState } from "react";

export default function Room6() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Ռոումինգ հյուրերին" },
    { question: "Ինչպե՞ս լիցքավորել հաշիվը արտերկրում" }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans text-[#003853]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-12">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Հաճախ տրվող հարցեր
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => toggleAccordion(index)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 cursor-pointer hover:border-gray-300 transition-all flex justify-between items-center relative"
            >
              <span className="font-semibold text-base sm:text-lg text-[#003853]">
                {faq.question}
              </span>
              <span className={`transform transition-transform duration-300 text-[#ff4d4f] font-bold text-xl ${openIndex === index ? "rotate-180" : ""}`}>
                ▾
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}