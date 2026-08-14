import React from "react";
import VerjinFayl from "./VerjinFayl";

export default function ComboPackageDetail() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8">
      
      {/* Վերնագիր և գին */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-black text-[#003853]">
          ԿՈՄԲՈ 4 9900
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Ամսական վճարը 9900 դրամ է։ <br />
          Զեղչված արժեք՝ 7425 դրամ։ Զեղչը գործում է 16.07.2026թ- 16.10.2026թ. միանալու դեպքում։
        </p>
      </div>

      <hr className="border-gray-100" />

      {/* Բջջային ներառումներ */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#003853]">
          Բջջային ներառումներ
        </h2>

        <div className="space-y-4">
          
          {/* 1. Be Free */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16514909792549/80x80.png" alt="Be Free" className="w-8 h-8 object-contain" />
              <span className="font-bold text-[#003853]">Be Free 5000</span>
            </div>
            <span className="text-xl md:text-2xl font-black text-[#003853]">5,000</span>
          </div>

          {/* 2. Րոպեներ */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16510708980018/80x80.png" alt="Minutes" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium max-w-[320px]">
                Րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">3,000</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">րոպե</span>
            </div>
          </div>

          {/* 3. SMS */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16510702991504/80x80.png" alt="SMS" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                SMS դեպի ՀՀ բոլոր ցանցեր
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">500</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">SMS</span>
            </div>
          </div>

          {/* 4. Բջջային ինտերնետ */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/16509740618025/80x80.png" alt="Internet" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                Բջջային ինտերնետ
              </span>
            </div>
            <span className="text-xl md:text-2xl font-black text-[#003853]">Անսահմ․</span>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <img src="https://www.telecomarmenia.am/files/icons/1/17144783965957/80x80.png" alt="Roaming" className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base text-[#003853] font-medium">
                Ինտերնետ ռոումինգում
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl md:text-2xl font-black text-[#003853]">200</span>
              <span className="text-xs text-gray-500 ml-1 font-semibold">ՄԲ</span>
            </div>
          </div>

        </div>
      </div>

      <hr className="border-gray-100" />
      <VerjinFayl />

    </div>
  );
}