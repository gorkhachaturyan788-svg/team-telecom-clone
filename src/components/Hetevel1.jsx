import React from "react";
import { Link } from "react-router-dom";

export default function Hetevel1() {
  return (
    <div className="w-full bg-[#f7f5f0] py-20 md:py-28 font-sans overflow-hidden">
      {/* Ամբողջ բլոկը միասին սահում է աջ կողմից */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 animate-[slideInFromRight_1s_ease-out]">
        
        {/* Ձախ կողմ՝ Օրացույցի պատկերը */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative z-10 max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] w-full transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/16832074487761.png" 
              alt="Գնի՛ր համար բաժանորդագրությամբ" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Աջ կողմ՝ Տեքստային հատված և կոճակ */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#003853] tracking-normal leading-[1.1]">
            Գնի՛ր համար <br />
            բաժանորդա-<br className="hidden sm:inline" />
            գրությամբ
          </h1>
          
          <p className="text-gray-700 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
            Գնի՛ր գեղեցիկ համար ընդամենը բաժանորդագրվելով մեր ծառայություններին:
          </p>

          <div className="pt-2">
            <Link
              to="/eshop"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#ff4d4f] text-white font-bold text-lg hover:bg-[#e04345] transform hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-red-500/25"
            >
              e-Shop
            </Link>
          </div>
        </div>

      </div>

      {/* Աջ կողմից գալու անիմացիա */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}