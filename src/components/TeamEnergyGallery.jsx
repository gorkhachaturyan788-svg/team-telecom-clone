import React from "react";

export default function TeamEnergyGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17116228874283.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17116228874409.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/1711622887455.jpeg",
  ];

  return (
    <div className="py-10 text-left max-w-7xl mx-auto px-4">
      <h2 className="text-2xl text-[#1b2d46] mb-6 font-bold">
        iOS
      </h2>
      <div className="flex flex-wrap md:flex-nowrap justify-start gap-5">
        {images.map((src, index) => (
          <div key={index} className="w-full sm:w-[220px] rounded-2xl overflow-hidden shadow-md bg-white">
            <img 
              src={src} 
              alt={`Feature ${index + 1}`} 
              className="w-full h-auto block object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}