import React from "react";

export default function ArajinTeam() {
  return (
    <div className="w-full bg-[#002b3d] text-white font-sans overflow-hidden">
      
      {/* Հիմնական բաններ բաժին */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս. Վերնագիր և առանձնահատկություններ */}
        <div className="space-y-10 z-10 max-w-xl">
          
          {/* Մեծ վերնագիր */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-[#ff4d4f]">Team</span>
            <span className="text-[#79cdd7]">TV</span>
          </h1>

          {/* Ցանկ (Feature list) */}
          <div className="space-y-8">
            
            {/* 1. Catch-Up */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-2 bg-[#003853] rounded-xl border border-[#004d6e]">
                <img 
                  src="https://www.telecomarmenia.am/img/bee-tv-top-icon-1.png" 
                  alt="Catch-Up" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold">Catch-Up մինչև 7 օր</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Ընտրեք հաղորդումը և դիտեք այն ձեզ հարմար ժամանակ
                </p>
              </div>
            </div>

            {/* 2. Հարուստ տեսադարան */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-2 bg-[#003853] rounded-xl border border-[#004d6e]">
                <img 
                  src="https://www.telecomarmenia.am/img/bee-tv-top-icon-2.png" 
                  alt="Video Library" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold">Հարուստ տեսադարան</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Ֆիլմերի, մուտֆիլմերի և հեռուստասերիալների մեծ ընտրություն
                </p>
              </div>
            </div>

            {/* 3. YouTube հեռուստացույցով */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-2 bg-[#003853] rounded-xl border border-[#004d6e]">
                <img 
                  src="https://www.telecomarmenia.am/img/bee-tv-top-icon-3.png" 
                  alt="YouTube" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold">YouTube հեռուստացույցով</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Դիտեք հոլովակներ ձեր հեռուստաէկրանին
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Աջ մաս. Հեռուստացույցի և բանների նկար */}
        <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
          <div className="relative max-w-lg w-full">
            <img 
              src="https://www.telecomarmenia.am/file_manager/teamtv/tv_image_banner.png" 
              alt="TeamTV Banner" 
              className="w-full h-auto object-contain drop-shadow-2xl" 
            />
          </div>
        </div>

      </div>

    </div>
  );
}