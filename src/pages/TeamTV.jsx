import React from 'react';
import { Link } from 'react-router-dom';
import { Star, StarHalf } from 'lucide-react';
import TeamTVGallery from '../components/TeamTVGallery';
import AppsSection from '../components/AppsSection';

export default function TeamTV() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fff", fontFamily: "Arial, sans-serif", paddingTop: "30px" }}>
      <div style={{ width: "82%", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#68758a", fontSize: "15px" }}>
          <Link to="/" style={{ color: "#68758a", textDecoration: "underline" }}>Գլխավոր</Link>
          <span>›</span>
          <span style={{ textDecoration: "underline" }}>Team հավելվածներ</span>
        </div>

        <h1 style={{ fontSize: "46px", color: "#1b2d46", marginTop: "25px", marginBottom: "55px", fontWeight: "700" }}>TeamTV</h1>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "35px", marginBottom: "60px" }}>
          <div style={{ width: "240px", height: "240px", background: "#0f4965", borderRadius: "18px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
            <div>
              <div style={{ color: "#f3e7d8", fontSize: "52px", fontWeight: "800", lineHeight: "50px" }}>team</div>
              <div style={{ color: "#39b5d2", fontSize: "76px", fontWeight: "900", lineHeight: "68px" }}>TV</div>
              <div style={{ position: "absolute", top: "102px", right: "32px", color: "#fff", fontWeight: "700", fontSize: "18px" }}>TM</div>
              <div style={{ width: "34px", height: "34px", background: "#f55252", borderRadius: "9px", position: "absolute", bottom: "55px", right: "28px" }} />
            </div>
          </div>

          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "18px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <a href="#" style={{ display: "block", textDecoration: "none" }}>
                <img 
                  src="https://www.telecomarmenia.am/img/redesign/app_store.png" 
                  alt="Download on the App Store" 
                  style={{ height: "48px", width: "auto", display: "block" }}
                />
              </a>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <StarHalf fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#ECECEC" color="#ECECEC" size={22} />
                <span style={{ marginLeft: "14px", fontSize: "18px", color: "#1c2c44" }}>3.5</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <a href="#" style={{ display: "block", textDecoration: "none" }}>
                <img 
                  src="https://www.telecomarmenia.am/img/redesign/google_play.png" 
                  alt="Get it on Google Play" 
                  style={{ height: "48px", width: "auto", display: "block" }}
                />
              </a>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#FFC83D" color="#FFC83D" size={22} />
                <StarHalf fill="#FFC83D" color="#FFC83D" size={22} />
                <Star fill="#ECECEC" color="#ECECEC" size={22} />
                <span style={{ marginLeft: "14px", fontSize: "18px", color: "#1c2c44" }}>3.6</span>
              </div>
            </div>
          </div>
        </div>

        <TeamTVGallery />
        <AppsSection />
      </div>
    </div>
  );
}