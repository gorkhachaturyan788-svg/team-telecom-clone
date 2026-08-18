import React, { useState } from "react";

export default function VecerordTeam() {
  const [activeTab, setActiveTab] = useState("home"); // 'home' կամ 'mobile'

  return (
    <div className="w-full bg-white text-[#003853] font-sans py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Հեռուստաալիքների փաթեթներ
        </h2>

        {/* Թաբերի (Tabs) անջատիչ */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-2xl border border-gray-200 p-1.5 bg-gray-50 max-w-xl w-full shadow-sm">
            
            {/* 1. Տան համար թաբ */}
            <button
              onClick={() => setActiveTab("home")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all cursor-pointer ${
                activeTab === "home"
                  ? "bg-[#003853] text-white shadow-md"
                  : "text-gray-600 hover:text-[#003853]"
              }`}
            >
              <svg className={`w-6 h-6 transition-all ${activeTab === "home" ? "brightness-0 invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Տան համար</span>
            </button>

            {/* 2. Բջջային թաբ */}
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all cursor-pointer ${
                activeTab === "mobile"
                  ? "bg-[#003853] text-white shadow-md"
                  : "text-gray-600 hover:text-[#003853]"
              }`}
            >
              <svg className={`w-6 h-6 transition-all ${activeTab === "mobile" ? "brightness-0 invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Բջջային</span>
            </button>

          </div>
        </div>

        {/* Բովանդակություն ըստ ընտրված թաբի */}
        <div className="pt-6 space-y-8">
          {activeTab === "home" ? (
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-[#003853] font-bold text-sm tracking-wide">
                80 ալիք
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/80_aliq.png" 
                  alt="Channels List" 
                  className="w-full max-w-5xl h-auto object-contain rounded-xl" 
                />
              </div>
            </div>
          ) : (
            <div className="py-12 space-y-4">
              <h3 className="text-2xl font-bold text-[#003853]">Բջջային ալիքների փաթեթներ</h3>
              <p className="text-gray-600">Բջջային հեռուստաալիքների ցանկը կցուցադրվի այստեղ</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}