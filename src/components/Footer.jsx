export default function Footer() {
  return (
    <footer className="bg-[#0d1b33] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Հիմնական տեղեկություն */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Team Telecom Armenia</h3>
          <p className="text-gray-400 text-sm">
            Մեր կապը՝ ավելի մոտ, ավելի արագ և հուսալի։
          </p>
        </div>

        {/* Կապ */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Կապ մեզ հետ</h3>
          <p className="text-gray-400 text-sm">Հեռախոս՝ 011 20 00 00</p>
          <p className="text-gray-400 text-sm">Էլ. փոստ՝ support@telecomarmenia.am</p>
        </div>

        {/* Հղումներ */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Օգտակար հղումներ</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white">Մեր մասին</a></li>
            <li><a href="#" className="hover:text-white">Գաղտնիության քաղաքականություն</a></li>
            <li><a href="#" className="hover:text-white">Կարիերա</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Team Telecom Armenia. Բոլոր իրավունքները պաշտպանված են։
      </div>
    </footer>
  );
}