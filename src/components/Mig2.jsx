import React, { useState } from "react";

export default function Mig2() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "ԱՄՆ",
    "Ռուսաստան",
    "Վրաստան",
    "Գերմանիա",
    "Ֆրանսիա",
    "Իտալիա",
    "Ուկրաինա",
    "Կանադա",
  ];

  return (
    <section className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans text-[#003853]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
   
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00749a] mb-3">
            Միջազգային ծառայություններ
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ընտրեք երկիրը
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed">
            Ընտրեք այն երկիրը, որի համար ցանկանում եք տեսնել հասանելի
            ծառայությունները։
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-[0_10px_40px_rgba(0,56,83,0.08)] border border-gray-100">
            <label
              htmlFor="country"
              className="block text-left font-bold text-base sm:text-lg mb-3"
            >
              Երկիր
            </label>

            <div className="relative">
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-12 text-base text-gray-700 outline-none cursor-pointer transition-all duration-200 hover:border-[#003853] focus:border-[#003853] focus:ring-4 focus:ring-[#003853]/10"
              >
                <option value="" disabled>
                  Ընտրեք երկիրը
                </option>

                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#003853]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {selectedCountry && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#003853]/5 px-4 py-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#003853] text-white flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Ընտրված երկիր
                  </p>
                  <p className="font-bold text-[#003853]">
                    {selectedCountry}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,56,83,0.06)] p-4 sm:p-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-[#003853] rounded-full" />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="Աշխարհի քարտեզ"
              className="w-full h-auto object-contain grayscale opacity-50 transition-all duration-500 hover:opacity-70"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-100 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Ձեր ընտրած երկիրը
                </p>

                <p className="font-bold text-[#003853] mt-1">
                  {selectedCountry || "Ընտրեք երկիր"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedCountry && (
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-100 shadow-sm px-5 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

              <span className="text-sm font-medium text-gray-600">
                Ծառայությունները հասանելի են՝
              </span>

              <span className="text-sm font-bold text-[#003853]">
                {selectedCountry}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}