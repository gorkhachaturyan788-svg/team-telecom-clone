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
      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-4 overflow-x-auto">

        {categories.map((item) => (
          <button
            key={item}
            className="whitespace-nowrap text-gray-700 hover:text-blue-700"
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
}