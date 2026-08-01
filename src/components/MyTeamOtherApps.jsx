import React from "react";

export default function MyTeamOtherApps() {
  return (
    <div className="my-[80px]">
      <h2 className="text-[32px] text-[#1b2d46] mb-[40px] font-bold">
        Այլ հավելվածներ
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-[40px]">
        <div className="flex flex-col sm:flex-row items-start gap-[25px] flex-1">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png" 
            alt="TeamTV" 
            className="w-[220px] h-[220px] rounded-[20px] shrink-0 object-cover" 
          />
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[24px] text-[#1b2d46] m-0">TeamTV</h3>
            <p className="text-[#68758a] text-[16px] m-0">
              Ժամանակակից TV միշտ քեզ հետ<br />
              Մինչև 200 ալիք<br />
              Ավելի քան 5000 ֆիլմ տեսադարանում<br />
              Դիտում 5 սարքավորումներով<br />
              Մինչև 7 օր catch-up...
            </p>
            <button className="w-[160px] bg-[#f55252] text-white border-none py-3 rounded-[25px] cursor-pointer font-semibold hover:bg-[#e04545] transition-colors">
              Միանալ
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-[25px] flex-1">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17691688001842.png" 
            alt="Team Energy" 
            className="w-[220px] h-[220px] rounded-[20px] shrink-0 object-cover" 
          />
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[24px] text-[#1b2d46] m-0">Team Energy</h3>
            <p className="text-[#68758a] text-[16px] m-0">
              Team Energy հավելվածի միջոցով<br />
              կարող եք գտնել մոտակա<br />
              էլեկտրական լիցքավորման<br />
              կայանը, հետևելով քայլերի<br />
              հաջորդականությանը՝...
            </p>
            <button className="w-[160px] bg-[#f55252] text-white border-none py-3 rounded-[25px] cursor-pointer font-semibold hover:bg-[#e04545] transition-colors">
              Միանալ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}