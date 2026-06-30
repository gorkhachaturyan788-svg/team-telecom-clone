import React from "react";
import TeamEnergyHero from "../components/TeamEnergyHero";
import TeamEnergyGallery from "../components/TeamEnergyGallery";
import TeamEnergySection from "../components/TeamEnergySection";

export default function TeamEnergy() {
  return (
    <div style={{ width: "82%", margin: "0 auto", paddingTop: "30px" }}>
      
      <TeamEnergyHero />
      <TeamEnergyGallery/>
      <TeamEnergySection />
    </div>
  );
}
