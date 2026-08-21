import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, StarHalf } from 'lucide-react';
import TeamTVGallery from '../components/TeamTVGallery';
import AppsSection from '../components/AppsSection';

export default function TeamTV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-sans pt-[30px]">
      <div className="w-[82%] mx-auto">
        <div className="flex items-center gap-2 text-[#68758a] text-[15px]">
          <Link to="/" className="text-[#68758a] underline">Գլխավոր</Link>
          <span>›</span>
          <span className="underline">Team հավելվածներ</span>
        </div>

        <h1 className="text-[46px] text-[#1b2d46] mt-[25px] mb-[55px] font-bold">TeamTV</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-[35px] mb-[60px]">
          <div className="w-[240px] h-[240px] bg-[#0f4965] rounded-[18px] relative flex justify-center items-center shrink-0 shadow-md">
            <div>
              <div className="text-[#f3e7d8] text-[52px] font-extrabold leading-[50px]">team</div>
              <div className="text-[#39b5d2] text-[76px] font-black leading-[68px]">TV</div>
              <div className="absolute top-[102px] right-[32px] text-white font-bold text-[18px]">TM</div>
              <div className="w-[34px] h-[34px] bg-[#f55252] rounded-[9px] absolute bottom-[55px] right-[28px]" />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-[18px] shrink-0 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-[18px]">
              <a href="#" className="block no-underline">
                <img 
                  src="https://www.telecomarmenia.am/img/redesign/app_store.png" 
                  alt="Download on the App Store" 
                  className="h-[48px] w-auto block object-contain"
                />
              </a>
              <div className="flex items-center">
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <StarHalf fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#ECECEC" color="#ECECEC" size={22} />
                <span className="ml-[14px] text-[18px] text-[#1c2c44] font-semibold">3.5</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-[18px]">
              <a href="#" className="block no-underline">
                <img 
                  src="https://www.telecomarmenia.am/img/redesign/google_play.png" 
                  alt="Get it on Google Play" 
                  className="h-[48px] w-auto block object-contain"
                />
              </a>
              <div className="flex items-center">
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <StarHalf fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#ECECEC" color="#ECECEC" size={22} />
                <span className="ml-[14px] text-[18px] text-[#1c2c44] font-semibold">3.6</span>
              </div>
            </div>
          </div>
        </div>

        <TeamTVGallery />
        <AppsSection />
      </div>
    </div>
  );
}