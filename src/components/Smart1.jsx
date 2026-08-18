import React from "react";
import { NavLink } from "react-router-dom";

export default function Smart1() {
  const navItems = [
    { 
      title: "Սմարթֆոնի համար", 
      icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png", 
      path: "/tariffs/mobile" 
    },
    { 
      title: "Տան համար - ԿՈՍՄՈ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png", 
      path: "/tariffs/combo" 
    },
    { 
      title: "Տան համար - ԿՈՄԲՈ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png", 
      path: "/tariffs/combos" 
    },
    { 
      title: "Համակարգչի/պլանշետի համար", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223895748/45x45.png", 
      path: "/tariffs/tablet" 
    },
    { 
      title: "Team 5G", 
      icon: "https://www.telecomarmenia.am/files/icons/1/17569729574067/45x45.png", 
      path: "/tariffs/5g" 
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] pb-10">
      
      {/* Վերին գլխավոր հատվածը՝ նոր բանների նկարով */}
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#002233]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://www.telecomarmenia.am/images/menu/1/16881410294975.jpeg')` 
          }}
        ></div>
      </div>

      {/* Ստորին նավիգացիոն վահանակը (5 Tabs) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-5 text-center transition-all border-b sm:border-b-0 sm:border-r border-gray-100 last:border-none relative group ${
                  isActive ? "bg-white" : "hover:bg-gray-50/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3db5be]" />
                  )}

                  <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className="h-12 flex items-center justify-center mb-3">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <span className={`text-xs sm:text-sm font-bold leading-snug ${isActive ? "text-[#003853]" : "text-gray-600 group-hover:text-[#003853]"}`}>
                      {item.title}
                    </span>
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

    </div>
  );
}