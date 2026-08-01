import React from 'react';
import { NavLink } from 'react-router-dom';
import MobileList from './MobileList'; 

export default function Mobile() {
  const navItems = [
    { 
      title: "Բջջային կապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png", 
      path: "/tariffs/mobile" 
    },
    { 
      title: "Ինտերնետ և TV - ԿՈՄԲՈ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png", 
      path: "/tariffs/combo" 
    },
    { 
      title: "Ինտերնետ և TV - ԿՈՄԲՈ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png", 
      path: "/tariffs/combi" 
    },
    { 
      title: "Ֆիքսված հեռախոսակապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png", 
      path: "/tariffs/fixed" 
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] pb-10">
      
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#2b6538]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://www.telecomarmenia.am/images/menu/1/17494509147356.jpeg')` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-between py-8">
          <div></div>

          <div className="ml-auto">
            <div className="inline-flex items-center bg-[#ff4d4f] text-white rounded-full shadow-lg overflow-hidden border border-white/30">

              <div className="px-5 py-2 text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2">

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-10 relative z-10">
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

   
      <div className="mt-12">
        <MobileList />
      </div>

    </div>
  );
}