import React from "react";

export default function TeamEnergyGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17116228874283.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17116228874409.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/1711622887455.jpeg",
  ];

  return (
    <div style={{ padding: "40px 0", textAlign: "left" }}>
      <h2 style={{ fontSize: "24px", color: "#1b2d46", marginBottom: "20px", fontWeight: "700" }}>
        ios
      </h2>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}>
        {images.map((src, index) => (
          <div key={index} style={{ width: "220px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <img 
              src={src} 
              alt={`Feature ${index + 1}`} 
              style={{ width: "100%", height: "auto", display: "block" }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}