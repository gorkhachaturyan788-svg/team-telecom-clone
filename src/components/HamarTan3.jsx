import React from "react";

export default function HamarTan3() {
  return (
    <div className="w-full bg-[#0a4763] py-16 md:py-24 px-8 sm:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Be Free-ն հատուկ գնով
          </h2>
          
          <p className="text-[#a0c1d1] text-lg sm:text-xl leading-relaxed max-w-lg">
            Դարձի՛ր ԿՈՄԲՈ կամ ԿՈՄԲՈ փաթեթներից մեկի բաժանորդ և ստացիր մինչև 3 SIM քարտ՝ հատուկ սակագներով:
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8">
          <div className="max-w-md w-full">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/17761517712737.png" 
              alt="Be Free SIM cards" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="border-2 border-[#1c6a8a] rounded-lg px-6 py-3 hover:bg-[#1c6a8a] transition-colors cursor-pointer">
            <span className="text-white font-bold text-sm tracking-widest uppercase">
              3 BE FREE SIM ՔԱՐՏ
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}