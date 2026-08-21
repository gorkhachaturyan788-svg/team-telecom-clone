import React, { useState } from "react";

export default function Shareholders() {
  const [activeTab, setActiveTab] = useState("prospectus");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: "prospectus", label: "Ազդագիր" },
    { id: "internal-acts", label: "Ներքին իրավական ակտեր" },
    { id: "statements", label: "Կորպորատիվ կառավարման տարեկան հայտարարագրեր" },
    { id: "reports", label: "Հաշվետվություններ" },
    { id: "issuer-reports", label: "Հաշվետու թողարկողի զեկույցներ" },
    { id: "governing-bodies", label: "Կառավարման մարմիններ" },
    { id: "general-meetings", label: "Ընկերության բաժնետերերի ընդհանուր ժողովներ" },
    { id: "material-facts", label: "Էական փաստերի վերաբերյալ հայտարարություն" }
  ];

  const getTitle = () => {
    const item = menuItems.find((i) => i.id === activeTab);
    return item ? item.label : "";
  };

  return (
    <div className="bg-[#f7f8fa] min-h-screen font-['Segoe_UI',Arial,sans-serif] py-[30px]">
      <div className="max-w-[1240px] mx-auto px-[5%]">
        
        {/* Հացի փշրանքներ */}
        <div className="text-gray-500 text-xs sm:text-sm mb-6 flex items-center gap-2">
          <span>Գլխավոր</span>
          <span>›</span>
          <span className="text-[#1a2b3c] font-medium">Բաժնետերերին</span>
        </div>

        <h1 className="text-[#1a2b3c] text-2xl sm:text-3xl font-bold mb-8">
          Բաժնետերերին
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-start">
          
          {/* Ձախ կողմի մենյու */}
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
                  <svg className="w-4 h-4 text-[#0b4f70] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span>{getTitle()}</span>
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
                <div className="text-gray-500 text-sm py-8 text-center">
                  Տվյալ բաժնի փաստաթղթերը կամ տեղեկատվությունը տեղադրման փուլում են:
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}