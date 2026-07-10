export default function BusinessPlans() {
  const plans = [
    { 
      name: "PRO 3700", 
      gb: "40 ԳԲ", 
      min: "1,500 րոպե", 
      tv: "60 ալիք", 
      sms: "1,500 SMS",
      apps: [
        "https://www.telecomarmenia.am/images/product_apps/1/1616485758842.png",
        "https://www.telecomarmenia.am/images/product_apps/1/16164857950698.png",
        "https://www.telecomarmenia.am/images/product_apps/1/17664907901799.png",
        "https://www.telecomarmenia.am/images/product_apps/1/17664908980252.png"
      ]
    },
    { name: "PRO 5200", gb: "Անսահիմ. ԳԲ", min: "3,500 րոպե", tv: "110 ալիք", sms: "3,500 SMS" },
    { name: "PRO 8200", gb: "Անսահիմ. ԳԲ", min: "6,000 րոպե", tv: "110 ալիք", sms: "6,000 SMS" },
  ];

  return (
    <section className="py-20 px-[10%] bg-gray-50">
      <h2 className="text-4xl font-bold text-[#003853] mb-16">Բջջային կապի սակագներ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* SMART BUSINESS քարտ */}
        <div className="bg-[#3b4a54] p-10 text-white rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-300">
          <div>
            <h3 className="text-3xl font-bold mb-3">SMART</h3>
            <h3 className="text-3xl font-bold mb-8">BUSINESS</h3>
            <p className="text-lg">Կարգավորեք Ձեր փաթեթը</p>
          </div>
          <button className="bg-red-500 py-4 px-8 rounded-lg w-full font-bold hover:bg-red-600 transition">Միանալ</button>
        </div>

        {/* PRO պլաններ */}
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 p-10 rounded-xl text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-200 flex flex-col"
          >
            <h3 className="text-3xl font-bold text-[#003853] mb-10">{plan.name}</h3>
            
            <div className="space-y-6 text-left text-gray-700 text-lg font-medium mb-10 flex-grow">
              <p className="flex items-center gap-4"><img src="https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png" className="w-8 h-8" alt="gb" /> {plan.gb}</p>
              <p className="flex items-center gap-4"><img src="https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png" className="w-8 h-8" alt="min" /> {plan.min}</p>
              <p className="flex items-center gap-4"><img src="https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png" className="w-8 h-8" alt="tv" /> {plan.tv}</p>
              <p className="flex items-center gap-4"><img src="https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png" className="w-8 h-8" alt="sms" /> {plan.sms}</p>
            </div>
            
            {plan.apps && (
              <div className="flex justify-center gap-3 mb-10">
                {plan.apps.map((app, i) => (
                  <img key={i} src={app} alt="app" className="w-8 h-8 object-contain" />
                ))}
                <span className="text-gray-500 font-bold self-center">+6</span>
              </div>
            )}

            <button className="mt-auto border-2 border-red-500 text-red-500 py-3 px-10 rounded-full font-bold hover:bg-red-500 hover:text-white transition">
              Մանրամասն
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}