import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("mobile");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const contentData = {
    mobile: [
      {
        title: "Զանգեր արտասահմանյան համարներից",
        text: "Ուշադրություն դարձրեք անհայտ կամ միջազգային կասկածելի զանգերին։ Հաճախ խարդախները զանգահարում և անհհայտ պատճառներով անջատում են, որպեսզի հետ զանգահարեք (missed call fraud):"
      },
      {
        title: "Զանգեր կարճ համարներին",
        text: "Եղեք ուշադիր կարճ համարներով հնարավոր վճարովի ծառայություններից օգտվելիս։ Նախապես ծանոթացեք սակագներին և պայմաններին:"
      },
      {
        title: "Մասնակցություն խաղարկություններին",
        text: "Team Telecom Armenia-ն երբեք չի պահանջի գումար կամ անձնական տվյալներ (քարտային գաղտնաբառեր) խաղարկություններում հաղթելու դեպքում:"
      }
    ],
    internet: [
      {
        title: "Անվտանգ ինտերնետային վարքագիծ",
        text: "Մի բացեք անծանոթ հղումներ, որոնք ստանում եք կասկածելի էլ. փոստով կամ հաղորդագրություններով:"
      },
      {
        title: "Գաղտնաբառերի պաշտպանություն",
        text: "Օգտագործեք բարդ և տարբեր գաղտնաբառեր ձեր հաշիվների համար, մի կիսվեք դրանցով որևէ մեկի հետ:"
      }
    ],
    kids: [
      {
        title: "Երեխաների պաշտպանությունը համացանցում",
        text: "Սահմանափակեք անբնական կամ վնասակար բովանդակությամբ կայքերի հասանելիությունը հատուկ ծնողական հսկողության (Parental Control) գործիքների միջոցով:"
      }
    ]
  };

  return (
    <div className="max-w-[1240px] mx-auto px-[5%] py-[30px] font-['Segoe_UI',Arial,sans-serif]">
      {/*  Breadcrumbs */}
      <div className="text-[13px] text-[#7a8b9e] mb-[25px] flex items-center gap-[6px]">
        <Link to="/" className="hover:text-[#0b4f70]">Գլխավոր</Link>
        <span>›</span>
        <span>Տեղեկատվություն</span>
        <span>›</span>
        <span className="text-[#222]">Անվտանգություն</span>
      </div>

      {/* Title */}
      <h1 className="text-[32px] font-bold text-[#111] mb-[30px]">Անվտանգություն</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-start">
        {/* Left Sidebar Menu */}
        <div className="flex flex-col bg-[#f4f7f9] rounded-[8px] overflow-hidden">
          <button
            onClick={() => { setActiveTab("mobile"); setOpenIndex(null); }}
            className={`flex items-center justify-between px-[20px] py-[15px] text-left text-[14px] font-semibold transition-colors ${
              activeTab === "mobile" ? "bg-[#8ec8de] text-[#0b4f70]" : "text-[#333] hover:bg-[#e8f1f5]"
            }`}
          >
            <span>Բջջային կապ</span>
            <span>›</span>
          </button>
          <button
            onClick={() => { setActiveTab("internet"); setOpenIndex(null); }}
            className={`flex items-center justify-between px-[20px] py-[15px] text-left text-[14px] font-semibold transition-colors border-t border-[#e2e8ed] ${
              activeTab === "internet" ? "bg-[#8ec8de] text-[#0b4f70]" : "text-[#333] hover:bg-[#e8f1f5]"
            }`}
          >
            <span>Անվտանգ ինտերնետ</span>
            <span>›</span>
          </button>
          <button
            onClick={() => { setActiveTab("kids"); setOpenIndex(null); }}
            className={`flex items-center justify-between px-[20px] py-[15px] text-left text-[14px] font-semibold transition-colors border-t border-[#e2e8ed] ${
              activeTab === "kids" ? "bg-[#8ec8de] text-[#0b4f70]" : "text-[#333] hover:bg-[#e8f1f5]"
            }`}
          >
            <span>Երեխաների անվտանգություն</span>
            <span>›</span>
          </button>
        </div>

        {/* Right Content Accordion */}
        <div className="lg:col-span-3 flex flex-col gap-[15px]">
          {contentData[activeTab].map((item, index) => (
            <div key={index} className="border-b border-[#e2e8ed] pb-[15px]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left py-[10px] text-[18px] font-bold text-[#111] hover:text-[#0b4f70] transition-colors"
              >
                <span>{item.title}</span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-[10px] text-[15px] text-[#555] leading-[1.6] bg-[#fafbfc] p-[15px] rounded-[6px]">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}