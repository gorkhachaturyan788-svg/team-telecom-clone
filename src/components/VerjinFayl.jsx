import React, { useState } from "react";

export default function VerjinFayl() {
  const [activeBottomTab, setActiveBottomTab] = useState("included");

  return (
    <div className="space-y-8">
      
      {/* Ֆիքսված ներառումներ */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#003853]">
          Ֆիքսված ներառումներ
        </h2>

        <div className="space-y-4">
          
          {/* 1. Ֆիքսված ինտերնետ */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16511239783327/80x80.png" alt="Internet" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                Ֆիքսված ինտերնետ (մինչև)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">100</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">Մբիթ/վրկ</span>
            </div>
          </div>

          {/* 2. TeamTV */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/17616451672333/80x80.png" alt="TeamTV" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                TeamTV
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">150</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">ալիք</span>
            </div>
          </div>

          {/* 3. Րոպեներ */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16510709622802/80x80.png" alt="Minutes" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                Րոպեներ
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">180</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">րոպե</span>
            </div>
          </div>

        </div>
      </div>

      {/* Միանալ կոճակ */}
      <div className="pt-2">
        <button className="bg-[#ff4d4f] hover:bg-[#e04345] text-white font-bold px-10 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5">
          Միանալ
        </button>
      </div>

      <hr className="border-gray-100 my-6" />

      {/* Ստորին թաբեր (Tabs) */}
      <div>
        <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-4">
          <button 
            onClick={() => setActiveBottomTab("included")}
            className={`font-bold text-sm pb-1 transition relative ${
              activeBottomTab === "included" ? "text-[#003853] border-b-2 border-[#ff4d4f]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Փաթեթում ներառված է
          </button>
          <button 
            onClick={() => setActiveBottomTab("teamtv")}
            className={`font-bold text-sm pb-1 transition relative ${
              activeBottomTab === "teamtv" ? "text-[#003853] border-b-2 border-[#ff4d4f]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            TeamTV
          </button>
          <button 
            onClick={() => setActiveBottomTab("tariffs")}
            className={`font-bold text-sm pb-1 transition relative ${
              activeBottomTab === "tariffs" ? "text-[#003853] border-b-2 border-[#ff4d4f]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Սակագներ
          </button>
          <button 
            onClick={() => setActiveBottomTab("conditions")}
            className={`font-bold text-sm pb-1 transition relative ${
              activeBottomTab === "conditions" ? "text-[#003853] border-b-2 border-[#ff4d4f]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Պայմաններ
          </button>
          <button 
            onClick={() => setActiveBottomTab("bonus")}
            className={`font-bold text-sm pb-1 transition relative ${
              activeBottomTab === "bonus" ? "text-[#003853] border-b-2 border-[#ff4d4f]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Team Բոնուս
          </button>
        </div>

        {/* Թաբերի բովանդակություն */}
        <div className="pt-6 space-y-6">
          {activeBottomTab === "included" && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="font-bold text-[#003853]">Wi-Fi սարք</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="font-bold text-[#003853]">TV Box</span>
              </div>
            </div>
          )}
          {/* ... մնացած թաբերը նույնն են ... */}
        </div>
      </div>
    </div>
  );
}