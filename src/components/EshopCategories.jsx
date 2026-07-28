export default function EshopCategories() {
  const categories = [
    "Սմարթֆոններ",
    "Նոթբուքեր",
    "Սարքեր",
    "Աքսեսուարներ",
    "Top Նոթբուք",
    "Ակցիա",
  ];

  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto flex gap-6 md:gap-8 px-4 md:px-6 py-4 overflow-x-auto scrollbar-none">
        {categories.map((item) => (
          <button
            key={item}
            className="whitespace-nowrap text-sm md:text-base text-gray-700 hover:text-blue-700 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}