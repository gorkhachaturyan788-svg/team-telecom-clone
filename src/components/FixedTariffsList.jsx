import React from "react";
import { Link } from "react-router-dom";

export default function FixedTelephony() {
  const tariffs = [
    {
      title: "Նախընտրելի",
      description: "Ֆիքսված հեռախոսակապ տան համար",
      path: "/tariffs/fixed/preferred",
    },
    {
      title: "Բազային 1",
      description: "Ֆիքսված հեռախոսակապ տան համար",
      path: "/tariffs/fixed/basic-1",
    },
    {
      title: "Բազային 2",
      description: "Ֆիքսված հեռախոսակապ տան համար",
      path: "/tariffs/fixed/basic-2",
    },
    {
      title: "Այլընտրանքային 1",
      description: "Ֆիքսված հեռախոսակապ տան համար",
      path: "/tariffs/fixed/alternative-1",
    },
    {
      title: "Այլընտրանքային 2",
      description: "Ֆիքսված հեռախոսակապ տան համար",
      path: "/tariffs/fixed/alternative-2",
    },
    {
      title: "Քարտֆոնային կապ",
      description: "Հեռախոսային քարտեր քարտֆոնների",
      path: "/tariffs/fixed/cardphone",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-[#003853] mb-8">
        Ֆիքսված հեռախոսակապ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tariffs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <h3 className="text-lg font-bold text-[#003853] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              <Link
                to={item.path}
                className="inline-block px-6 py-2.5 rounded-full border border-[#ff4d4f] text-[#ff4d4f] text-sm font-semibold transition-all duration-300 hover:bg-[#ff4d4f] hover:text-white text-center w-full sm:w-auto"
              >
                Մանրամասն
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}