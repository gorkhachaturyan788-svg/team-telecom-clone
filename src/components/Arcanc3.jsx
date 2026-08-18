import React from "react";

export default function Arcanc3() {
  const steps = [
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17537347165186.png",
      description: "Այցելի՛ր Team e-Shop, ընտրի՛ր ցանկացած սմարթֆոն/ սմարթֆոններ և ավելացրու զամբյուղում:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17537347165413.png",
      description: "Պատվերի ձևակերպման փուլում վճարման եղանակը ընտրի՛ր \"Գնել ապառիկ\" և բեռնավորիր անհրաժեշտ փաստաթղթերը:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17537347165633.png",
      description: "Մեր մասնագետը կապ կհաստատի Ձեզ հետ հայտի մշակման համար:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17537347165888.png",
      description: "Ապառիկի հաստատումից հետո սպասե՛ք Ձեր ապրանքներին:"
    }
  ];

  return (
    <div className="w-full bg-[#073042] py-20 md:py-28 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-16">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Ինչպես ստանալ առցանց ապառիկ (Acba bank)
        </h2>

        {/* Քայլերի ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 space-y-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Պատկերակ (Icon) */}
              <div className="h-20 flex items-center justify-center">
                <img 
                  src={step.icon} 
                  alt={`Քայլ ${index + 1}`} 
                  className="max-h-16 w-auto object-contain filter brightness-0 invert opacity-90" 
                />
              </div>

              {/* Նկարագրություն */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}