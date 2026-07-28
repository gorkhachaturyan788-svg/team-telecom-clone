import React from "react";
import { Star } from "lucide-react";

export default function TeamPayHero() {
  return (
    <div className="mb-[60px] p-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-[240px] h-[240px] bg-[#2fb5c7] rounded-[20px] flex justify-center items-center shrink-0 shadow-md">
           <span className="text-white text-[60px] font-bold">≠</span>
        </div>

        <div className="flex flex-col gap-6 mt-2 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
            <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className="h-[40px] cursor-pointer object-contain" />
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={20} />)}
              <span className="ml-2.5 text-[16px] font-bold text-[#1c2c44]">4.7</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
            <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" className="h-[40px] cursor-pointer object-contain" />
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={20} />)}
              <Star color="#ECECEC" size={20} />
              <span className="ml-2.5 text-[16px] font-bold text-[#1c2c44]">3.7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}