import React from "react";

export default function ErkrordTeam() {
  return (
    <div className="w-full bg-white py-16 md:py-24 text-[#003853] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-16">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Ինչպե՞ս գրանցվել հավելվածում
        </h2>

        {/* Քայլերի ցանց */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Քայլ 1 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="h-20 flex items-center justify-center">
              <img 
                src="https://www.telecomarmenia.am/file_manager/teamtv/teamTV_1000x500.png" 
                alt="TeamTV Logo" 
                className="max-h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg font-medium max-w-xs leading-relaxed">
              1. Ներբեռնի՛ր <span className="font-bold text-[#003853]">TeamTV</span> հավելվածը
            </p>
          </div>

          {/* Քայլ 2 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="h-20 flex items-center justify-center">
              <img 
                src="https://www.telecomarmenia.am/file_manager/teamtv/profile.png" 
                alt="Profile Icon" 
                className="max-h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg font-medium max-w-xs leading-relaxed">
              2. Գրանցվի՛ր հավելվածում՝ հավաքելով <span className="font-bold text-[#ff4d4f]">*818#</span>
            </p>
          </div>

          {/* Քայլ 3 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="h-20 flex items-center justify-center">
              <img 
                src="https://www.telecomarmenia.am/file_manager/teamtv/play.png" 
                alt="Play Icon" 
                className="max-h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-700 text-base md:text-lg font-medium max-w-xs leading-relaxed">
              3. Դիտի՛ր բազմաթիվ ֆիլմեր և ալիքներ
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}