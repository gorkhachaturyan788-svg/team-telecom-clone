import React from "react";

export default function MyTeamGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063824.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643062114.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063133.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063359.jpeg",
  ];

  return (
    <div className="my-[60px]">
      <h2 className="text-[32px] text-[#1b2d46] mb-[30px] font-bold">
        ios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="rounded-[20px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white"
          >
            <img 
              src={src} 
              alt={`Team App Screen ${index + 1}`} 
              className="w-full h-auto block" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}