import React from "react";
import Room1 from "../components/Room1";
import Room2 from "../components/Room2";
import Room3 from "../components/Room3";
import Room4 from "../components/Room4";
import Room5 from "../components/Room5";
import Room6 from "../components/Room6";

export default function Room() {
  return (
    <main className="w-full bg-[#f7f5f0] min-h-screen">
      <Room1 />
      <Room2 />
      <Room3 />
      <Room4 />
      <Room5 />
      <Room6 />
    </main>
  );
}