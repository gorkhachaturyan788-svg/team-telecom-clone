import React from "react";
import { Link } from "react-router-dom";

export default function Car2() {
  const russiaGeorgiaPackages = [
    {
      title: "Ռոումինգ փաթեթ 1ԳԲ",
      description: "Ինտերնետ փաթեթ Ռուսաստանում, Վրաստանում գտնվող բաժանորդների համար։",
      link: "/services"
    }
  ];

  const worldPackages = [
    {
      title: "Ռոումինգ փաթեթ 1 ԳԲ +",
      description: "Հարմար է 2-5 օր տևողությամբ ճանապարհորդությունների համար։ Թույլ է տալիս շփվել սոցիալական հավելվածներով, օգտվել Google...",
      link: "/services"
    },
    {
      title: "Ռոումինգ փաթեթ 4 ԳԲ",
      description: "Հարմար է 5-10 օր տևողությամբ ճանապարհորդությունների համար։ Թույլ է տալիս ակտիվ օգտվել սոցիալական հարթակներից...",
      link: "/services"
    },
    {
      title: "Ռոումինգ փաթեթ 10 ԳԲ",
      description: "Թույլ է տալիս ակտիվ օգտագործել բոլոր սոցիալական ցանցերը, դիտել տեսանյութեր, կատարել երկար տեսազանգեր, ազատ օգտվել...",
      link: "/services"
    },
    {
      title: "Ռոումինգ փաթեթ 20 ԳԲ",
      description: "Գերազանց ընտրություն նրանց համար, ովքեր ցանկանում են մշտապես կապի մեջ լինել՝ առանց տվյալների սպառման մասին մտածելու։",
      link: "/services"
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] py-16 md:py-20 font-sans text-[#003853]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14">
        
        {/* Բաժին 1: Ռոումինգ Ռուսաստանում, Վրաստանում */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003853] tracking-tight">
            ՌՈՈՄԻՆԳ ՌՈՒՍԱՍՏԱՆՈՒՄ, ՎՐԱՍՏԱՆՈՒՄ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {russiaGeorgiaPackages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003853] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={item.link}
                    className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
                  >
                    Ավելին
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Բաժին 2: Ինտերնետ ռոումինգում 100 երկրում */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003853] tracking-tight">
            ԻՆՏԵՐՆԵՏ ՌՈՈՄԻՆԳՈՒՄ 100 ԵՐԿՐՈՒՄ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worldPackages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-[280px] transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003853] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={item.link}
                    className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
                  >
                    Ավելին
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}