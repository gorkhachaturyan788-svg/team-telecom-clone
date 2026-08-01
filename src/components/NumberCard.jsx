export default function NumberCard({ number, price, badge, oldPrice }) {
  return (
    <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">

      <div className="h-40 bg-gradient-to-r from-[#040b3f] to-[#081b73] flex items-center justify-center relative">
        <span className="text-white text-4xl sm:text-5xl font-black tracking-wider">
          {badge}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-3xl sm:text-4xl font-black tracking-wide text-[#003853]">
          {number}
        </h3>

        <div className="mt-6">
          {oldPrice && (
            <p className="text-gray-400 line-through text-sm font-medium">
              {oldPrice} ֏
            </p>
          )}

          <p className="text-2xl sm:text-3xl font-black text-[#003853]">
            {price} <span className="text-sm font-normal text-gray-500">֏</span>
          </p>
        </div>

        <button className="mt-6 w-full border-2 border-[#ff4d4f] text-[#ff4d4f] py-3 rounded-full font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors">
          Ավելացնել զամբյուղ
        </button>

      </div>
    </div>
  );
}