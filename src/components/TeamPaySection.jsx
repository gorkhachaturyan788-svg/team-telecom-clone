import React from "react";
import { Link } from "react-router-dom";

export default function TeamPaySection() {
  const apps = [
    {
      title: "My Team",
      desc: "My Team հավելվածի միջոցով Դուք կարող եք՝ հաշվեկշռի և փաթեթների մնացորդների ստուգում, ավտոմատ վճարումների ակտիվացում, սակագնային փաթեթների կառավարում։",
      img: "https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png",
      link: "/my-team"
    },
    {
      title: "Team Energy",
      desc: "Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ լիցքավորել մեքենան։",
      img: "https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png",
      link: "/team-energy"
    }
  ];

  return (
    <div style={{ padding: "60px 0" }}>
      <h2 style={{ fontSize: "32px", color: "#1b2d46", marginBottom: "40px", fontWeight: "700" }}>
        Այլ հավելվածներ
      </h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
        {apps.map((app, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "25px", padding: "20px" }}>
            <img 
              src={app.img} 
              alt={app.title} 
              style={{ width: "160px", height: "160px", borderRadius: "20px", objectFit: "cover" }} 
            />
            <div>
              <h3 style={{ fontSize: "24px", color: "#1b2d46", marginBottom: "10px" }}>{app.title}</h3>
              <p style={{ color: "#68758a", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                {app.desc}
              </p>
              <Link 
                to={app.link} 
                style={{ 
                  backgroundColor: "#f55252", 
                  color: "#fff", 
                  padding: "10px 30px", 
                  borderRadius: "25px", 
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-block"
                }}
              >
                Միանալ
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}