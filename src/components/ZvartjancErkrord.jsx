import React from "react";
import { Link } from "react-router-dom";

export default function ZvartjancErkrord() {
  const cards = [
    {
      title: "Koreez",
      description: "Koreez-ում դու կարող ես անցնել քո ամբողջ դպրոցական ծրագիրը խաղի և մրցակցության միջոցով:",
      link: "#",
      isWide: false
    },
    {
      title: "GeForce Games",
      description: "Ակտիվացրեք բաժանորդագրությունը և ստացեք Performance հնարավորություն խաղալու ավելի քան 2000 խաղ GFN.AM կատալոգից:",
      link: "#",
      isWide: false
    },
    {
      title: "MobiBattle խաղային պորտալ",
      description: "MobiBattle մրցաշարային զվարճալի խաղերի հարթակ է: Ոչինչ մի ներբեռնիր հեռախոսի մեջ, պարզապես մուտք...",
      link: "#",
      isWide: false
    },
    {
      title: "Մելոմանիա",
      description: "«Մելոմանիա» ինտերակտիվ երաժշտական-զվարճալի վիկտորինան հասանելի է Team բջջային կապի բաժանորդներին:",
      link: "#",
      isWide: false
    },
    {
      title: "Գրքային պորտալ",
      description: "Ծառայությունը հնարավորություն է տալիս կարդալ և լսել book.telecomarmenia.am պորտալում տեղադրված տարբեր ժանրերի on-line...",
      link: "#",
      isWide: false
    },
    {
      title: "Ծանոթությունների պորտալ",
      description: "Նոր ծանոթություններ, հետաքրքիր զրուցակիցներ և ինտերակտիվ շփումը սպասում են ձեզ միանգամայն նոր...",
      link: "#",
      isWide: false
    },
    {
      title: "Մանկական պորտալ",
      description: "Ծառայությունը ներկայացնում է kids.telecomarmenia.am պորտալը, որտեղ տեղադրված են գրքեր, ֆիլմեր, մուտֆիլմեր, կրթական ծրագրեր...",
      link: "#",
      isWide: false
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-5xl font-black text-[#003853] tracking-tight">
          ԶՎԱՐՃԱՆՔ
        </h2>

        {/* Բաժինների ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Առաջին մեծ բլոկը (SMS Պրեմիում) - Զբաղեցնում է 2 սյունակ */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between p-8 md:p-12 min-h-[380px] group">
            {/* Հետնաբեմի նկարը */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('https://www.telecomarmenia.am/images/service/1/15553135300406.jpeg')` }}
            >
              {/* Մուգ ֆիլտր տեքստի ընթեռնելիության համար */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Վերին հատված (դատարկ կամ լրացուցիչ) */}
            <div className="relative z-10"></div>

            {/* Ստորին հատված՝ տեքստ և կոճակ */}
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                SMS Պրեմիում
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Ուղարկելով կարճ հաղորդագրություն համապատասխան կարճ համարին, դուք կարող եք ստանալ տարբեր բնույթի օգտակար տեղեկություն օգտվել զվարճալի ծառայություններից մասնակցել տարբեր հեռուստաալիքներով, ռադիոալիքներով և ԶԼՄ-ներով անցկացվող մրցույթներին, վիկտորինաներին, խաղարկություններին և քվեարկություններին
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