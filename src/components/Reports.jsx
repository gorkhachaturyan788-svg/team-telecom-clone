import React, { useState } from "react";

export default function Reports() {
  const [openYear, setOpenYear] = useState("2026");

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  const reportsData = {
    "2026": [
      {
        id: 1,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ շարժական բջջային կապի ծառայությունների 2026թ. 1-ին եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ"
      },
      {
        id: 2,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ ամրակցված կապի ծառայությունների 2026թ. 1-ին եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ"
      },
      {
        id: 3,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ շարժական բջջային կապի ծառայությունների 2026թ. 2-րդ եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ"
      },
      {
        id: 4,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ ամրակցված կապի ծառայությունների 2026թ. 2-րդ եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ"
      }
    ],
    "2025": [
      {
        id: 5,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2025)"
      }
    ],
    "2024": [
      {
        id: 6,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2024)"
      }
    ],
    "2023": [
      {
        id: 7,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2023)"
      }
    ],
    "2022": [
      {
        id: 8,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2022)"
      }
    ],
    "2021": [
      {
        id: 9,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2021)"
      }
    ],
    "2020": [
      {
        id: 10,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2020)"
      }
    ],
    "2019": [
      {
        id: 11,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2019)"
      }
    ],
    "2013": [
      {
        id: 12,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2013)"
      }
    ],
    "2012": [
      {
        id: 13,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2012)"
      }
    ],
    "2011": [
      {
        id: 14,
        title: "Տեղեկատվություն «Ստելեկոմ Արմենիա» ՓԲԸ տարեկան հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ (2011)"
      }
    ]
  };

  const yearsList = ["2026", "2025", "2024", "2023", "2022", "2021", "2013", "2020", "2012", "2019", "2011"];

  return (
    <div className="bg-[#f7f8fa] min-h-screen font-['Segoe_UI',Arial,sans-serif] py-[40px]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        <h1 className="text-[#1a2b3c] text-2xl sm:text-3xl font-bold mb-[30px]">
          Արդյունքներ և հաշվետվություններ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-start">
          
          <div className="lg:col-span-1">
            <div className="bg-[#bce6eb]/40 border border-[#8ec8de] p-4 rounded-xl shadow-sm cursor-pointer hover:bg-[#bce6eb]/70 transition-colors">
              <p className="text-[#0b4f70] font-semibold text-sm leading-snug">
                «Տելեկոմ Արմենիա» ՓԲԸ տարեկան հաշվետվություններ
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            {yearsList.map((year) => (
              <div key={year} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-[#1a2b3c] text-lg hover:bg-gray-50 transition-colors"
                >
                  <span>{year} թ.</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openYear === year ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openYear === year && (
                  <div className="p-6 bg-gray-50/50 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reportsData[year] ? (
                      reportsData[year].map((item) => (
                        <div
                          key={item.id}
                          className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="bg-[#e0e6ed] text-[#5c6b73] px-3 py-2 rounded-lg font-bold text-xs flex flex-col items-center justify-center shrink-0">
                            <span className="text-[14px]">PDF</span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {item.title}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm col-span-2">Տվյալներ չկան այս տարվա համար:</p>
                    )}
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}