import React from "react";
import Car1 from "../components/Car1";
import Car2 from "../components/Car2";

export default function Car() {
  return (
    <main className="w-full bg-[#f7f5f0] min-h-screen">
      <Car1 />
      <Car2/>
    </main>
  );
}