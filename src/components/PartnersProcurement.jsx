import React, { useState } from "react";

export default function PartnersProcurement() {
  const [activeTab, setActiveTab] = useState("procurement"); // "procurement" | "sales" | "partners"

  return (
    <div className="font-['Segoe_UI',Arial,sans-serif] text-[#333] pb-[60px]">
      {/* Top Banner Image */}
      <div className="w-full h-[280px] overflow-hidden relative">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/15795288295411.jpeg"
          alt="Partners Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-[5%]">
        {/* Navigation Tabs Box */}
        <div className="relative -mt-[50px] bg-white rounded-[10px] shadow-lg grid grid-cols-1 md:grid-cols-3 overflow-hidden border border-[#eee] mb-[20px]">
          
          {/* Tab 1: Գնումներ */}
          <button
            onClick={() => setActiveTab("procurement")}
            className={`flex flex-col items-center justify-center py-[25px] px-[20px] transition-all cursor-pointer border-b md:border-b-0 md:border-r border-[#eee] ${
              activeTab === "procurement"
                ? "border-b-[4px] border-b-[#7cc5d8] bg-[#fafbfc]"
                : "hover:bg-[#fcfcfc]"
            }`}
          >
            <img
              src="https://www.telecomarmenia.am/files/icons/1/16510812743247/45x45.png"
              alt="Գնումներ"
              className="w-[40px] h-[40px] mb-[10px] object-contain"
            />
            <span className="text-[17px] font-bold text-[#222]">Գնումներ</span>
          </button>

          {/* Tab 2: Վաճառքներ */}
          <button
            onClick={() => setActiveTab("sales")}
            className={`flex flex-col items-center justify-center py-[25px] px-[20px] transition-all cursor-pointer border-b md:border-b-0 md:border-r border-[#eee] ${
              activeTab === "sales"
                ? "border-b-[4px] border-b-[#7cc5d8] bg-[#fafbfc]"
                : "hover:bg-[#fcfcfc]"
            }`}
          >
            <img
              src="https://www.telecomarmenia.am/files/icons/1/16510812388485/45x45.png"
              alt="Վաճառքներ"
              className="w-[40px] h-[40px] mb-[10px] object-contain"
            />
            <span className="text-[17px] font-bold text-[#222]">Վաճառքներ</span>
          </button>

          {/* Tab 3: Գործընկերներ */}
          <button
            onClick={() => setActiveTab("partners")}
            className={`flex flex-col items-center justify-center py-[25px] px-[20px] transition-all cursor-pointer ${
              activeTab === "partners"
                ? "border-b-[4px] border-b-[#7cc5d8] bg-[#fafbfc]"
                : "hover:bg-[#fcfcfc]"
            }`}
          >
            <img
              src="https://www.telecomarmenia.am/files/icons/1/16510719725688/45x45.png"
              alt="Գործընկերներ"
              className="w-[40px] h-[40px] mb-[10px] object-contain"
            />
            <span className="text-[17px] font-bold text-[#222]">Գործընկերներ</span>
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="text-[13px] text-[#666] mb-[30px]">
          Գլխավոր <span className="mx-[6px]">&gt;</span>{" "}
          {activeTab === "procurement" && "Գնումներ"}
          {activeTab === "sales" && "Վաճառքներ"}
          {activeTab === "partners" && "Գործընկերներ"}
        </div>

        {/* Content Section */}
        <h1 className="text-[32px] font-bold text-[#111] mb-[30px]">
          {activeTab === "procurement" && "Գնումներ"}
          {activeTab === "sales" && "Վաճառքներ"}
          {activeTab === "partners" && "Գործընկերներ"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
          {/* Sidebar Menu */}
          <div className="bg-[#f8f9fa] border border-[#eee] rounded-[8px] p-[10px] h-fit">
            {activeTab === "procurement" && (
              <>
                <div className="bg-[#7cc5d8] text-white px-[15px] py-[12px] rounded-[6px] font-medium text-[15px] mb-[5px] flex justify-between items-center cursor-pointer">
                  <span>Որակավորում</span>
                  <span>›</span>
                </div>
                <div className="px-[15px] py-[10px] text-[14px] text-[#444] hover:bg-[#eee] rounded-[6px] cursor-pointer transition-colors">
                  Մատակարարի մրցակցային ընտրություն
                </div>
                <div className="px-[15px] py-[10px] text-[14px] text-[#444] hover:bg-[#eee] rounded-[6px] cursor-pointer transition-colors">
                  Դառնալ գործընկեր
                </div>
              </>
            )}

            {activeTab === "sales" && (
              <>
                <div className="bg-[#7cc5d8] text-white px-[15px] py-[12px] rounded-[6px] font-medium text-[15px] mb-[5px] flex justify-between items-center cursor-pointer">
                  <span>Գույքի վաճառք</span>
                  <span>›</span>
                </div>
                <div className="px-[15px] py-[10px] text-[14px] text-[#444] hover:bg-[#eee] rounded-[6px] cursor-pointer transition-colors">
                  Մրցույթներ և աճուրդներ
                </div>
              </>
            )}

            {activeTab === "partners" && (
              <>
                <div className="bg-[#7cc5d8] text-white px-[15px] py-[12px] rounded-[6px] font-medium text-[15px] mb-[5px] flex justify-between items-center cursor-pointer">
                  <span>Մեր գործընկերները</span>
                  <span>›</span>
                </div>
                <div className="px-[15px] py-[10px] text-[14px] text-[#444] hover:bg-[#eee] rounded-[6px] cursor-pointer transition-colors">
                  Համագործակցության պայմաններ
                </div>
              </>
            )}
          </div>

          {/* Main Area Content */}
          <div className="lg:col-span-3 bg-white border border-[#eee] rounded-[8px] p-[30px]">
            {activeTab === "procurement" && (
              <div>
                <h3 className="text-[22px] font-bold mb-[15px] text-[#222]">
                  Գնումների գործընթաց և որակավորում
                </h3>
                <p className="text-[15px] text-[#555] leading-[1.6] mb-[20px]">
                  «Տելեկոմ Արմենիա» ՓԲԸ-ն իրականացնում է մատակարարների բաց և թափանցիկ ընտրություն՝ ապահովելով հավասար պայմաններ բոլոր հավակնորդների համար:
                </p>
                <div className="p-[20px] bg-[#f8f9fa] border-l-4 border-[#7cc5d8] rounded-[4px]">
                  <p className="text-[14px] text-[#333] font-medium">
                    Որակավորման անցկացման կարգին և անհրաժեշտ փաստաթղթերին ծանոթանալու համար կարող եք ընտրել համապատասխան բաժինը ձախ կողմի ցանկից:
                  </p>
                </div>
              </div>
            )}

            {activeTab === "sales" && (
              <div>
                <h3 className="text-[22px] font-bold mb-[15px] text-[#222]">
                  Ընկերության գույքի վաճառք
                </h3>
                <p className="text-[15px] text-[#555] leading-[1.6]">
                  Այս բաժնում ներկայացված են ընկերության կողմից իրացվող գույքի, սարքավորումների և այլ ակտիվների վաճառքի հայտարարությունները ու աճուրդների պայմանները:
                </p>
              </div>
            )}

            {activeTab === "partners" && (
              <div>
                <h3 className="text-[22px] font-bold mb-[15px] text-[#222]">
                  Գործընկերներ և համագործակցություն
                </h3>
                <p className="text-[15px] text-[#555] leading-[1.6]">
                  Մենք անընդհատ ընդլայնում ենք մեր գործընկերային ցանցը՝ ստեղծելով նորարարական և փոխշահավետ լուծումներ մեր բաժանորդների համար:
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}