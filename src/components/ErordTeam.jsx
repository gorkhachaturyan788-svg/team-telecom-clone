import React from "react";

export default function ErordTeam() {
  return (
    <div className="w-full bg-[#002b3d] text-white font-sans py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Նկար */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="https://www.telecomarmenia.am/file_manager/teamtv/Team%20tv%20landing.jpg" 
            alt="TeamTV Landing" 
            className="w-full max-w-lg h-auto object-contain" 
          />
        </div>

        {/* Տեքստ */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            TeamTV-ն հասանելի է բոլորին
          </h2>

          <ul className="space-y-4 text-gray-200 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Ներբեռնի՛ր և գրանցվի՛ր TeamTV հավելվածում</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">
                Բաժանորդագրվի՛ր հետևյալ սակագնային փաթեթներից որևէ մեկին՝ <strong className="text-white">teamTV Ստարտ</strong>, <strong className="text-white">teamTV Հանրային</strong>, <strong className="text-white">teamTV Մաքս</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Վայելի՛ր բազմաթիվ ալիքներ TeamTV-ով</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}