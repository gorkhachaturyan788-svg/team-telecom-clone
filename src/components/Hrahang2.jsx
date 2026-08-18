import React from "react";

export default function Hrahang2() {
  const tableData = [
    {
      service: "Բաժանորդների սպասարկման կենտրոն («Team» բջջային հեռախոսահամարից)",
      code: "100"
    },
    {
      service: "Բաժանորդների սպասարկման կենտրոն (ֆիքսված հեռախոսակապից)",
      code: "100 / 080000611"
    },
    {
      service: "Բաժանորդների սպասարկման կենտրոն (ԱՊՀ երկրներից և այլ պետություններից զանգերի դեպքում, միայն ՀՀ «Team» բջջային ցանցի բաժանորդների համար)",
      code: "+37480000612"
    },
    {
      service: "Բաժանորդների սպասարկման կենտրոն արտերկրից զանգեր կատարելու համար։ Ուշադրություն. զանգը վճարովի է",
      code: "+37480000611"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-12 font-sans">
      {/* Ավելի փոքր լայնություն (max-w-3xl) և տեղափոխված ձախ */}
      <div className="max-w-3xl mx-0 sm:ml-6 lg:ml-12 px-4 space-y-8">
        
        {/* Բաժնի գլխավոր վերնագիր */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
          USSD հրահանգներ և օգտակար համարներ
        </h2>

        {/* Աղյուսակի բլոկ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 space-y-6">
          
          <h3 className="text-lg sm:text-xl font-bold text-[#003853]">
            Team անվճար տեղեկատու հեռախոսահամարներ
          </h3>

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