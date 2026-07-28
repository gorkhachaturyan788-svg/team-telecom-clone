import React from "react";
import { Star } from "lucide-react";

export default function TeamEnergyHero() {
  return (
    <div className="mb-[60px] flex flex-col md:flex-row items-center md:items-start gap-8 max-w-7xl mx-auto px-4">
      <div className="w-[240px] h-[240px] bg-[#0f4965] rounded-[18px] flex justify-center items-center shrink-0 shadow-md">
        <img 
          src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png" 
          alt="Team Energy Logo" 
          className="w-[80%] h-auto object-contain"
        />
      </div>

      <div className="mt-2 flex flex-col gap-6 w-full md:w-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
          <a href="#" className="block">
            <img 
              src="https://www.telecomarmenia.am/img/redesign/app_store.png" 
              alt="App Store" 
              className="h-[56px] cursor-pointer object-contain" 
            />
          </a>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />)}
            <Star color="#ECECEC" size={24} />
            <span className="ml-3 text-[20px] font-bold text-[#1c2c44]">4.5</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
          <a href="#" className="block">
            <img 
              src="https://www.telecomarmenia.am/img/redesign/google_play.png" 
              alt="Google Play" 
              className="h-[56px] cursor-pointer object-contain" 
            />
          </a>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />)}
            <Star color="#ECECEC" size={24} />
            <span className="ml-3 text-[20px] font-bold text-[#1c2c44]">4.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}