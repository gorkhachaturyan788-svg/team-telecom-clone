import React, { useState, useEffect } from "react";

export default function News() {
  const [activeTab, setActiveTab] = useState("news");

  // Ամեն անգամ, երբ էջը բացվում է կամ տաբն է փոխվում, ավտոմատ բարձրանում է վերև
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const newsList = [
    {
      date: "22 June",
      title: "«Ստելեկոմ Արմենիա» և «Ագերտելեկոմ» ընկերությունները ստորագրել են ինտերնետ տրաֆիկի տարանցման վերաբերյալ համաձայնագիր",
      image: "https://www.telecomarmenia.am/images/news/1/17821169098857/450x250c-center.jpeg",
    },
    {
      date: "12 June",
      title: "Team Telecom Armenia-ն ճանաչվել է «Ցուցակված բաժնետոմսերի շուկայում առաջատար ոչ ֆինանսական թողարկող»",
      image: "https://www.telecomarmenia.am/images/news/1/17812511752024/450x250c-center.jpeg",
    },
    {
      date: "10 June",
      tag: "տեսանյութ",
      title: "Team Telecom Armenia-ն կապահովի Firebird-ի AI մեգանախագծի կոմունիկացիոն և ինտերնետ ենթակառուցվածքը",
      image: "https://www.telecomarmenia.am/images/news/1/17810797188807/450x250c-center.jpeg",
    },
    {
      date: "14 May",
      title: "Ստելեգրաֆից մինչև 5G. կապի թանգարանը միանում է «Թանգարանների գիշերվան»",
      image: "https://www.telecomarmenia.am/images/news/1/17787646383268/450x250c-center.png",
    },
    {
      date: "13 May",
      title: "Team-ի աջակցությամբ տավուշցի հարյուրավոր աշակերտներ մասնակցել են «Սիմֆոնիկ ԴասԱ» կրթական ծրագրին",
      image: "https://www.telecomarmenia.am/images/news/1/17786537465042/450x250c-center.png",
    },
    {
      date: "22 April",
      title: "Բնության հանդեպ հոգատար վերաբերմունքը սկսել ենք մեզնից. Team-ը արժանացել է ISO 14001:2015 հավաստագրի",
      image: "https://www.telecomarmenia.am/images/news/1/17768593249213/450x250c-center.jpeg",
    },
    {
      date: "17 April",
      title: "Սովորի՛ր, խաղա՛ և հաղթի՛ր. Team-ն ու Koreez-ը առաջարկում են կրթական նոր հնարավորություն",
      image: "https://www.telecomarmenia.am/images/news/2/17764283852327/450x250c-center.png",
    },
    {
      date: "09 April",
      title: "Team-ի 2G-ն ամբողջ Հայաստանում փոխարինվել է նոր տեխնոլոգիաներով",
      image: "https://www.telecomarmenia.am/images/news/1/17757164588017/450x250c-center.jpeg",
    },
    {
      date: "07 April",
      title: "Team Telecom Armenia-ի ծառայությունների դիմաց վճարումները կրկին հասանելի են բոլոր հիմնական վճարահաշվարկային հավելվածներով և տերմինալներով",
      image: "https://www.telecomarmenia.am/images/news/1/17767570775366/450x250c-center.jpeg",
    },
    {
      date: "20 March",
      title: "700 երիտասարդ մեկ հարթակում. Team-ը կրթության ու մարզերի զարգացմանն ուղղված «Հզոր համայնք»-ի կողքին է",
      image: "https://www.telecomarmenia.am/images/news/1/17740030374784/450x250c-center.png",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 font-['Segoe_UI',Arial,sans-serif]">
      {/* Ներդիրներ (Tabs) */}
      <div className="flex gap-8 border-b border-gray-200 mb-6 text-[15px]">
        <button
          onClick={() => setActiveTab("news")}
          className={`pb-3 font-medium transition-colors relative ${
            activeTab === "news" ? "text-[#0b4f70] border-b-2 border-[#0b4f70]" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Նորություններ
        </button>
        <button
          onClick={() => setActiveTab("announcements")}
          className={`pb-3 font-medium transition-colors relative ${
            activeTab === "announcements" ? "text-[#0b4f70] border-b-2 border-[#0b4f70]" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Հայտարարություններ
        </button>
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-3 font-medium transition-colors relative ${
            activeTab === "all" ? "text-[#0b4f70] border-b-2 border-[#0b4f70]" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Բոլորը
        </button>
      </div>

      {/* Ամսաթվերի ֆիլտր և որոնում */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
          <span>2026.08.21 - 2026.08.21</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <button className="bg-[#e94e3c] hover:bg-[#d43f2d] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
          Որոնում
        </button>
      </div>

      {/* Նորությունների ցանց */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsList.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-[240px] overflow-hidden bg-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
                  <span>{item.date}</span>
                  {item.tag && <span className="text-gray-400">({item.tag})</span>}
                </div>
                <h3 className="text-[#1a1a1a] font-bold text-[16px] leading-[1.4]">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}