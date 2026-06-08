import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewsSection() {
  // Բաժանված է 2 սլայդի՝ յուրաքանչյուրում 3 նորություն
  const slides = [
    [
      { date: "14 May", title: "Տելեգրաֆից մինչև 5G. կապի թանգարանը միանում է «Թանգարանների գիշերվան»", img: "https://www.telecomarmenia.am/images/news/1/17787646383268/450x250c-center.png" },
      { date: "13 May", title: "Team-ի աջակցությամբ տավուշցի հարյուրավոր աշակերտներ մասնակցել են «Սիմֆոնիկ ԴասԱ»-ին", img: "https://www.telecomarmenia.am/images/news/1/17786537465042/450x250c-center.png" },
      { date: "22 April", title: "Բնության հանդեպ հոգատար վերաբերմունքը սկսել ենք մեզնից. Team-ն արժանացել է ISO 14001:2015", img: "https://www.telecomarmenia.am/images/news/1/17768593249213/450x250c-center.jpeg" }
    ],
    [
      { date: "17 April", title: "Սովորի՛ր, խաղա՛ և հաղթի՛ր. Team-ն ու Koreez-ը առաջարկում են կրթական նոր հնարավորություն", img: "https://www.telecomarmenia.am/images/news/2/17764283852327/450x250c-center.png" },
      { date: "09 April", title: "Team-ի 2G ցանցը ամբողջ Հայաստանում փոխարինվել է նոր տեխնոլոգիաներով", img: "https://www.telecomarmenia.am/images/news/1/17757164588017/450x250c-center.jpeg" },
      { date: "08 April", title: "MOBILE ID ծառայություն. հարմարավետություն և անվտանգություն", img: "https://www.telecomarmenia.am/images/news/1/17756529131443/450x250c-center.png" }
    ]
  ];

  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-black text-[#002d56] mb-10">Լրահոս</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="pb-16"
      >
        {slides.map((slideNews, sIndex) => (
          <SwiperSlide key={sIndex}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slideNews.map((item, i) => (
                <div key={i} className="flex flex-col h-full">
                  <div className="overflow-hidden rounded-2xl mb-4 h-48">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-gray-400 mb-2 font-medium uppercase">{item.date}</p>
                  <h3 className="text-[17px] font-bold text-[#002d56] leading-tight text-justify">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next, .swiper-button-prev { color: #f36f21 !important; }
        .swiper-pagination-bullet-active { background: #f36f21 !important; }
      `}</style>
    </section>
  );
}