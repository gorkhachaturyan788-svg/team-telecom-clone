import React from "react";

export default function Room5() {
  const flags = [
    { src: "https://www.telecomarmenia.am/file_manager/Roaming%20flags/italy.png", alt: "Իտալիա" },
    { src: "https://www.telecomarmenia.am/file_manager/Roaming%20flags/russia.png", alt: "Ռուսաստան" },
    { src: "https://www.telecomarmenia.am/file_manager/Roaming%20flags/georgia.png", alt: "Վրաստան" },
    { src: "https://www.telecomarmenia.am/file_manager/Roaming%20flags/ukraine.png", alt: "Ուկրաինա" }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans text-[#003853]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Լավագույն սակագները
        </h2>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {flags.map((flag, index) => (
            <img 
              key={index} 
              src={flag.src} 
              alt={flag.alt} 
              className="w-10 h-7 sm:w-12 sm:h-8 object-cover rounded shadow-sm"
            />
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Իտալիա (Wind), Ռուսաստան (Beeline), Վրաստան (Cellfie), Ուկրաինա (Kyivstar)
          </p>
          <div>
            <a 
              href="#full-list" 
              className="text-sm sm:text-base font-medium text-[#003853] underline hover:text-[#ff4d4f] transition-colors"
            >
              Հասանելի ուղղությունների և սակագների ամբողջական ցանկ
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 text-left">
          <div className="grid grid-cols-1 divide-y divide-gray-100">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2">
              <span className="font-semibold text-base sm:text-lg">Ինտերնետ</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">9 դր/ՄԲ</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2 bg-gray-50/50">
              <span className="font-semibold text-base sm:text-lg">Մուտքային և ելքային զանգեր դեպի Team* բջջային ցանց</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">29.99 դր/ր</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-2">
              <span className="font-semibold text-base sm:text-lg">Տեղական և միջազգային զանգեր `</span>
              <span className="font-bold text-lg sm:text-xl text-[#003853]">250 դր/ր</span>
            </div>

          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 text-left leading-relaxed pt-2">
          *29,99 դրամ սակագինը գործում է միայն +37443, +37499, +37496, +37491, +37433, +37497 կոդերով հեռախոսահամարներին զանգելիս, մյուս բոլոր դեպքերում ելքային զանգերը ՀՀ` 150 դրամ/րոպե
        </p>

      </div>
    </div>
  );
}