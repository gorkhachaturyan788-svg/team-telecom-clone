import React from "react";

export default function ApalikPaymanner() {
  const banks = [
    {
      name: "ԱԿԲԱ ԲԱՆԿ",
      age: "20-65",
      rate: "21.6%",
      fee: "0%",
      duration: "3-36",
      maxAmount: "3,500,000 դրամ",
      minAmount: "26,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ",
      factReg: "Այո",
      artsakhReg: "ՀՀ-ում փաստացի բնակության վայրից տեղեկանքի բնօրինակի դեպքում այո",
      maxPhones: "մինչև 2",
      secondSale: "2 սմարթֆոնից ոչ ավել",
      employed: "Պարտադիր չէ",
      langRule: "Չի ընդունվում",
    },
    {
      name: "ՅՈՒՆԻԲԱՆԿ",
      age: "21-65",
      rate: "21,5%",
      fee: "0%",
      duration: "3-48 ամիս",
      maxAmount: "1,500,000 դրամ",
      minAmount: "30,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ",
      factReg: "Այո",
      artsakhReg: "Այո, տրամադրում ենք, եթե ներկայացնի բնակության վայրից տեղեկանք",
      maxPhones: "մինչև 2",
      secondSale: "2 սմարթֆոնից ոչ ավել",
      employed: "Պարտադիր է",
      langRule: "Չի ընդունվում",
    },
    {
      name: "ԻՆԵԿՈԲԱՆԿ",
      age: "21-70",
      rate: "19-21.7 %",
      fee: "0%",
      duration: "3- 48 ամիս",
      maxAmount: "5,000,000 դրամ",
      minAmount: "30,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ",
      factReg: "Այո",
      artsakhReg: "Այո, եթե բնակվում և աշխատում է ՀՀ-ում",
      maxPhones: "մինչև 2",
      secondSale: "Հաճախորդը կարող է ձեռք բերել մեկ հատ մինչև 100,000 ՀՀ դրամ արժողությամբ և մեկ հատ 100,001 ՀՀ դրամը արժեքը գերազանցող բջջ. հեռախոս",
      employed: "Պարտադիր է",
      langRule: "Չի ընդունվում",
    },
    {
      name: "ՎՏԲ-Հայաստան բանկ (առցանց ապառիկ)",
      age: "Արական` 20-70 Իգական` 18-70",
      rate: "23% - 24%",
      fee: "0.99%-1%",
      duration: "3- 36 ամիս",
      maxAmount: "1,000,000 դրամ",
      minAmount: "30,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ անձնագրում փաստացի գրանցման կնիք",
      factReg: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ և անձնագրում փաստացի գրանցման կնիք",
      artsakhReg: "Տրամադրվում է ապառիկի ձևակերպման ստանդարտ ընթացակարգով, առանց որևէ լրացուցիչ փաստաթղթերի: Գրանցման հասցեի դաշտում առկա է Արցախի Հանրապետություն տողը",
      maxPhones: "մինչև 2",
      secondSale: "2 սմարթֆոնից ոչ ավել",
      employed: "Պարտադիր չէ",
      langRule: "Ընդունելի են Անգլերեն կամ Ռուսերեն լեզուներով գրված տարբերակները",
    },
    {
      name: "ԱՄԵՐԻԱԲԱՆԿ",
      age: "20-65",
      rate: "21.5%",
      fee: "0%",
      duration: "6-36 ամիս",
      maxAmount: "1,000,000 դրամ",
      minAmount: "50,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ",
      factReg: "Այո",
      artsakhReg: "Այո, տրամադրում ենք",
      maxPhones: "մինչև 2",
      secondSale: "2 սմարթֆոնից ոչ ավել",
      employed: "Պարտադիր չէ",
      langRule: "Չի ընդունվում",
    },
    {
      name: "ԷՎՈԿԱԲԱՆԿ",
      age: "20-65",
      rate: "21%",
      fee: "0%",
      duration: "12-48 ամիս",
      maxAmount: "2,500,000 ՀՀ դրամ",
      minAmount: "50,000 դրամ",
      docs: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ",
      factReg: "Այո, տրամադրվում է, ներկայացնի բնակ.",
      artsakhReg: "Անձնագիր և ՀԾՀ քարտ կամ ID քարտ և անձնագրում փաստացի գրանցման կնիք",
      maxPhones: "մինչև 2",
      secondSale: "Սահմանափակում չունի",
      employed: "Պարտադիր չէ",
      langRule: "Հնարավոր է միայն հաստատմամբ, հետո խուսափել",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[40px] font-['Segoe_UI',Arial,sans-serif] text-[#333]">
      <h1 className="text-[28px] font-bold text-[#0b4f70] mb-[20px]">
        Ապառիկ վաճառքի պայմաններ
      </h1>
      <p className="text-[15px] leading-[1.6] mb-[30px]">
        30,000 դրամ և ավելի գնով սմարթֆոնի ձեռքբերման դեպքում ֆիզիկական անձանց համար ապառիկ վաճառքն իրականացվում է «ԱԿԲԱ ԲԱՆԿ», «ՅՈՒՆԻԲԱՆԿ», «ԻՆԵԿՈԲԱՆԿ», «ԷՎՈԿԱԲԱՆԿ» ինչպես նաև «ՎՏԲ-Հայաստան բանկ»(առցանց ապառիկ) -ի միջոցով:
      </p>

      <div className="overflow-x-auto shadow-md rounded-[8px] border border-[#e0e0e0]">
        <table className="w-full border-collapse bg-white text-[13px]">
          <thead>
            <tr className="bg-[#0b4f70] text-white">
              <th className="p-[12px] text-left border border-[#196488]">Ցուցանիշ</th>
              {banks.map((bank, index) => (
                <th key={index} className="p-[12px] text-center border border-[#196488]">
                  {bank.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Տարիք</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.age}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Տարեկան տոկոսադրույք</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.rate}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Սպասարկման Ամսական միջնորդավճար</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.fee}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Վարկի ժամկետ (ամիս)</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.duration}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Վարկի առավելագույն չափը</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.maxAmount}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Վարկի նվազագույն չափը</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.minAmount}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Անհրաժեշտ փաստաթղթեր</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.docs}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Փաստացի գրանցում</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.factReg}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Արցախի գրանցում</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.artsakhReg}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Սմարթֆոնների քանակը մեկ հաճախորդին</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.maxPhones}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">2-րդ վաճառք նույն հաճախորդին</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.secondSale}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Գրանցված աշխատող</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.employed}</td>
              ))}
            </tr>
            <tr>
              <td className="p-[12px] font-semibold bg-[#f4f8fa] border border-[#e0e0e0]">Լեզվական կանոններ</td>
              {banks.map((b, i) => (
                <td key={i} className="p-[12px] text-center border border-[#e0e0e0]">{b.langRule}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}