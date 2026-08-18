import React, { useState } from "react";

export default function HingerordTeam() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-[#002b3d] text-white font-sans py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Ձախ կողմ՝ Տեսանյութի հատվածը, որը սեղմելիս տեղում փոխվում է վիդեոյի */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="inline-block group rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 w-full max-w-[500px] aspect-video relative flex items-center justify-center">
            
            {!isPlaying ? (
              // Նախնական նկարը և Play կոճակը
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 cursor-pointer flex items-center justify-center"
              >
                <img 
                  src="https://img.youtube.com/vi/ZqXUbLS1dRw/hqdefault.jpg" 
                  alt="TeamTV Guide" 
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              // Սեղմելուց հետո միանում է տեսանյութը հենց այդ նույն տեղում
              <iframe 
                src="https://www.youtube.com/embed/ZqXUbLS1dRw?autoplay=1" 
                title="TeamTV Guide"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

          </div>
        </div>

        {/* Աջ կողմ՝ Վերնագիր և ցանկ */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Նոր TeamTV ուղեցույց
          </h2>

          <ul className="space-y-4 text-gray-200 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Թարմացված դիզայն</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Ալիքների ցանկ ըստ ժանրերի և միաժամանակ 2 ալիք դիտելու հնարավորություն</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Նախընտրած ֆիլմերի ցանկ ստեղծելու հնարավորություն</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Ծրագրեր փնտրելու հնարավորություն</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ff4d4f] font-bold text-xl mt-1">•</span>
              <span className="leading-relaxed">Սարքերի կառավարում</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}