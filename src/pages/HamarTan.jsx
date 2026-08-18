import React from "react";
import HamarTan1 from "../components/HamarTan1";
import HamarTan2 from "../components/HamarTan2";
import HamarTan3 from "../components/HamarTan3";
import HamarTan4 from "../components/HamarTan4";
import HamarTan5 from "../components/HamarTan5";

export default function HamarTun() {
  return (
    <main className="w-full bg-[#f7f5f0] min-h-screen">
      <HamarTan1 />
       <HamarTan2/>
       <HamarTan3/>
       <HamarTan4/>
       <HamarTan5/>
    </main>
  );
}