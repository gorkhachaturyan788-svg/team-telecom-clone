import React, { useState } from "react";

export default function ChorrordTeam() {
  const [activeTab, setActiveTab] = useState("mobile"); // 'mobile' կամ 'smarttv'

  return (
    <div className="w-full bg-white text-[#003853] font-sans py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Սակագնային փաթեթներ
        </h2>

        {/* Թաբերի (Tabs) անջատիչ */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-2xl border border-gray-200 p-1.5 bg-gray-50 max-w-xl w-full shadow-sm">
            
            {/* 1. Բջջային թաբ */}
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all cursor-pointer ${
                activeTab === "mobile"
                  ? "bg-[#003853] text-white shadow-md"
                  : "text-gray-600 hover:text-[#003853]"
              }`}
            >
              {/* Հեռուստացույցի/Տուփի իկոն (կամ ըստ առաջին նկարի) */}
              <img 
                src="https://www.telecomarmenia.am/file_manager/teamtv/15486137852488.png" 
                alt="Mobile TV" 
                className={`w-7 h-7 object-contain transition-all ${
                  activeTab === "mobile" ? "brightness-0 invert" : ""
                }`} 
              />
              <span>Բջջային</span>
            </button>

            {/* 2. Բջջային և Smart TV թաբ */}
            <button
              onClick={() => setActiveTab("smarttv")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all cursor-pointer ${
                activeTab === "smarttv"
                  ? "bg-[#003853] text-white shadow-md"
                  : "text-gray-600 hover:text-[#003853]"
              }`}
            >
              {/* Հեռախոսի իկոն */}
              <img 
                src="https://www.telecomarmenia.am/files/icons/1/16115558113903/80x80.png" 
                alt="Smart TV" 
                className={`w-6 h-6 object-contain transition-all ${
                  activeTab === "smarttv" ? "brightness-0 invert" : ""
                }`} 
              />
              <span>Բջջային և Smart TV</span>
            </button>

          </div>
        </div>

        {/* Բովանդակություն ըստ ընտրված թաբի */}
        <div className="pt-8">
          {activeTab === "mobile" ? (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#003853]">teamTV Ստարտ</h3>
              <p className="text-gray-600">Այստեղ կցուցադրվեն բջջային փաթեթների մանրամասները</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#003853]">teamTV Մաքս / Հանրային</h3>
              <p className="text-gray-600">Այստեղ կցուցադրվեն Բջջային և Smart TV փաթեթների մանրամասները</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}