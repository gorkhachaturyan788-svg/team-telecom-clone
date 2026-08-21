import React from "react";

export default function UsefulDocuments() {
  const documents = [
    {
      title: "Շարժական ֆիքսված ծառայությունների մատուցման դիմում հայտ",
      type: "PDF",
      fileSize: "PDF",
    },
    {
      title: "«ԿՈՄԲՈ»(«COMBO») «ԿՈՍՄՈ»(«COSMO») ծառայությունների մատուցման դիմում հայտ",
      type: "PDF",
      fileSize: "PDF",
    },
    {
      title: "«ԿՈՄԲՈ»(«COMBO») «ԿՈՍՄՈ»(«COSMO») սառեցման դիմում-հայտ",
      type: "PDF",
      fileSize: "PDF",
    },
    {
      title: "Ամրակցված հեռախոսահամարի կասեցման դիմում-հայտ",
      type: "PDF",
      fileSize: "PDF",
    },
    {
      title: "Ֆիքսված ինտերնետ ծառայության ժամանակավոր կասեցման դիմում-հայտ",
      type: "PDF",
      fileSize: "PDF",
    },
    {
      title: "«ՏԵԼԵԿՈՄ ԱՐՄԵՆԻԱ» ՓԲԸ ֆիքսված կապի ծառայությունների մատուցման դիմում-հայտ",
      type: "DOCX",
      fileSize: "DOCX",
    },
    {
      title: "«My Team» հավելվածի տրամադրման պայմաններ",
      type: "DOCX",
      fileSize: "DOCX",
    },
    {
      title: "Լիազորագիր",
      type: "PDF",
      fileSize: "PDF",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <h1 className="text-[32px] font-bold text-[#111] mb-[30px]">
        Օգտակար փաստաթղթեր
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-[#f8f9fa] border border-[#eee] rounded-[10px] p-[20px] flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => alert(`Ներբեռնվում է՝ ${doc.title}`)}
          >
            <div className="flex items-center gap-[15px]">
              <div className="w-[50px] h-[60px] bg-[#fff] border border-[#dcdcdc] rounded-[6px] flex flex-col items-center justify-center relative shadow-sm">
                <div className="absolute top-[2px] right-[2px] w-[10px] h-[10px] bg-[#fff] border-l border-b border-[#dcdcdc] transform rotate-[-45deg]"></div>
                <span className="text-[11px] font-bold text-[#555] mt-[10px]">
                  {doc.type}
                </span>
              </div>
              <p className="text-[15px] font-medium text-[#222] leading-[1.4] max-w-[380px]">
                {doc.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}