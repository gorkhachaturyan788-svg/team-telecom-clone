import React from "react";

export default function Hrahang3() {
  const topTableData = [
    {
      service: "Հաշվեկշռի ստուգում կանխավճարային համակարգի բաժանորդներին",
      code: "*102#"
    },
    {
      service: "Team այլ բաժանորդի հաշվի վերալիցքավորում ֆիքսված հեռախոսահամարից",
      code: "080000696"
    }
  ];

  const bottomTableData = [
    {
      service: "Տեղեկատվություն հարցման պահին միացված ծառայությունների մասին",
      code: "*110*09#"
    },
    {
      service: "Տեղեկատվություն ընթացիկ սակագնային փաթեթի մասին",
      code: "*110*05#"
    },
    {
      service: "Giga փաթեթների հաշվեկշռի ստուգում",
      code: "*203#"
    },
    {
      service: "Mega փաթեթների հաշվեկշռի ստուգում",
      code: "*215#"
    },
    {
      service: "3GB փաթեթի հաշվեկշռի ստուգում",
      code: "*217#"
    },
    {
      service: "Հեռախոսահամարի ստուգում",
      code: "*525#"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-6 font-sans">
      <div className="max-w-3xl mx-0 sm:ml-6 lg:ml-12 px-4 space-y-8">
        
        {/* Բաժնի գլխավոր վերնագիր */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003853] tracking-tight">
          Հաշվի վերալիցքավորում և հաշվեկշռի ստուգում
        </h2>

        {/* Առաջին աղյուսակ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {topTableData.map((item, index) => (
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

        {/* Երկրորդ աղյուսակ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {bottomTableData.map((item, index) => (
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