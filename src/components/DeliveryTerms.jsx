import React from "react";

export default function DeliveryTerms() {
  const deliveryData = [
    {
      region: "Երևան",
      details: "բոլոր հասցեներ՝ անվճար",
      duration: "1 աշխատանքային օրվա ընթացքում",
    },
    {
      region: "Մարզեր",
      details: "1500 դրամ",
      duration: "3 աշխատանքային օրվա ընթացքում",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <h1 className="text-[28px] font-bold text-[#0b4f70] mb-[25px]">
        Առաքման պայմաններ
      </h1>

      <div className="overflow-x-auto shadow-md rounded-[8px] border border-[#e0e0e0]">
        <table className="w-full border-collapse bg-white text-[14px]">
          <thead>
            <tr className="bg-[#0b4f70] text-white">
              <th className="p-[14px] text-center border border-[#196488] font-semibold">Մարզ</th>
              <th className="p-[14px] text-center border border-[#196488] font-semibold">Բնակավայր/արժեք</th>
              <th className="p-[14px] text-center border border-[#196488] font-semibold">Ժամկետ</th>
            </tr>
          </thead>
          <tbody>
            {deliveryData.map((item, index) => (
              <tr key={index}>
                <td className="p-[16px] text-center border border-[#e0e0e0] font-medium bg-[#f4f8fa]">
                  {item.region}
                </td>
                <td className="p-[16px] text-center border border-[#e0e0e0] bg-[#f9fbfb]">
                  {item.details}
                </td>
                <td className="p-[16px] text-center border border-[#e0e0e0]">
                  {item.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}