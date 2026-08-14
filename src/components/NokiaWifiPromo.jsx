export default function NokiaWifiPromo() {
  return (
    <section className="w-full bg-[#f4f6f8] text-[#003853] py-16 lg:py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Ձախ կողմ. Տեքստը */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] text-[#003853] tracking-tight">
            Nokia Wi-Fi 6 <br />
            ուժեղացուցիչ
          </h2>

          <p className="text-[#003853] text-sm lg:text-base leading-relaxed font-normal opacity-90 max-w-[480px]">
            «Be Free» հատուկ պայմաններով սակագնային փաթեթով 3 Sim քարտի ձեռքբերման հնարավորություն, ինչպես նաև Wi-Fi 6 ուժեղացուցիչ ԿՈՍՄՈ ծառայությունների փաթեթին բաժանորդագրվելիս:
          </p>
        </div>

        {/* Աջ կողմ. Նկարը */}
        <div className="lg:col-span-6 flex justify-center">
          <img 
            src="https://www.telecomarmenia.am/images/block_with_text/1/17758196324824.png" 
            alt="Nokia Wi-Fi 6 ուժեղացուցիչ" 
            className="w-full max-w-[580px] h-auto object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}