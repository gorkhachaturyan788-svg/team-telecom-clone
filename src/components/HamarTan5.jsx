import React from "react";

export default function HamarTan5() {
  return (
    <div className="w-full bg-[#0a4763] py-16 md:py-24 px-6 sm:px-10 lg:px-16 font-sans text-white text-center">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">
          TeamTV
        </h2>

        <div className="flex flex-col items-center space-y-4 max-w-lg mx-auto">
          <img 
            src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/16496614699749.png" 
            alt="Catch-Up icon" 
            className="w-16 h-auto object-contain"
          />
          <h3 className="text-2xl sm:text-3xl font-bold">Catch-Up մինչև 7 օր</h3>
          <p className="text-[#a0c1d1] text-base leading-relaxed">
            Ընտրեք հաղորդումը և դիտեք այն ձեզ հարմար ժամանակ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto pt-6">
          
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/1649661469994.png" 
              alt="Video library icon" 
              className="w-16 h-auto object-contain"
            />
            <h3 className="text-2xl font-bold">Հարուստ տեսադարան</h3>
            <p className="text-[#a0c1d1] text-sm sm:text-base leading-relaxed max-w-xs">
              Ֆիլմերի, մուլտֆիլմերի և հեռուստասերիալների մեծ ընտրություն
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/16496614700126.png" 
              alt="YouTube icon" 
              className="w-16 h-auto object-contain"
            />
            <h3 className="text-2xl font-bold">YouTube հեռուստացույցով</h3>
            <p className="text-[#a0c1d1] text-sm sm:text-base leading-relaxed max-w-xs">
              Դիտեք հոլովակներ ձեր հեռուստաէկրանին
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}