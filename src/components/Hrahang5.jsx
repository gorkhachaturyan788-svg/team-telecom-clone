import React from "react";

export default function Hrahang5() {
  const tableData = [
    { service: "Հրշեջ ծառայություն", code: "101" },
    { service: "Ոստիկանություն", code: "102" },
    { service: "Շտապ օգնություն", code: "103" },
    { service: "Գազի վթարային ծառայություն", code: "104" },
    { service: "Փրկարար ծառայություն", code: "112" },
    { service: "Արտակարգ իրավիճակներում օգնության ծառայություն", code: "911 / 112" }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-6 font-sans">
      <div className="max-w-3xl mx-0 sm:ml-6 lg:ml-12 px-4 space-y-8">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
          Արագ արձագանքման համարներ (անվճար)
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {tableData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 last:border-none hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 pr-4 text-gray-700 text-xs sm:text-sm leading-relaxed w-2/3">
                      {item.service}
                    </td>
                    <td className="py-4 pl-4 text-[#003853] font-bold text-sm sm:text-base w-1/3 text-right">
                      {item.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}