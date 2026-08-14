import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ComboPackageDetail from "./ComboPackageDetail";

export default function ComboPage() {
  const [activeSubTab, setActiveSubTab] = useState("4990");

  const navItems = [
    { 
      title: "Բջջային կապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png", 
      path: "/tariffs/mobile" 
    },
    { 
      title: "Ինտերնետ և TV - ԿՈՄԲՈ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png", 
      path: "/tariffs/combos" 
    },
    { 
      title: "Ֆիքսված հեռախոսակապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png", 
      path: "/tariffs/fixed" 
    },
    { 
      title: "Այլ ծառայություններ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png", 
      path: "/tariffs/other" 
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] pb-20">
      {/* Գլխավոր Banner բլոկ */}
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#2b6538]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://www.telecomarmenia.am/images/menu/1/17488638560003.png')` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-between py-8">
          <div></div>
          <div className="ml-auto">
            <div className="inline-flex items-center bg-[#ff4d4f] text-white rounded-full shadow-lg overflow-hidden border border-white/30">
              <div className="px-5 py-2 text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2">
                Առաջարկներ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Նավիգացիոն քարտեր */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-10 relative z-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-6 text-center transition-all border-b sm:border-b-0 sm:border-r border-gray-100 last:border-none relative group ${
                  isActive ? "bg-white" : "hover:bg-gray-50/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4bc0c8]" />
                  )}
                  <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className="h-12 flex items-center justify-center mb-3">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <span className="text-sm font-bold text-[#003853] leading-snug">
                      {item.title}
                    </span>
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Բովանդակության բաժին (Ձախից՝ Մենյու, Աջից՝ Փաթեթի մանրամասներ) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Ձախ կողմ. Ակորդեոն / Մենյու */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-2">
            <div className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
              Ընտրիր քո փաթեթը
            </div>

            {/* ԿՈՄԲՈ 2 */}
            <div className="border-b border-gray-100 last:border-none">
              <button className="w-full flex items-center justify-between p-4 text-left font-bold text-[#003853] hover:bg-gray-50 rounded-xl transition">
                <span>ԿՈՄԲՈ 2: Երկուսը մեկում փաթեթ</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>

            {/* ԿՈՄԲՈ 3 */}
            <div className="border-b border-gray-100 last:border-none">
              <button className="w-full flex items-center justify-between p-4 text-left font-bold text-[#003853] hover:bg-gray-50 rounded-xl transition">
                <span>ԿՈՄԲՈ 3: Երեքը մեկում փաթեթ</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>

            {/* ԿՈՄԲՈ 4 (Բացված վիճակում) */}
            <div className="bg-gray-50 rounded-xl overflow-hidden mb-2">
              <button className="w-full flex items-center justify-between p-4 text-left font-bold text-[#003853] bg-gray-100 rounded-xl">
                <span>ԿՈՄԲՈ 4: Չորսը մեկում փաթեթ</span>
                <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <div className="py-2 px-2 space-y-1">
                <button 
                  onClick={() => setActiveSubTab("4990")}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition ${
                    activeSubTab === "4990" ? "bg-[#80cbd0] text-[#003853] shadow-sm" : "text-[#003853] hover:bg-gray-100"
                  }`}
                >
                  ԿՈՄԲՈ 4 9900
                </button>
                <button 
                  onClick={() => setActiveSubTab("7990")}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition ${
                    activeSubTab === "7990" ? "bg-[#80cbd0] text-[#003853] shadow-sm" : "text-[#003853] hover:bg-gray-100"
                  }`}
                >
                  ԿՈՄԲՈ 4 Մարզային 7990
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Աջ կողմ. Առանձնացված բաղադրիչը */}
        <div className="lg:col-span-8">
          <ComboPackageDetail />
        </div>

      </div>
    </div>
  );
}