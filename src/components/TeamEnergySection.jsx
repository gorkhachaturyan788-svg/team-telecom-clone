import React from "react";
import { Link } from "react-router-dom";

export default function TeamEnergySection() {
  return (
    <div className="py-[60px] max-w-7xl mx-auto px-4">
      <h2 className="text-[32px] text-[#1b2d46] mb-10 font-bold">
        Այլ հավելվածներ
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 bg-white rounded-3xl shadow-sm border border-gray-100">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png" 
            alt="My Team" 
            className="w-[160px] h-[160px] rounded-[20px] object-cover shrink-0" 
          />
          <div className="text-center sm:text-left">
            <h3 className="text-[24px] text-[#1b2d46] mb-2.5 font-bold">My Team</h3>
            <p className="text-[#68758a] text-[14px] leading-relaxed mb-5">
              My Team հավելվածի միջոցով Դուք կարող եք` Հաշվեկշռի և փաթեթների մնացորդների ստուգում, Ավտոմատ վճարումների ակտիվացում, Սակագնային փաթեթների կառավարում։
            </p>
            <Link to="/my-team" className="bg-[#f55252] text-white px-[30px] py-2.5 rounded-[25px] no-underline font-semibold inline-block hover:bg-[#e04444] transition-colors">
              Միանալ
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 bg-white rounded-3xl shadow-sm border border-gray-100">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png" 
            alt="TeamTV" 
            className="w-[160px] h-[160px] rounded-[20px] object-cover shrink-0" 
          />
          <div className="text-center sm:text-left">
            <h3 className="text-[24px] text-[#1b2d46] mb-2.5 font-bold">TeamTV</h3>
            <p className="text-[#68758a] text-[14px] leading-relaxed mb-5">
              Ժամանակակից TV միշտ քեզ հետ։ Մինչև 200 ալիք, ավելի քան 5000 ֆիլմ տեսադարանում, դիտում 5 սարքավորումներով, մինչև 7 օր catch-up։
            </p>
            <Link to="/team-tv" className="bg-[#f55252] text-white px-[30px] py-2.5 rounded-[25px] no-underline font-semibold inline-block hover:bg-[#e04444] transition-colors">
              Միանալ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}