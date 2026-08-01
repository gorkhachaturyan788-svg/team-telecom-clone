import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Սակագներ",
      to: "/tariffs",
      dropdown: [
        { label: "Բջջային կապ", to: "/tariffs/mobile" },
        { label: "Ինտերնետ և TV - ԿՈՄՄՈ", to: "/tariffs/combo" },
        { label: "Ինտերնետ և TV - ԿՈՄԲՈ", to: "/tariffs/combi" },
        { label: "Ֆիքսված հեռախոսակապ", to: "/tariffs/fixed" },
      ],
    },
    {
      title: "Ինտերնետ",
      to: "/internet",
      dropdown: [
        { label: "Սմարթֆոնի համար", to: "/internet/smartphone" },
        { label: "Տան համար - ԿՈՄՄՈ", to: "/internet/home-combo" },
        { label: "Տան համար - ԿՈՄԲՈ", to: "/internet/home-combi" },
        { label: "Համակարգչի/պլանշետի համար", to: "/internet/device" },
        { label: "Team 5G", to: "/internet/5g" },
      ],
    },
    {
      title: "Ծառայություններ",
      to: "/services",
      dropdown: [
        { label: "TeamTV", to: "/services/team-tv" },
        { label: "Վճարում և համալրում", to: "/services/payment" },
        { label: "Զվարճանք", to: "/services/entertainment" },
        { label: "Զանգեր և անվտանգություն", to: "/services/calls-security" },
        { label: "Ֆիքսված հեռախոսակապ", to: "/services/fixed" },
      ],
    },
    {
      title: "Ռոումինգ և Միջազգային կապ",
      to: "/roaming",
      dropdown: [
        { label: "Ռոումինգ", to: "/roaming/roaming" },
        { label: "Միջազգային կապ", to: "/roaming/international" },
        { label: "Օգտակար տեղեկատվություն", to: "/roaming/info" },
        { label: "Ծառայություններ", to: "/roaming/services" },
      ],
    },
    {
      title: "Բիզնես լուծումներ",
      to: "/business-solutions",
      dropdown: [
        { label: "E-shop", to: "/eshop" },
        { label: "Առցանց ապառիկ", to: "/online-credit" },
        { label: "Բաժանորդագրություն", to: "/subscription" },
      ],
    },
    {
      title: "Օգնություն",
      to: "/support",
      dropdown: [
        { label: "Հաճախ տրվող հարցեր", to: "/support/faq" },
        { label: "Սարքերի կարգավորումներ", to: "/support/settings" },
        { label: "Բաժանորդային սպասարկում", to: "/support/service" },
        { label: "USSD հրահանգներ և օգտակար համարներ", to: "/support/ussd" },
      ],
    },
  ];

  return (
    <header className="w-full font-sans relative">
      {/* Վերին հատված */}
      <div className="bg-[#003853] text-white text-[13px] h-[36px] flex items-center justify-between px-6 sm:px-10 lg:px-[10%] relative">
        <div className="flex h-full">
          <Link to="/" className="flex items-center px-3 sm:px-4 hover:bg-[#002d44]">Անհատներին</Link>
          <Link to="/business" className="flex items-center px-3 sm:px-4 bg-[#002d44] h-full">Բիզնես</Link>
          <Link to="/eshop" className="flex items-center px-3 sm:px-4 hover:bg-[#002d44] gap-2">
            <span>🛒</span> E-shop
          </Link>
        </div>

        {/* Աջ մասը մեծ էկրանների համար */}
        <div className="hidden md:flex items-center h-full">
          <div className="px-3 cursor-pointer hover:text-gray-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 text-[#ff6a6a]">Հայ</Link>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 hover:text-gray-300">Рус</Link>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 hover:text-gray-300">Eng</Link>
          <span className="text-[#005a75] px-3">|</span>
          <Link to="/login" className="flex items-center pr-4 gap-2 hover:text-gray-300">
            <span>👤</span> Անձնական գրասենյակ 
          </Link>
        </div>

        {/* Կոճակ փոքր էկրանների համար, երբ տեղը չի հերիքում */}
        <div className="flex md:hidden items-center h-full">
          <button 
            onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
            className="flex items-center gap-1 px-3 bg-[#002d44] h-full text-xs"
          >
            <span>👤 Ավելին</span>
            <svg className={`w-3 h-3 transition-transform ${isTopMenuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Բացվող ցանկը փոքր էկրանների համար */}
          {isTopMenuOpen && (
            <div className="absolute top-full right-0 w-[220px] bg-[#003853] shadow-xl border-t border-[#002d44] py-2 z-50 flex flex-col">
              <div className="flex items-center px-4 py-2 hover:bg-[#002d44] cursor-pointer text-xs">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                Որոնում
              </div>
              <div className="flex items-center px-4 py-2 gap-2 text-xs border-b border-[#002d44]">
                <Link to="#" className="text-[#ff6a6a]">Հայ</Link>
                <span>|</span>
                <Link to="#" className="hover:text-gray-300">Рус</Link>
                <span>|</span>
                <Link to="#" className="hover:text-gray-300">Eng</Link>
              </div>
              <Link to="/login" onClick={() => setIsTopMenuOpen(false)} className="flex items-center px-4 py-3 gap-2 hover:bg-[#002d44]">
                <span>👤</span> Անձնական գրասենյակ
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Ստորին նավիգացիա */}
      <div className="bg-white h-auto lg:h-[80px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-[10%] border-b border-gray-200 py-4 lg:py-0 gap-4 lg:gap-0">
        <Link to="/" className="mr-auto">
          <img src="https://www.telecomarmenia.am/img/fb-share.png?v=2" alt="Team Telecom" className="h-[45px] lg:h-[55px] w-auto object-contain" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center lg:h-full gap-2 lg:gap-0 relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="h-full flex items-center relative"
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                className={`px-3 lg:px-6 text-[14px] h-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                  activeDropdown === index ? "text-[#003853] font-semibold bg-gray-50" : "text-[#444] hover:text-[#003853]"
                }`}
              >
                {item.title}
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === index && (
                <div className="absolute top-full left-0 w-[260px] bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col rounded-b-lg animate-in fade-in slide-in-from-top-2 duration-150">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.to}
                      onClick={() => setActiveDropdown(null)}
                      className="px-4 py-3 text-[14px] text-[#444] hover:bg-gray-50 hover:text-[#003853] border-b border-gray-100 last:border-none transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link to="/payment" className="bg-[#79cdd7] h-[50px] lg:h-full w-[80px] flex items-center justify-center ml-auto rounded-lg lg:rounded-none">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#003853" strokeWidth="1.5"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M3 11h18"/></svg>
        </Link>
      </div>
    </header>
  );
}