import React from "react";

export default function TeamPayGallery() {
  const images = [
    "https://www.telecomarmenia.am/images/team_apps/1/17479089596742.png",
    "https://www.telecomarmenia.am/images/team_apps/1/17479089597009.png",
    "https://www.telecomarmenia.am/images/team_apps/1/1747908959726.png",
    "https://www.telecomarmenia.am/images/team_apps/1/17479089597517.png",
  ];

  return (
    <div style={{ padding: "40px 0", marginBottom: "40px" }}>
      <h2 style={{ fontSize: "24px", color: "#1b2d46", marginBottom: "20px", fontWeight: "700" }}>
        iOS
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`TeamPay screenshot ${index + 1}`} 
            style={{ 
              width: "23%", 
              height: "auto", 
              borderRadius: "24px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }} 
          />
        ))}
      </div>
    </div>
  );
}