import React from "react";

export default function CoverageMap() {
  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <h1 className="text-[28px] font-bold text-[#0b4f70] mb-[25px]">
        Team ինտերնետի հասանելիության ծածկույթ
      </h1>
      <p className="mb-[20px] text-[15px] leading-[1.7]">
        Այստեղ կարող եք ստուգել Team Telecom Armenia-ի ինտերնետի հասանելիությունը Ձեր տարածքում։
      </p>
      <div className="w-full h-[500px] bg-[#f4f8fa] flex items-center justify-center border border-[#e0e0e0] rounded-[8px]">
       
        <p className="text-[#0b4f70] font-semibold">Քարտեզը բեռնվում է...</p>
      </div>
    </div>
  );
}