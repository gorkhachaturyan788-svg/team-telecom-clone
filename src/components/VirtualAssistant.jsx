const items = [
  { 
    title: "Զանգերի բաշխում. ոչ մի բաց թողնված զանգ", 
    icon: "https://www.telecomarmenia.am/img/virtual-icon-1.png" 
  },
  { 
    title: "Հեռախոսազանգերի ձայնագրություն և զանգերի վիճակագրություն", 
    icon: "https://www.telecomarmenia.am/img/virtual-icon-2.png" 
  },
  { 
    title: "Ձայնային օգնական հաճախորդների համար", 
    icon: "https://www.telecomarmenia.am/img/virtual-icon-3.png" 
  },
];

export default function VirtualAssistant() {
  return (
    <section className="bg-[#00263a] py-20 px-6 sm:px-10 md:px-[10%] text-center text-white overflow-hidden">
      <h2 className="text-4xl font-bold mb-16">ՎԻՐՏՈՒԱԼ ԱՀԿ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 hover:border-white transition-all">
              <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
            </div>
            <p className="text-lg font-medium max-w-[250px]">{item.title}</p>
          </div>
        ))}
      </div>

      <button className="bg-white text-[#00263a] font-bold py-4 px-16 rounded-full hover:bg-gray-100 transition duration-300">
        Մանրամասն
      </button>
    </section>
  );
}