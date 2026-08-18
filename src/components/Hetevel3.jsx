import React from "react";
import { Link } from "react-router-dom";

export default function Hetevel3() {
  return (
    <div className="w-full bg-[#073042] py-20 md:py-28 font-sans overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Ձախ կողմ՝ SIM քարտերի պատկերը */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative z-10 max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] w-full transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/16832074143841.png" 
              alt="Գեղեցիկ համարներ" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Աջ կողմ՝ Տեքստային հատված և կոճակ */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-normal leading-[1.1]">
            Գեղեցիկ <br />
            համարներ
          </h2>
          
          <p className="text-gray-100 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
            Գեղեցիկ համարները հասանելի են ապառիկ տարբերակով՝ VTB բանկի միջոցով:
          </p>

          <div className="pt-2">
            <Link
              to="/eshop"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#ff4d4f] text-white font-bold text-lg hover:bg-[#e04345] transform hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-red-500/25"
            >
              Գնել հիմա
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}