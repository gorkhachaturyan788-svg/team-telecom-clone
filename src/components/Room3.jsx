import React from "react";

export default function Room3() {
  const features = [
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16511298499299.png",
      title: "Զանգեր",
      subtitle: "Սկսած 29,99 դր/րոպե"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/16511332255945.png",
      title: "Ինտերնետ",
      subtitle: "Սկսած 0.5 դր/ՄԲ"
    },
    {
      icon: "https://www.telecomarmenia.am/images/block_with_icons_icons/1/17830723331028.png",
      title: "SMS",
      subtitle: "Սկսած 25 դր"
    }
  ];

  return (
    <div className="w-full bg-[#003853] py-20 md:py-28 font-sans text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-16">
        
        {/* Գլխավոր վերնագիր */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Ավելի քան 140 երկրում
        </h2>

        {/* Քարտերի ցանց */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
            
              <div className="h-16 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="max-h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {item.title}
              </h3>

              <p className="text-white/80 text-base sm:text-lg font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}