import React from "react";

export default function Room2() {
  const roamingPackages = [
    { title: "Ռոումինգ փաթեթ", data: "1 ԳԲ +", price: "2000 դրամ" },
    { title: "Ռոումինգ փաթեթ", data: "4 ԳԲ", price: "5000 դրամ" },
    { title: "Ռոումինգ փաթեթ", data: "10 ԳԲ", price: "12000 դրամ" },
    { title: "Ռոումինգ փաթեթ", data: "20 ԳԲ", price: "20000 դրամ" },
    { title: "Ռոումինգ փաթեթ 1 ԳԲ", subtitle: "(Ռուսաստան, Վրաստան)", price: "500 մ դրամ / 500 դրամ" } // կարգավորված է ըստ նկարի
  ];

  return (
    <div className="w-full bg-[#003853] py-20 md:py-28 font-sans text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-16">
        
        {/* Գլխավոր վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Ինտերնետ ռոումինգում
        </h2>

        {/* Փաթեթների ցանց */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          
          {/* Առաջին 3 քարտերը վերևի շարքում */}
          {roamingPackages.slice(0, 3).map((pkg, index) => (
            <div key={index} className="flex flex-col items-center p-6 space-y-3 relative group">
              <span className="text-white/90 text-lg sm:text-xl font-medium">
                {pkg.title}
              </span>
              <span className="text-2xl sm:text-3xl font-bold">
                {pkg.data}
              </span>
              <span className="text-white/90 text-lg sm:text-xl font-medium">
                {pkg.price}
              </span>
              {/* Ստորին սպիտակ գիծ */}
              <div className="w-48 h-[2px] bg-white/40 mt-4 group-hover:bg-white transition-colors"></div>
            </div>
          ))}

        </div>

        {/* Ստորին շարք (2 քարտ՝ կենտրոնացված) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
          
          {roamingPackages.slice(3, 5).map((pkg, index) => (
            <div key={index} className="flex flex-col items-center p-6 space-y-3 relative group">
              <span className="text-white/90 text-lg sm:text-xl font-medium text-center">
                {pkg.title}
              </span>
              {pkg.subtitle && (
                <span className="text-white/80 text-sm sm:text-base text-center">
                  {pkg.subtitle}
                </span>
              )}
              {pkg.data && (
                <span className="text-2xl sm:text-3xl font-bold">
                  {pkg.data}
                </span>
              )}
              <span className="text-white/90 text-lg sm:text-xl font-medium">
                {pkg.price.includes("դրամ") ? (pkg.price.includes("/") ? "500 դրամ" : pkg.price) : pkg.price}
              </span>
              {/* Ստորին սպիտակ գիծ */}
              <div className="w-48 h-[2px] bg-white/40 mt-4 group-hover:bg-white transition-colors"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}