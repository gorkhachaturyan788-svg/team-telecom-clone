import React from "react";
import { Link } from "react-router-dom";

export default function FixedPhoneErkrord() {
  const cards = [
    {
      title: "Զանգի վերահասցեավորում",
      description: "Դուք կարող եք վերահասցեավորել մուտքային զանգերն այն...",
      link: "#"
    },
    {
      title: "Կրճատ համարահավաքում",
      description: "Թվային կայանը հնարավորություն է տալիս ձեզ, հավաքելով ընդամենը 2...",
      link: "#"
    },
    {
      title: "Եռակողմ կապի ծառայություն",
      description: "Դուք կարող եք խոսակցություն վարել միաժամանակ երեք անձի միջև...",
      link: "#"
    },
    {
      title: "Ելքային զանգերի արգելափակում",
      description: "Ծառայությունը թույլ է տալիս արգելափակել բոլոր ելքային զանգերը...",
      link: "#"
    },
    {
      title: "Զարթուցիչ",
      description: "Նշված ժամին հնչում է զանգ, և լափողը բարձրացնելիս երաժշտություն է...",
      link: "#"
    },
    {
      title: "Չանհանգստացնել",
      description: "Ծառայության միջոցով արգելափակվում են մուտքային...",
      link: "#"
    },
    {
      title: "Զանգող համարի ներկայացում",
      description: "«Զանգող համարի ներկայացման» ծառայության շնորհիվ դուք կարող եք...",
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black text-[#003853] tracking-tight">
          ՖԻՔՍՎԱԾ ԿԱՊ
        </h2>

        {/* Բաժինների ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Առաջին մեծ բլոկը - Զբաղեցնում է 2 սյունակ */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between p-8 md:p-12 min-h-[380px] group">
            {/* Հետնաբեմի նկարը */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('https://www.telecomarmenia.am/images/service/1/15553135300406.jpeg')` }}
            >
              {/* Մուգ ֆիլտր տեքստի ընթեռնելիության համար */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Վերին հատված */}
            <div className="relative z-10"></div>

            {/* Ստորին հատված՝ տեքստ և կոճակ */}
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                Զանգի սպասում
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Ծառայությունը թույլ է տալիս բաժանորդին ընդունել մեկ այլ զանգ հեռախոսային խոսակցության ընթացքում: Եթե հեռախոսային խոսակցության ընթացքում բաժանորդին զանգահարի ևս մեկ զրուցակից, կհնչի բնորոշ տոնային ազդանշան: Զանգի սպասումը լինում է երեք տեսակի՝ շարունակել խոսակցությունը՝ չընդունելով նոր զանգը, երկրորդ զանգի ընդունում՝ ընդհատելով ընթացիկ խոսակցությունը, խոսակցությունը վարել երկու զանգահարողների հետ հաջորդաբար:
              </p>
              <div className="pt-4">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#ff4d4f] font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors shadow-lg"
                >
                  Ավելին
                </Link>
              </div>
            </div>
          </div>

          {/* Մյուս փոքր քարտերը */}
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#003853]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-[#ff4d4f] text-[#ff4d4f] font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors"
                >
                  Ավելին
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}