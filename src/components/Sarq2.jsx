import React, { useState } from "react";

export default function Sarq2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 text-center">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003853] tracking-tight">
          Սարքերի կարգավորումներ
        </h2>

        {/* Որոնման և ֆիլտրերի բլոկ */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
          
          {/* Որոնման տող և կոճակ */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Որոնել"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#7ac1d2] text-gray-700 text-sm sm:text-base bg-gray-50/50"
              />
            </div>
            <button
              onClick={() => console.log("Searching:", searchQuery)}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#ff4d4f] text-white font-bold text-sm sm:text-base hover:bg-[#e04345] transition-all shadow-md hover:shadow-red-500/25"
            >
              Որոնել
            </button>
          </div>

          <p className="text-gray-500 text-sm sm:text-base">
            Ընտրեք ձեզ հետաքրքրող հարցը կամ սարքի մոդելը, կարգավորումները տեսնելու համար
          </p>

          {/* Ֆիլտրեր (Dropdowns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="relative">
              <select
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7ac1d2] text-gray-700 text-sm sm:text-base bg-gray-50/50 appearance-none cursor-pointer"
              >
                <option value="">Ինչ անել</option>
                <option value="setup">Կարգավորել</option>
                <option value="connect">Միացնել</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>

            <div className="relative">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7ac1d2] text-gray-700 text-sm sm:text-base bg-gray-50/50 appearance-none cursor-pointer"
              >
                <option value="">Սարքավորման մոդել</option>
                <option value="router">Router</option>
                <option value="modem">Modem</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>
          </div>

        </div>

        {/* Մեծ կարգավորումների պատկերակ (Gear Icon) */}
        <div className="flex justify-center py-12">
          <img
            src="https://www.telecomarmenia.am/img/setting.png"
            alt="Settings"
            className="w-48 sm:w-64 h-auto object-contain opacity-25"
          />
        </div>

      </div>
    </div>
  );
}