import { useState } from "react";
import { Link } from "react-router-dom";

function NavLink({ children, to = "#" }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={to}
      style={{ color: hov ? "#ffffff" : "#8ec8de" }}
      className="no-underline text-[13px] leading-[1.6] block mb-[9px] transition-colors duration-200"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Link>
  );
}

const ColHeading = ({ children }) => (
  <h4 className="text-white font-bold text-[14.5px] mb-[16px] mt-[10px]">
    {children}
  </h4>
);

export default function TeamFooter() {
  return (
    <footer className="bg-[#0b4f70] text-white font-['Segoe_UI',Arial,sans-serif] pt-[50px] pb-[25px]">
      <div className="max-w-[1240px] mx-auto px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] items-start">
        
        <div>
          <div className="mb-[24px]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Team_Telecom_Armenia.png" 
              alt="Team Telecom Armenia" 
              className="w-[160px] mb-[10px] brightness-0 invert" 
            />
          </div>

          <div className="flex gap-[16px] mb-[24px]">
            <a href="#" className="text-[#cce8f5] hover:text-white transition-colors">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-[#cce8f5] hover:text-white transition-colors">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-[#cce8f5] hover:text-white transition-colors">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>

          <div className="mb-[26px]">
            <div className="flex items-center gap-[9px] mb-[10px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cce8f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-[15px] font-semibold">100</span>
            </div>
            <div className="flex items-center gap-[9px] text-[#8ec8de]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="text-[12px]">info@telecomarmenia.am</span>
            </div>
          </div>

          <div className="flex items-center gap-[15px] mb-[26px]">
            <div className="bg-white p-[6px] rounded-[6px] w-[90px] h-[90px] flex items-center justify-center shrink-0">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.telecomarmenia.am" alt="QR Code" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <a href="#" className="block w-[130px]">
                <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className="w-full" />
              </a>
              <a href="#" className="block w-[130px]">
                <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" className="w-full" />
              </a>
            </div>
          </div>

          <div className="flex gap-[10px]">
            <img src="https://www.telecomarmenia.am/img/redesign/iso_1.png" alt="ISO 1" className="w-[56px] h-[56px]" />
            <img src="https://www.telecomarmenia.am/img/redesign/iso_2.png" alt="ISO 2" className="w-[56px] h-[56px]" />
          </div>
        </div>

        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8ec8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="16"/><line x1="15" y1="22" x2="15" y2="16"/><line x1="9" y1="16" x2="15" y2="16"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/></svg>
          <ColHeading>Ընկերության մասին</ColHeading>
          <NavLink to="/about">Մեր մասին</NavLink>
          <NavLink to="/museum">Կապի թանգարան</NavLink>
          <NavLink to="/news">Նորություններ</NavLink>
          <NavLink to="/jobs">Աշխատանք Ստելեկոմ Արմենիայում</NavLink>
          <NavLink to="/reports">Արդյունքներ և հաշվետվություններ</NavLink>
          <NavLink to="/ethics">Գործարար էթիկա և կոմպլայենս</NavLink>
          <NavLink to="/sustainable">Կայուն զարգացում</NavLink>
          {/* Ուղղվել է փոքրատառով */}
          <NavLink to="/shareholders">Բաժնետերերին</NavLink>
        </div>

        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8ec8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <ColHeading>Տեղեկատվություն</ColHeading>
          <NavLink to="/terms">Ընդհանուր դրույթներ և պայմաններ</NavLink>
          <NavLink to="/safety">Անվտանգություն</NavLink>
          <NavLink to="/eshop-terms">E-shop պայմաններ</NavLink>
          <NavLink to="/apalik-paymanner">Ապառիկ վաճառքի պայմաններ</NavLink>
          <NavLink to="/delivery-terms">Առաքման պայմաններ</NavLink>
          <NavLink to="/coverage">Ծածկույթ</NavLink>
          <NavLink to="/coverage-map">Team ինտերնետի հասանելիության ծածկույթ</NavLink>
          <NavLink to="/useful-documents">Օգտակար փաստաթղթեր</NavLink>
          <NavLink to="/partners">Գործընկերներին և մատակարարներին</NavLink>
          <NavLink to="/privacy">Գաղտնիության քաղաքականություն</NavLink>
        </div>

        <div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8ec8de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <ColHeading>Team հավելվածներ</ColHeading>
          <NavLink to="/teamtv">TeamTV</NavLink>
          <NavLink to="/my-team">My Team</NavLink>
          <NavLink to="/teampay">TeamPay</NavLink>
          <NavLink to="/team-energy">Team Energy</NavLink>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto px-[5%] mt-[40px] pt-[20px] border-t border-[#196488] text-center text-[#8ec8de] text-[12px]">
        © 2026 Ստելեկոմ Արմենիա ՓԲԸ։ Բոլոր իրավունքները պաշտպանված են։ Մշակվել է Թիմ Սոոլյուշնս ՓԲԸ կողմից։
      </div>
    </footer>
  );
}