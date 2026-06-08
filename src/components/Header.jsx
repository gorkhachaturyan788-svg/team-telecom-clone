export default function Header() {
  return (
    <header className="w-full font-sans">
      {/* Վերևի բարակ տողը */}
      <div className="bg-[#111111] text-gray-300 text-xs py-2 px-4 md:px-12 flex justify-between items-center border-b border-gray-800">
        <div className="flex gap-6 font-medium">
          <a href="#" className="text-white border-b border-red-600 pb-1">Անհատներին</a>
          <a href="#" className="hover:text-white transition">Բիզնես</a>
          <a href="#" className="hover:text-white transition flex items-center gap-1">
            <span className="text-red-500">🛒</span> E-shop
          </a>
        </div>
        <div className="flex gap-4 text-[11px] text-gray-400">
          <span className="cursor-pointer hover:text-white">Հայ</span>
          <span className="cursor-pointer hover:text-white">Рус</span>
          <span className="cursor-pointer hover:text-white">Eng</span>
        </div>
      </div>

      {/* Գլխավոր Մուգ Մենյուն՝ քո գտած սպիտակ լոգոյի համար */}
      <div className="bg-[#1a1a1a] text-white px-4 md:px-12 py-4 flex justify-between items-center shadow-md">
        {/* Քո տված ճիշտ լոգոն */}
        <div className="flex items-center">
          <img 
            src="https://www.telecomarmenia.am/img/logo-light.svg?v=1" 
            alt="Team Telecom Armenia" 
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Մենյուի բաժինները */}
        <nav className="hidden lg:flex gap-6 font-medium text-sm text-gray-200">
          <a href="#" className="hover:text-red-500 transition">Սակագներ</a>
          <a href="#" className="hover:text-red-500 transition">Ինտերնետ</a>
          <a href="#" className="hover:text-red-500 transition">Ծառայություններ</a>
          <a href="#" className="hover:text-red-500 transition">Ռոումինգ</a>
          <a href="#" className="hover:text-red-500 transition">Առաջարկներ</a>
          <a href="#" className="hover:text-red-500 transition">Օգնություն</a>
        </nav>

        {/* Աջ կողմի կապույտ կոճակը */}
        <div className="flex items-center gap-4">
          <button className="bg-[#004B87] hover:bg-[#003560] text-white p-2.5 rounded transition flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}