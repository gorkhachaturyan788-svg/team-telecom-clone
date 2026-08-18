import React from "react";

export default function Hrahang4() {
  const tableData = [
    { name: "Giga 15", price: "5000", code: "*1115#" },
    { name: "Giga 10", price: "3500", code: "*1110#" },
    { name: "Giga 5", price: "2000", code: "*1105#" },
    { name: "Giga 2", price: "1000", code: "*1102#" },
    { name: "3 GB", price: "500", code: "*4100#" }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-6 font-sans">
      <div className="max-w-3xl mx-0 sm:ml-6 lg:ml-12 px-4 space-y-8">
        
        {/* Բաժնի գլխավոր վերնագիր */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
          USSD հրահանգներ հետվճարային բաժանորդների համար
        </h2>

        {/* Աղյուսակի բլոկ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 space-y-4">
          
          <h3 className="text-lg sm:text-xl font-bold text-[#003853]">
            Ինտերնետ
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs sm:text-sm italic">
                  <th className="py-3 pr-4 font-normal">Անվանում</th>
                  <th className="py-3 px-4 font-normal">Արժեք (դրամ)</th>
                  <th className="py-3 pl-4 font-normal text-right">USSD ակտիվացման հրահանգ</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 last:border-none hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 pr-4 text-gray-700 text-xs sm:text-sm font-medium">
                      {item.name}
                    </td>
                    <td className="py-4 px-4 text-gray-700 text-xs sm:text-sm">
                      {item.price}
                    </td>
                    <td className="py-4 pl-4 text-right">
                      <span className="text-[#003853] font-bold text-xs sm:text-sm hover:underline cursor-pointer">
                        {item.code}
                      </span>
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