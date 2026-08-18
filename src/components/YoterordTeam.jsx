import React from "react";

export default function YoterordTeam() {
  return (
    <div className="w-full bg-gray-100 text-[#003853] font-sans py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Դիտիր TV որտեղ ցանկանաս
        </h2>

        {/* Հիմնական բովանդակություն */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Ձախ կողմ՝ Լոգո, ենթավերնագիր և սթորների գնահատականներ (առանց border-ի) */}
          <div className="w-full lg:w-5/12 flex flex-col sm:flex-row items-center justify-center gap-8 p-8">
            
            {/* TeamTV Լոգո */}
            <div className="w-36 h-36 shrink-0 bg-[#002b3d] rounded-2xl flex items-center justify-center shadow-md p-4">
              <img 
                src="https://www.telecomarmenia.am/file_manager/teamtv/teamTv_logo_512x512.jpg" 
                alt="TeamTV Logo" 
                className="w-full h-full object-contain rounded-xl" 
              />
            </div>

            {/* Ներբեռնման բաժին և գնահատականներ */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <p className="text-sm font-semibold text-gray-600">
                Ներբեռնի՛ր և փորձի՛ր նոր teamTV-ն
              </p>

              {/* App Store */}
              <div className="space-y-1 w-full">
                <a href="#" className="inline-block">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store" 
                    className="h-9 w-auto" 
                  />
                </a>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <div className="flex text-yellow-400">
                    {"★".repeat(3)}{"★"}{"☆"}
                  </div>
                  <span>3.8</span>
                </div>
              </div>

              {/* Google Play */}
              <div className="space-y-1 w-full">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-9 w-auto" 
                  />
                </a>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <div className="flex text-yellow-400">
                    {"★".repeat(3)}{"★"}{"☆"}
                  </div>
                  <span>3.7</span>
                </div>
              </div>

            </div>
          </div>

          {/* Աջ կողմ՝ Հեռախոսների սկրինշոթների պատկեր */}
          <div className="w-full lg:w-7/12 flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/file_manager/TV_Screens.png" 
              alt="TV Screens" 
              className="w-full max-w-2xl h-auto object-contain" 
            />
          </div>

        </div>

      </div>
    </div>
  );
}