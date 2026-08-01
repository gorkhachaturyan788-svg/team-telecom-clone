import React from "react";

export default function TeamTVGallery() {
  const screenshots = [
    "https://www.telecomarmenia.am/images/team_apps/1/17485849137763.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138256.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138582.jpeg",
  ];

  return (
    <div className="flex items-center gap-5 overflow-x-auto pb-4 max-w-7xl mx-auto px-4 overflow-hidden">
      {screenshots.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`TeamTV Screenshot ${index + 1}`}
          className="w-[260px] h-[460px] rounded-2xl object-cover shadow-md shrink-0"
        />
      ))}
    </div>
  );
}