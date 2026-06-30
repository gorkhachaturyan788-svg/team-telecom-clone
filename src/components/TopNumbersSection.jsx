import NumberCard from "./NumberCard";

const numbers = [
  {
    id: 1,
    badge: "TOP",
    number: "033 13 00 90",
    price: "50,000",
  },
  {
    id: 2,
    badge: "TOP",
    number: "033 45 07 00",
    price: "50,000",
  },
  {
    id: 3,
    badge: "ՈՍԿԻ",
    number: "096 44 03 33",
    price: "48,000",
    oldPrice: "60,000",
  },
];

export default function TopNumbersSection() {
  return (
    <section className="max-w-7xl mx-auto py-16">

      <h2 className="text-3xl font-bold mb-8">
        Top Համարներ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {numbers.map((item) => (
          <NumberCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}