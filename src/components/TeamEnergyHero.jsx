import React from "react";
import { Star } from "lucide-react";

export default function TeamEnergyHero() {
  return (
    <div style={{ marginBottom: "60px", display: "flex", alignItems: "flex-start", gap: "35px" }}>
      <div style={{ width: "240px", height: "240px", background: "#0f4965", borderRadius: "18px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
        <img 
          src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png" 
          alt="Team Energy Logo" 
          style={{ width: "80%", height: "auto", objectFit: "contain" }}
        />
      </div>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "25px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="#" style={{ display: "block" }}>
            <img 
              src="https://www.telecomarmenia.am/img/redesign/app_store.png" 
              alt="App Store" 
              style={{ height: "56px", cursor: "pointer" }} 
            />
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />)}
            <Star color="#ECECEC" size={24} />
            <span style={{ marginLeft: "12px", fontSize: "20px", fontWeight: "bold", color: "#1c2c44" }}>4.5</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="#" style={{ display: "block" }}>
            <img 
              src="https://www.telecomarmenia.am/img/redesign/google_play.png" 
              alt="Google Play" 
              style={{ height: "56px", cursor: "pointer" }} 
            />
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={24} />)}
            <Star color="#ECECEC" size={24} />
            <span style={{ marginLeft: "12px", fontSize: "20px", fontWeight: "bold", color: "#1c2c44" }}>4.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}