import React from "react";
import { Star } from "lucide-react";

export default function TeamPayHero() {
  return (
    <div style={{ marginBottom: "60px", padding: "20px" }}>

      
      <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
        <div style={{ width: "240px", height: "240px", background: "#2fb5c7", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
           <span style={{ color: "#fff", fontSize: "60px", fontWeight: "bold" }}>≠</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" style={{ height: "40px", cursor: "pointer" }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={20} />)}
              <span style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold", color: "#1c2c44" }}>4.7</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" style={{ height: "40px", cursor: "pointer" }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              {[1, 2, 3, 4].map((i) => <Star key={i} fill="#FFC83D" color="#FFC83D" size={20} />)}
              <Star color="#ECECEC" size={20} />
              <span style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold", color: "#1c2c44" }}>3.7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}