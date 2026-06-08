import { shopProducts } from "../data";

export default function ShopPreview() {
  return (
    <section className="py-16 bg-gray-50 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-blue-950 mb-2">E-Shop Օնլայն Խանութ</h2>
            <p className="text-gray-500">Լավագույն սմարթֆոնները պաշտոնական երաշխիքով և ապառիկի լավ պայմաններով։</p>
          </div>
          <button className="hidden md:block text-orange-500 font-bold hover:underline">Տեսնել ամբողջը →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
              {product.sale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">ԶԵՂՉ</span>
              )}
              <div className="bg-gray-100 h-48 rounded-xl flex items-center justify-center text-6xl mb-4 select-none">
                {product.image}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-black text-blue-950">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
              <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 rounded-lg transition duration-200">
                Գնել
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}