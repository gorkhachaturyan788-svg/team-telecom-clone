import React, { useState } from "react";

export default function Sustainable() {
  const [activeTab, setActiveTab] = useState("commitment");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: "commitment", label: "Կայուն զարգացման հանձնառություն" },
    { id: "prospectus", label: "Ազդագիր" },
    { id: "framework", label: "Կայուն զարգացման պարտատոմսերի հայեցակարգ" },
    { id: "opinion", label: "Անկախ գնահատողի կարծիք" },
    { id: "model", label: "Ֆինանսական մոդել" },
    { id: "terms", label: "Թողարկման վերջնական պայմաններ" }
  ];

  return (
    <div className="bg-[#f7f8fa] min-h-screen font-['Segoe_UI',Arial,sans-serif] py-[30px]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Հացի փշրանքներ (Breadcrumbs) */}
        <div className="text-gray-500 text-xs sm:text-sm mb-6 flex items-center gap-2">
          <span>Գլխավոր</span>
          <span>›</span>
          <span>Ընկերության մասին</span>
          <span>›</span>
          <span className="text-[#1a2b3c] font-medium">Կայուն զարգացում</span>
        </div>

        <h1 className="text-[#1a2b3c] text-2xl sm:text-3xl font-bold mb-8">
          Կայուն զարգացում
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-start">
          
          {/* ձախ կողմի մենյու */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(true);
                }}
                className={`w-full text-left px-5 py-4 text-xs sm:text-sm font-medium border-b border-gray-100 transition-colors flex justify-between items-center ${
                  activeTab === item.id
                    ? "bg-[#bce6eb]/40 text-[#0b4f70] font-semibold border-l-4 border-l-[#0b4f70]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <svg className="w-4 h-4 text-[#0b4f70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Աջ կողմի բովանդակություն */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-[#1a2b3c] text-lg hover:bg-gray-50 transition-colors"
            >
              <span>
                {activeTab === "commitment" && "Հանձնառություն"}
                {activeTab === "prospectus" && "Ազդագիր"}
                {activeTab === "framework" && "Կայուն զարգացման պարտատոմսերի հայեցակարգ"}
                {activeTab === "opinion" && "Անկախ գնահատողի կարծիք"}
                {activeTab === "model" && "Ֆինանսական մոդել"}
                {activeTab === "terms" && "Թողարկման վերջնական պայմաններ"}
              </span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100">
                {activeTab === "commitment" && (
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      «Տելեկոմ Արմենիա» ՓԲԸ-ն հավատարիմ է կայուն զարգացման սկզբունքներին՝ միավորելով բիզնես հաջողությունները շրջակա միջավայրի պահպանության, սոցիալական պատասխանատվության և արդյունավետ կորպորատիվ կառավարման (ESG) չափանիշների հետ:
                    </p>
                    <p>
                      Մենք ներդնում ենք էներգաարդյունավետ և էկոլոգիապես մաքուր լուծումներ մեր ենթակառուցվածքներում, նպաստում հասարակության թվային ներառմանը և ապահովում թափանցիկ գործունեություն մեր բոլոր շահագրգիռ կողմերի համար:
                    </p>
                  </div>
                )}

                {activeTab !== "commitment" && (
                  <div className="text-gray-500 text-sm py-8 text-center">
                    Տվյալ բաժնի փաստաթղթերը կամ տեղեկատվությունը տեղադրման փուլում են:
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}