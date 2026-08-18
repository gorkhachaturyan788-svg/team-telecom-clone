import React from "react";
import { NavLink } from "react-router-dom";

export default function Ogtakar1() {
  const navItems = [
    { 
      title: "Ռոումինգ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16509747396609/45x45.png", 
      path: "/roaming" 
    },
    { 
      title: "Միջազգային կապ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223765283/45x45.png", 
      path: "/mig" 
    },
    { 
      title: "Օգտակար տեղեկատվություն", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511221689972/45x45.png", 
      path: "/support/useful-info" 
    },
    { 
      title: "Ծառայություններ", 
      icon: "https://www.telecomarmenia.am/files/icons/1/16511222028662/45x45.png", 
      path: "/services/team-tv" 
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] pb-10">
      
      {/* Վերին գլխավոր հատվածը՝ սքրինշոթի նկարով և մուգ կապույտ ֆոնով */}
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#003853]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ 
            backgroundImage: `url('https://www.telecomarmenia.am/images/menu/1/16509766245214.png')` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Ստորին նավիգացիոն վահանակը (Tabs) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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