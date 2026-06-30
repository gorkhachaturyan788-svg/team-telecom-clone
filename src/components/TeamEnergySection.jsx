import React from "react";
import { Link } from "react-router-dom";

export default function TeamEnergySection() {
  return (
    <div style={{ padding: "60px 0" }}>
      <h2 style={{ fontSize: "32px", color: "#1b2d46", marginBottom: "40px", fontWeight: "700" }}>
        Այլ հավելվածներ
      </h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "25px", padding: "20px" }}>
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png" 
            alt="My Team" 
            style={{ width: "160px", height: "160px", borderRadius: "20px", objectFit: "cover" }} 
          />
          <div>
            <h3 style={{ fontSize: "24px", color: "#1b2d46", marginBottom: "10px" }}>My Team</h3>
            <p style={{ color: "#68758a", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
              My Team հավելվածի միջոցով Դուք կարող եք` Հաշվեկշռի և փաթեթների մնացորդների ստուգում, Ավտոմատ վճարումների ակտիվացում, Սակագնային փաթեթների կառավարում։
            </p>
            <Link to="/my-team" style={{ backgroundColor: "#f55252", color: "#fff", padding: "10px 30px", borderRadius: "25px", textDecoration: "none", fontWeight: "600", display: "inline-block" }}>
              Միանալ
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "25px", padding: "20px" }}>
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png" 
            alt="TeamTV" 
            style={{ width: "160px", height: "160px", borderRadius: "20px", objectFit: "cover" }} 
          />
          <div>
            <h3 style={{ fontSize: "24px", color: "#1b2d46", marginBottom: "10px" }}>TeamTV</h3>
            <p style={{ color: "#68758a", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
              Ժամանակակից TV միշտ քեզ հետ։ Մինչև 200 ալիք, ավելի քան 5000 ֆիլմ տեսադարանում, դիտում 5 սարքավորումներով, մինչև 7 օր catch-up։
            </p>
            <Link to="/team-tv" style={{ backgroundColor: "#f55252", color: "#fff", padding: "10px 30px", borderRadius: "25px", textDecoration: "none", fontWeight: "600", display: "inline-block" }}>
              Միանալ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}