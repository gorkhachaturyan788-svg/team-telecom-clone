import React from "react";

export default function TeamPayGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17479089596742.png",
    "https://www.telecomarmenia.am/images/team_apps/1/17479089597009.png",
    "https://www.telecomarmenia.am/images/team_apps/1/1747908959726.png",
    "https://www.telecomarmenia.am/images/team_apps/1/17479089597517.png",
  ];

  return (
    <div className="py-10 mb-10 max-w-7xl mx-auto px-4 overflow-hidden">
      <h2 className="text-2xl text-[#1b2d46] mb-6 font-bold">
        iOS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`TeamPay screenshot ${index + 1}`} 
            className="w-full h-auto rounded-[24px] shadow-lg object-cover" 
          />
        ))}
      </div>
    </div>
  );
}