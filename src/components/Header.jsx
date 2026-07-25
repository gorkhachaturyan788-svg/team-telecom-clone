import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full font-sans">
      <div className="bg-[#003853] text-white text-[13px] h-[36px] flex items-center justify-between px-[10%]">
        <div className="flex h-full">
          <Link to="/" className="flex items-center px-4 hover:bg-[#002d44]">Անհատներին</Link>
          <Link to="/business" className="flex items-center px-4 bg-[#002d44] h-full">Բիզնես</Link>
          <Link to="/eshop" className="flex items-center px-4 hover:bg-[#002d44] gap-2">
            <span>🛒</span> E-shop
          </Link>
        </div>

        <div className="flex items-center h-full">
          <div className="px-3 cursor-pointer hover:text-gray-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 text-[#ff6a6a]">Հայ</Link>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 hover:text-gray-300">Рус</Link>
          <span className="text-[#005a75]">|</span>
          <Link to="#" className="px-3 hover:text-gray-300">Eng</Link>
          <span classname ="text-[#005a75] px-3">|</span>
          <Link to="/login" className="flex items-center pr-4 gap-2 hover:text-gray-300">
            <span>👤</span> Անձնական գրասենյակ 
          </Link>
        </div>
      </div>

      <div className="bg-white h-[80px] flex items-center justify-between px-[10%] border-b border-gray-200">
        <Link to="/" className="mr-auto">
          <img src="https://www.telecomarmenia.am/img/fb-share.png?v=2" alt="Team Telecom" className="h-[55px] w-auto" />
        </Link>

      <nav className="flex items-center h-full">
          <Link to="/tariffs" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Սակագներ</Link>
          <Link to="/internet" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Ինտերնետ</Link>
          <Link to="/services" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Ծառայություններ</Link>
          <Link to="/roaming" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Ռոումինգ և Միջազգային կապ</Link>
          <Link to="/business-solutions" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Բիզնես լուծումներ</Link>
          <Link to="/support" className="px-6 text-[#444] text-[14px] hover:text-[#003853]">Օգնություն</Link>
        </nav>

        <Link to="/payment" className="bg-[#79cdd7] h-full w-[80px] flex items-center justify-center ml-auto">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#003853" strokeWidth="1.5"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M3 11h18"/></svg>
        </Link>
      </div>
    </header>
  );
}