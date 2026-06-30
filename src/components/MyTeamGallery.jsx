import React from "react";

export default function MyTeamGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063824.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643062114.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063133.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17709643063359.jpeg",
  ];

  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2 style={{ fontSize: "32px", color: "#1b2d46", marginBottom: "30px", fontWeight: "700" }}>
        ios
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {images.map((src, index) => (
          <div key={index} style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <img src={src} alt={`Team App Screen ${index + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        ))}
      </div>
    </div>
  );
}