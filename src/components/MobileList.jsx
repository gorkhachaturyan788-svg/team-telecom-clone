import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mobileTariffs = {
  prepaid: {
    "Be Free Unlimit": [
      { id: 1, internet: "♾️ ԳԲ", minutes: "300 րոպե", channels: "30 ալիք", price: "3,500", path: "/mobile-tariffs/prepaid-befree-3500" },
      { id: 2, internet: "♾️ ԳԲ", minutes: "3,000 րոպե", channels: "60 ալիք", price: "5,000", path: "/mobile-tariffs/prepaid-befree-5000" },
      { id: 3, internet: "♾️ ԳԲ", minutes: "5,000 րոպե", channels: "110 ալիք", price: "8,000", path: "/mobile-tariffs/prepaid-befree-8000" },
    ]
  },
  postpaid: {
    "Be Free Unlimit": [
      { id: 4, internet: "♾️ ԳԲ", minutes: "300 րոպե", channels: "30 ալիք", price: "3,500", path: "/mobile-tariffs/befree-3500" },
      { id: 5, internet: "♾️ ԳԲ", minutes: "3,000 րոպե", channels: "60 ալիք", price: "5,000", path: "/mobile-tariffs/befree-5000" },
      { id: 6, internet: "♾️ ԳԲ", minutes: "5,000 րոպե", channels: "110 ալիք", price: "8,000", path: "/mobile-tariffs/befree-8000" },
    ]
  }
};

export default function MobileList() {
  const [paymentType, setPaymentType] = useState('postpaid');
  const selectedCategory = 'Be Free Unlimit';

  const categories = Object.keys(mobileTariffs[paymentType] || {});
  const currentCards = mobileTariffs[paymentType][selectedCategory] || [];

  return (
    <div className="w-full font-sans bg-[#f7f5f0] min-h-screen pb-16">
      
  
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-center gap-12 text-base font-semibold">
          <button 
            onClick={() => setPaymentType('prepaid')} 
            className={`pb-1 transition-colors relative ${paymentType === 'prepaid' ? 'text-[#003853] border-b-2 border-[#4bc0c8]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Կանխավճարային
          </button>
          <button 
            onClick={() => setPaymentType('postpaid')} 
            className={`pb-1 transition-colors relative ${paymentType === 'postpaid' ? 'text-[#003853] border-b-2 border-[#4bc0c8]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Հետվճարային
          </button>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
   
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm p-4 h-fit border border-gray-100">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider px-4 mb-3">
            Ընտրիր քո փաթեթը
          </h3>
          <div className="flex flex-col gap-1">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-sm font-semibold bg-[#e0f3f5] text-[#003853]"
              >
                <span>{cat}</span>
                <span className="text-xs">▶</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003853]">
              {selectedCategory}
            </h1>
            <span className="text-gray-400 text-xl">▲</span>
          </div>

          <p className="text-gray-600 text-sm -mt-4">
            {selectedCategory}
          </p>

          <div className="flex flex-col gap-4">
            {currentCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 grid grid-cols-1 md:grid-cols-5 gap-6 items-center transition-transform hover:-translate-y-1"
              >

                <div className="flex items-center gap-2 text-[#003853] font-bold text-lg">
                  <span className="text-xl font-black">{card.internet}</span>
                </div>


                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#003853]">
                    {card.minutes}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#003853]">
                    {card.channels}
                  </div>
                </div>


                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#003853]">
                    {card.price} <span className="text-xs font-normal text-gray-500">դր. / ամիս.</span>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <Link 
                    to={card.path} 
                    className="inline-block px-6 py-2.5 rounded-full border-2 border-[#ff4d4f] text-[#ff4d4f] font-bold text-sm hover:bg-[#ff4d4f] hover:text-white transition-colors text-center whitespace-nowrap"
                  >
                    Մանրամասն
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