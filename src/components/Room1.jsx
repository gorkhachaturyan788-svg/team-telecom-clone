import React from "react";
import { Link } from "react-router-dom";

export default function Room1() {
  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Հիմնական բանների բլոկ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Ձախ մոխրագույն բլոկ */}
          <div className="bg-[#787878] rounded-[32px] p-8 sm:p-12 lg:p-16 flex flex-col justify-center min-h-[380px] sm:min-h-[420px] shadow-sm">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Բացահայտե՛նք աշխարհը
            </h1>
            <p className="text-white/90 text-base sm:text-lg font-medium mb-8 leading-relaxed">
              Ռոումինգ, որ գալիս է քեզ հետ
            </p>
            <div>
              <Link
                to="/roaming"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#ff4d4f] text-white font-bold text-sm sm:text-base hover:bg-[#e04345] transition-all duration-300 shadow-md"
              >
                Քարտեզ
              </Link>
            </div>
          </div>

          {/* Աջ նկարով բլոկ */}
          <div className="relative rounded-[32px] overflow-hidden shadow-sm h-[380px] sm:h-[420px] bg-white">
            <img 
              src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17857625505622.png" 
              alt="Ռոումինգ 140+ երկիր" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}