import React from "react";
import MyTeamHero from "../components/MyTeamHero";
import MyTeamGallery from "../components/MyTeamGallery";
import MyTeamOtherApps from "../components/MyTeamOtherApps";

export default function MyTeam() {
  return (
    <div style={{ width: "82%", margin: "0 auto", paddingTop: "30px" }}>
      <h1 style={{ fontSize: "46px", color: "#1b2d46", marginBottom: "40px" }}>My Team</h1>
      
      <MyTeamHero />
      
      <MyTeamGallery />
      
      <MyTeamOtherApps />
    </div>
  );
}