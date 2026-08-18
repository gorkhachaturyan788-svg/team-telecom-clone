import React from "react";
import { Link } from "react-router-dom";

export default function Arcanc1() {
  return (
    <div className="w-full bg-[#073042] py-20 md:py-28 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Ձախ կողմ՝ Մեծացված նկարը */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative z-10 max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] w-full transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/16510468752809.png" 
              alt="Առցանց ապառիկ" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Աջ կողմ՝ Տեքստային հատված */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-normal leading-[1.1]">
            Առցանց <span className="text-[#ff4d4f]">ապառիկ</span>
          </h1>
          
          <p className="text-gray-100 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
            Առցանց ապառիկի ձևակերպումը թույլ է տալիս գնել ապրանքներ առցանց խանութից (e-shop), վճարելով ապրանքի արժեքը մասերով՝ սահմանված ժամկետի ընթացքում:
          </p>

          <div className="pt-2">
            <Link
              to="/eshop"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#ff4d4f] text-white font-bold text-lg hover:bg-[#e04345] transform hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-red-500/25"
            >
              Առցանց խանութ
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}