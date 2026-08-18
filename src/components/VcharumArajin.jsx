import React from "react";
import { NavLink } from "react-router-dom";

export default function VcharumArajin() {
  const navItems = [
    { 
      title: "TeamTV", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/45x45.png", 
      path: "/services/team-tv" 
    },
    { 
      title: "Վճարում և համալրում", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png", 
      path: "/services/payment" 
    },
    { 
      title: "Զվարճանք", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511222304797/45x45.png", 
      path: "#" 
    },
    { 
      title: "Զանգեր և անվտանգություն", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511222214647/45x45.png", 
      path: "#" 
    },
    { 
      title: "Ֆիքսված հեռուստակապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/1651122209593/45x45.png", 
      path: "#" 
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] pb-10">
      
      {/* Վերին գլխավոր հատվածը՝ նկարով և բանկային քարտով */}
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#3db5be]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://www.telecomarmenia.am/images/menu/1/165106349279.png')` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Բանկային քարտը կենտրոնում կամ նկարի մեջ */}
        <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-10 flex flex-col items-center justify-center py-8">
          <div className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] transition-transform duration-500 hover:scale-105">
            <img 
              src="https://www.telecomarmenia.am/images/menu/1/165106349279.png" 
              alt="Payment Card" 
              className="w-full h-auto drop-shadow-2xl rounded-2xl opacity-0"
            />
          </div>
        </div>
      </div>

      {/* Ստորին նավիգացիոն վահանակը (Tabs) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#003853]" />
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