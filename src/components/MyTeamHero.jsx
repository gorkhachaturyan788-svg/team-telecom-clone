import React from "react";
import { Star } from "lucide-react";

export default function MyTeamHero() {
  return (
    <div className="mb-[60px] flex flex-col sm:flex-row items-start gap-[35px]">
      <div className="w-[240px] h-[240px] bg-[#0f4965] rounded-[18px] flex justify-center items-center shrink-0">
        <img 
          src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png" 
          alt="Team Telecom Logo" 
          className="w-[80%] h-auto object-contain"
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-[25px]">
 
        <div className="flex items-center gap-[20px]">
          <a href="#" className="block">
            <img 
              src="https://www.telecomarmenia.am/img/redesign/app_store.png" 
              alt="App Store" 
              className="h-[56px] cursor-pointer" 
            />
          </a>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />
            ))}
            <Star color="#ECECEC" size={24} />
            <span className="ml-[12px] text-[20px] font-bold text-[#1c2c44]">4.2</span>
          </div>
        </div>

       
        <div className="flex items-center gap-[20px]">
          <a href="#" className="block">
            <img 
              src="https://www.telecomarmenia.am/img/redesign/google_play.png" 
              alt="Google Play" 
              className="h-[56px] cursor-pointer" 
            />
          </a>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />
            ))}
            <Star color="#ECECEC" size={24} />
            <span className="ml-[12px] text-[20px] font-bold text-[#1c2c44]">4.1</span>
          </div>
        </div>
      </div>
    </div>
  );
}