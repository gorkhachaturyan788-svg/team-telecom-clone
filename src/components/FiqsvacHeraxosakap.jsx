import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeBanner() {
  const [active, setActive] = useState(3);

  const menuItems = [
    {
      title: "Բջջային կապ",
      icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png",
      path: "/mobile",
    },
    {
      title: "Ինտերնետ և TV - ԿՈՄԲՈ",
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
      path: "/combo",
    },
    {
      title: "Ինտերնետ և TV - ԿՈՐՊ",
      icon: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
      path: "/corp",
    },
    {
      title: "Ֆիքսված հեռախոսակապ",
      icon: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png",
      path: "/fixed-phone",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5]">
      {/* Banner */}
      <img
        src="https://www.telecomarmenia.am/images/menu/1/16509749987896.png"
        alt=""
        className="w-full object-cover"
      />

      {/* Menu */}
      <div className="w-[85%] mx-auto -mt-16 bg-white rounded-lg shadow-xl grid grid-cols-4 overflow-hidden relative z-10">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => setActive(index)}
            className={`flex flex-col items-center justify-center py-8 border-r border-gray-200 last:border-r-0 transition-all duration-300 hover:bg-gray-50 relative ${
              active === index ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-400" : ""
            }`}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[45px] h-[45px] mb-4"
            />

            <span className="text-[#1B4369] text-xl font-semibold text-center">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}