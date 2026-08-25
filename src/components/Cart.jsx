import { useCartStore } from "./useCartStore"; // Ճանապարհը ուղղիր ըստ քո ֆայլի տեղի
import ProductCard from "./ProductCard"; // Քո քարտի կոդը

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-black mb-8 text-[#002d56]">Ձեր Զամբյուղը</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Ձեր զամբյուղը դատարկ է</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}