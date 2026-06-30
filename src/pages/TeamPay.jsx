import React from "react";
import TeamPayHero from "../components/TeamPayHero";
import TeamPayGallery from "../components/TeamPayGallery";
import TeamPaySection from "../components/TeamPaySection";

export default function TeamPay() {
  return (
    <div style={{ width: "82%", margin: "0 auto", paddingTop: "30px" }}>
      <h1 style={{ fontSize: "46px", color: "#1b2d46", marginBottom: "40px" }}>TeamPay</h1>
      
      <TeamPayHero />
      
      <TeamPayGallery />
      <TeamPaySection/>
    </div>
  );
}