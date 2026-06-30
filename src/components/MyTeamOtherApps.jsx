import React from "react";

export default function MyTeamOtherApps() {
  return (
    <div style={{ marginTop: "80px", marginBottom: "80px" }}>
      <h2 style={{ fontSize: "32px", color: "#1b2d46", marginBottom: "40px", fontWeight: "700" }}>
        Այլ հավելվածներ
      </h2>
      
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "25px" }}>
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png" 
            alt="TeamTV" 
            style={{ width: "220px", height: "220px", borderRadius: "20px", flexShrink: 0, objectFit: "cover" }} 
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <h3 style={{ fontSize: "24px", color: "#1b2d46", margin: 0 }}>TeamTV</h3>
            <p style={{ color: "#68758a", fontSize: "16px", margin: 0 }}>
              Ժամանակակից TV միշտ քեզ հետ<br />
              Մինչև 200 ալիք<br />
              Ավելի քան 5000 ֆիլմ տեսադարանում<br />
              Դիտում 5 սարքավորումներով<br />
              Մինչև 7 օր catch-up...
            </p>
            <button style={{ width: "160px", background: "#f55252", color: "#fff", border: "none", padding: "12px 0", borderRadius: "25px", cursor: "pointer", fontWeight: "600" }}>
              Միանալ
            </button>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "25px" }}>
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17691688001842.png" 
            alt="Team Energy" 
            style={{ width: "220px", height: "220px", borderRadius: "20px", flexShrink: 0, objectFit: "cover" }} 
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <h3 style={{ fontSize: "24px", color: "#1b2d46", margin: 0 }}>Team Energy</h3>
            <p style={{ color: "#68758a", fontSize: "16px", margin: 0 }}>
              Team Energy հավելվածի միջոցով<br />
              կարող եք գտնել մոտակա<br />
              էլեկտրական լիցքավորման<br />
              կայանը, հետևելով քայլերի<br />
              հաջորդականությանը՝...
            </p>
            <button style={{ width: "160px", background: "#f55252", color: "#fff", border: "none", padding: "12px 0", borderRadius: "25px", cursor: "pointer", fontWeight: "600" }}>
              Միանալ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}