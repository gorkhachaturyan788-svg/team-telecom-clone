import React, { useState } from "react";

export default function Kompi2() {
  const [driveOpen, setDriveOpen] = useState(true);
  const [internetOpen, setInternetOpen] = useState(true);

  const driveTariffs = [
    {
      title: "Drive Maxi + (100 ԳԲ)",
      desc: "Գերարագ ինտերնետ նутбуուկների, WiFi/USB մոդեմների համար",
    },
    {
      title: "Drive Maxi (80 ԳԲ)",
      desc: "Գերարագ ինտերնետ նутбуուկների, WiFi/USB մոդեմների համար",
    },
    {
      title: "Drive Midi (50 ԳԲ)",
      desc: "Գերարագ ինտերնետ նутбуուկների, WiFi/USB մոդեմների համար",
    },
    {
      title: "Drive Mini (20 ԳԲ)",
      desc: "Գերարագ ինտերնետ նутбуուկների, WiFi/USB մոդեմների համար",
    },
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-12 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003853]">
          Համակարգչի/պլանշետի համար
        </h1>

        {/* Section 1: Drive */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div 
            className="flex justify-between items-center cursor-pointer select-none"
            onClick={() => setDriveOpen(!driveOpen)}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#003853]">Drive</h2>
            <span className={`transform transition-transform duration-300 text-[#003853] text-xl font-bold ${driveOpen ? "rotate-180" : ""}`}>
              ▲
            </span>
          </div>

          {driveOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {driveTariffs.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#fcfcfc] border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#003853] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8">
                    <button className="border border-[#ea3838] text-[#ea3838] hover:bg-[#ea3838] hover:text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors">
                      Մանրամասն
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: Ինտերնետ Այսօր */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div 
            className="flex justify-between items-center cursor-pointer select-none"
            onClick={() => setInternetOpen(!internetOpen)}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#003853]">Ինտերնետ Այսօր</h2>
            <span className={`transform transition-transform duration-300 text-[#003853] text-xl font-bold ${internetOpen ? "rotate-180" : ""}`}>
              ▲
            </span>
          </div>

          {internetOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-[#fcfcfc] border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#003853] leading-snug">
                    Ինտերնետ Այսօր
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Օրական գերարագ ինտերնետ պլանշետից և համակարգչից
                  </p>
                </div>
                <div className="mt-8">
                  <button className="border border-[#ea3838] text-[#ea3838] hover:bg-[#ea3838] hover:text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors">
                    Մանրամասն
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}