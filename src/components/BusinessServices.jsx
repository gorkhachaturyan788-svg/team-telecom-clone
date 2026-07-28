const services = [
  { 
    title: "ԿՈՐՊՈՐԱՏԻՎ ՑԱՆՑԵՐ", 
    desc: "Տեղեկատվության փոխանակման ապահով համակարգ" 
  },
  { 
    title: "MOBILE ID", 
    desc: "Վճարումներ և նույնականացում բջջային հեռախոսի միջոցով" 
  },
  { 
    title: "M2M ԼՈՒԾՈՒՄՆԵՐ", 
    desc: "Տվյալների հուսալի փոխանցում" 
  },
  { 
    title: "SMS-ԻՆՖՈ", 
    desc: "Զանգվածային SMS տարածման ծառայություն" 
  },
];

export default function BusinessServices() {
  return (
    <section className="py-20 px-[5%] max-[550px]:px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#003853] to-[#014f75] p-10 max-[550px]:p-8 md:h-64 rounded-3xl text-white flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-xl"
          >
            <div>
              <h3 className="text-3xl max-[550px]:text-2xl font-bold mb-6 uppercase">{item.title}</h3>
              <p className="text-lg max-[550px]:text-base text-gray-200 leading-relaxed md:max-w-[80%]">
                {item.desc}
              </p>
            </div>
            
            <div className="flex items-center mt-8 md:mt-4">
              <a href="#" className="text-red-400 font-bold text-lg max-[550px]:text-base hover:text-red-300 transition flex items-center gap-2">
                Մանրամասն <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}