import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-sans">
      <div className="bg-blue-900 text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4 text-white">
          <Link to="/" className="font-bold cursor-pointer">
            Անհատական
          </Link>

          <span className="cursor-pointer">Բիզնես</span>

          <Link to="/eshop" className="cursor-pointer">
            🛒 E-shop
          </Link>
        </div>

        <div className="flex items-center gap-3 text-white text-[11px]">
          <span className="cursor-pointer">Հայ</span>
          <span className="cursor-pointer">Рус</span>
          <span className="cursor-pointer">Eng</span>

          <span className="text-gray-300">|</span>

          <Link
            to="/login"
            className="font-semibold hover:text-red-400 transition"
          >
            Անձնական գրասենյակ
          </Link>
        </div>
      </div>

      <div className="bg-white text-black px-4 md:px-12 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://www.telecomarmenia.am/img/logo-light.svg?v=1"
            alt="Team Telecom Armenia"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:flex gap-6 font-medium text-sm text-gray-700">
          <a href="#" className="hover:text-red-500 transition">
            Սակագներ
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Ինտերնետ
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Ծառայություններ
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Ռոումինգ
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Առաջարկներ
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Օգնություն
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#004B87] hover:bg-[#003560] text-white p-2.5 rounded transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-inner">
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Սակագներ
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Ինտերնետ
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Ծառայություններ
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Ռոումինգ
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Առաջարկներ
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">
            Օգնություն
          </a>

          <Link
            to="/login"
            className="bg-red-500 text-white w-full py-2.5 rounded-xl font-medium mt-2 text-center"
          >
            Անձնական գրասենյակ
          </Link>
        </div>
      )}
    </header>
  );
}