import React from "react";

export default function Hetevel2() {
  const steps = [
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16818933940398.png",
      description: "Ընտրեք գեղեցիկ համար eShop-ից, ծանոթացեք բաժանորդագրության պայմաններին և ավելացրեք զամբյուղ:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16818933940648.png",
      description: "Պատվեր ձևակերպման ժամանակ ընտրեք \"Բաժանորդագրություն\" դաշտը և հաստատեք պատվերը:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16818933940919.png",
      description: "Մեր մասնագետները կապ կհաստատեն ձեզ հետ պատվերի հաստատման և համարի գրանցման վերաբերյալ:"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16818933941239.png",
      description: "Սպասեք ձեր նոր համարի առաքմանը և ակտիվացմանը:"
    }
  ];

  return (
    <div className="w-full bg-[#073042] py-20 md:py-28 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-16">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Ինչպես գնել համար բաժանորդագրությամբ
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