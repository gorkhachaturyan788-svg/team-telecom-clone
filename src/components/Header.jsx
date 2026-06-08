import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="bg-gray-100 text-xs text-gray-600 py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="font-bold text-orange-500 cursor-pointer">Անհատական</span>
          <span className="hover:text-orange-500 cursor-pointer">Բիզնես</span>
          <span className="hover:text-orange-500 cursor-pointer">Մեր մասին</span>
        </div>
        <div className="cursor-pointer hover:text-orange-500">Հայերեն</div>
      </div>

      <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-orange-500 tracking-wider cursor-pointer">
          TEAM <span className="text-blue-900">TELECOM</span>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-orange-500 transition">Ինտերնետ</a>
          <a href="#" className="hover:text-orange-500 transition">Կապ</a>
          <a href="#" className="hover:text-orange-500 transition">Հեռուստատեսություն</a>
          <a href="#" className="hover:text-orange-500 transition">Խանութ</a>
        </nav>

        <div className="hidden md:block">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition shadow-sm">
            Մուտք
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-inner">
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Ինտերնետ</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Կապ</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Հեռուստատեսություն</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 py-2">Խանութ</a>
          <button className="bg-orange-500 text-white w-full py-2.5 rounded-xl font-medium mt-2">
            Մուտք
          </button>
        </div>
      )}
    </header>
  );
}