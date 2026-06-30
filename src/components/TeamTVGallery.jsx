import React from "react";

export default function TeamTVGallery() {
  const screenshots = [
    "https://www.telecomarmenia.am/images/team_apps/1/17485849137763.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138256.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138582.jpeg",
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        overflowX: "auto",
        paddingBottom: "15px",
      }}
    >
      {screenshots.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`TeamTV Screenshot ${index + 1}`}
          style={{
            width: "260px",
            height: "460px",
            borderRadius: "16px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}