import React from "react";

export default function HamarTan2() {
  return (
    <div className="w-full bg-[#007398] py-12 md:py-16 px-6 sm:px-10 lg:px-12 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg max-w-lg w-full flex items-center justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/17788403748713.jpeg" 
              alt="Internet and TV Combo" 
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight">
            Միացրեք ինտերնետ և TV առցանց
          </h2>
          
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            Ուղարկե՛ք <strong className="text-white font-bold">ԱՌՑԱՆՑ ՀԱՅՏ</strong> և մենք կմիացնենք ձեր <strong className="text-white font-bold">ԿՈՄԲՈ</strong> ծառայությունների փաթեթը <span className="text-red-400 font-bold">5 աշխատանքային օրում</span>։ Միացումը և Wi-Fi սարքը տրամադրվում են <span className="text-red-400 font-bold uppercase">Անվճար</span> հանրապետության ամբողջ տարածքում:
          </p>
        </div>

      </div>
    </div>
  );
}