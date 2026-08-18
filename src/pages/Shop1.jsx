import React from "react";
import Arcanc1 from "../components/Arcanc1";
import Arcanc2 from "../components/Arcanc2";
import Arcanc3 from "../components/Arcanc3";
import Arcanc4 from "../components/Arcanc4";
import Arcanc5 from "../components/Arcanc5";
import ArcancFAQ from "../components/ArcancFAQ";

export default function Shop1() {
  return (
    <main className="w-full bg-[#f7f5f0] min-h-screen">
      <Arcanc1 />
      <Arcanc2 />
      <Arcanc3 />
      <Arcanc4 />
      <Arcanc5 />
      <ArcancFAQ />
    </main>
  );
}