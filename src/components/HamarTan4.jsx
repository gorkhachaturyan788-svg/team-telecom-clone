import React from "react";

export default function HamarTan4() {
  return (
    <div className="w-full bg-[#0a4763] py-16 md:py-24 px-6 sm:px-10 lg:px-16 font-sans text-white text-center">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase text-white">
          Ձեռք բեր Be Free փաթեթները հատուկ գնով
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-4xl mx-auto">
          
          <div className="w-full flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/17658825869005.png" 
              alt="Be Free 3200" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          <div className="w-full flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/17841229532579.png" 
              alt="Be Free 5000" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
}