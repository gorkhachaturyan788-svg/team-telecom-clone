export default function NumberCard({ number, price, badge, oldPrice }) {
  return (
    <div className="border border-gray-200 bg-white">

      <div className="h-40 bg-gradient-to-r from-[#040b3f] to-[#081b73] flex items-center justify-center">
        <span className="text-white text-5xl font-bold">
          {badge}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-4xl font-bold tracking-wide">
          {number}
        </h3>

        <div className="mt-6">
          {oldPrice && (
            <p className="text-gray-400 line-through text-sm">
              {oldPrice} ֏
            </p>
          )}

          <p className="text-3xl font-bold">
            {price} ֏
          </p>
        </div>

        <button className="mt-6 w-full border border-pink-300 text-pink-400 py-3 rounded-full hover:bg-pink-50 transition">
          Ավելացնել զամբյուղ
        </button>

      </div>
    </div>
  );
}