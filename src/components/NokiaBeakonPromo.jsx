export default function NokiaBeaconPromo() {
  return (
    <section className="w-full bg-[#003853] text-white py-16 lg:py-24 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto space-y-20 lg:space-y-28">
        
        {/* ================= 1. NOKIA BEACON 1.1 WI-FI 5 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Ձախ. Նկարը */}
          <div className="lg:col-span-6 flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/1775822890677.png" 
              alt="NOKIA BEACON 1.1 WI-FI 5" 
              className="w-full max-w-[480px] h-auto object-contain"
            />
          </div>

          {/* Աջ. Տեքստը */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white tracking-tight uppercase">
              NOKIA BEACON <br />
              1.1 WI-FI 5
            </h2>

            <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-normal opacity-90 max-w-[480px]">
              Սարքն ապահովում է անխափան և որակյալ Wi-Fi ցանց բնակարանի ամբողջ տարածքում: Հաճախականությունների խելացի ընտրությունը երաշխավորում է առանց ընդհատումների Wi-Fi կապ:
            </p>
          </div>
        </div>

        {/* ================= 2. NOKIA BEACON 2 WI-FI 6 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Ձախ. Տեքստը */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white tracking-tight uppercase">
              NOKIA BEACON 2 <br />
              WI-FI 6
            </h2>

            <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-normal opacity-90 max-w-[480px]">
              Նորագույն սարք, որն աշխատում է Wi-Fi 6 տեխնոլոգիայով: Ապահովում է մինչև +140 ք/մ տարածքում անխափան և առանց արագության կորստի Wi-Fi կապ: Հնարավորություն է ընձեռում դիտել 4k հոլովակներ և խաղալ ցանցային բարձրորակ խաղեր:
            </p>
          </div>

          {/* Աջ. Նկարը */}
          <div className="lg:col-span-6 flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/17758229248308.png" 
              alt="NOKIA BEACON 2 WI-FI 6" 
              className="w-full max-w-[480px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ================= 3. GPON G-2426G-B ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Ձախ. Նկարը */}
          <div className="lg:col-span-6 flex justify-center">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/17758197185003.png" 
              alt="GPON G-2426G-B" 
              className="w-full max-w-[480px] h-auto object-contain"
            />
          </div>

          {/* Աջ. Տեքստը */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white tracking-tight uppercase">
              GPON G-2426G-B
            </h2>

            <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-normal opacity-90 max-w-[480px]">
              Առանձնացված կապուղի:Ցանցի կառուցման տոպոլոգիան հնարավորություն է ընձեռնում յուրաքանչյուր բաժանորդի հասցնել առանձնացված մանրաթել, ծառայությունների մաքսիմալ որակի և արագության համար:
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}