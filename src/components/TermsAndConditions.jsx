import React, { useState } from "react";

export default function TermsAndConditions() {
  const [activeCategory, setActiveCategory] = useState("active");
  const [openSection, setOpenSection] = useState("terms");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#f7f8fa] min-h-screen font-['Segoe_UI',Arial,sans-serif] py-[30px]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Հացի փշրանքներ */}
        <div className="text-gray-500 text-xs sm:text-sm mb-6 flex items-center gap-2">
          <span>Գլխավոր</span>
          <span>›</span>
          <span>Տեղեկատվություն</span>
          <span>›</span>
          <span className="text-[#1a2b3c] font-medium">Ընդհանուր դրույթներ և պայմաններ</span>
        </div>

        <h1 className="text-[#1a2b3c] text-2xl sm:text-3xl font-bold mb-8">
          Ընդհանուր դրույթներ և պայմաններ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-start">
          
          {/* Ձախ կողմի մենյու */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => setActiveCategory("active")}
              className={`w-full text-left px-5 py-4 text-xs sm:text-sm font-medium border-b border-gray-100 transition-colors flex justify-between items-center ${
                activeCategory === "active"
                  ? "bg-[#bce6eb]/40 text-[#0b4f70] font-semibold border-l-4 border-l-[#0b4f70]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>Գործող ընդհանուր դրույթներ և պայմաններ</span>
              {activeCategory === "active" && (
                <svg className="w-4 h-4 text-[#0b4f70] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setActiveCategory("archive")}
              className={`w-full text-left px-5 py-4 text-xs sm:text-sm font-medium transition-colors flex justify-between items-center ${
                activeCategory === "archive"
                  ? "bg-[#bce6eb]/40 text-[#0b4f70] font-semibold border-l-4 border-l-[#0b4f70]"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span>Արխիվ</span>
              {activeCategory === "archive" && (
                <svg className="w-4 h-4 text-[#0b4f70] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>

          {/* Աջ կողմի բովանդակություն */}
          <div className="lg:col-span-3 space-y-4">
            
            {activeCategory === "active" ? (
              <>
                {/* Բաժին 1 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleSection("terms")}
                    className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-[#1a2b3c] text-base sm:text-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Գործող ընդհանուր դրույթներ և պայմաններ</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openSection === "terms" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === "terms" && (
                    <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>Այստեղ ներկայացված են ընկերության մատուցվող ծառայությունների ընդհանուր դրույթներն ու պայմանները:</p>
                    </div>
                  )}
                </div>

                {/* Բաժին 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleSection("game1")}
                    className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-[#1a2b3c] text-base sm:text-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>«Արի՛ #SSS26 ընկերոջ հետ» Գովազդային վիճակախաղի կանոններ</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openSection === "game1" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === "game1" && (
                    <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>Մանրամասն տեղեկատվություն «Արի՛ #SSS26 ընկերոջ հետ» վիճակախաղի պայմանների և կանոնների մասին:</p>
                    </div>
                  )}
                </div>

                {/* Բաժին 3 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleSection("game2")}
                    className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-[#1a2b3c] text-base sm:text-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>«Մասնակցի՛ր «Հորիզոն»-ին ընկերոջ հետ» Գովազդային վիճակախաղի կանոններ</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openSection === "game2" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === "game2" && (
                    <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>Մանրամասն տեղեկատվություն «Հորիզոն» վիճակախաղի պայմանների և կանոնների մասին:</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center text-gray-500 text-sm">
                Արխիվային փաստաթղթեր առայժմ առկա չեն:
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}