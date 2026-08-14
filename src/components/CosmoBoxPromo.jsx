export default function CosmoBoxPromo() {
  return (
    <section className="w-full bg-white text-[#003853] py-16 lg:py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Ձախ կողմ. Նկարը */}
        <div className="lg:col-span-6 flex justify-center">
          <img 
            src="https://www.telecomarmenia.am/images/block_with_text/1/1775819602079.png" 
            alt="Cosmo Box - դիտիր, խաղա, վայելիր" 
            className="w-full max-w-[580px] h-auto object-cover shadow-sm"
          />
        </div>

        {/* Աջ կողմ. Տեքստը */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] text-[#003853] tracking-tight">
            Cosmo Box` <br />
            դիտիր, խաղա, <br />
            վայելիր
          </h2>

          <p className="text-[#003853] text-sm lg:text-base leading-relaxed font-normal opacity-90 max-w-[480px]">
            Բացահայտի՛ր խաղային փորձի նոր հորիզոնները և սուզվիր զվարճանքի աշխարհ:
          </p>

          <div className="pt-2">
            <button className="bg-[#f85252] hover:bg-[#e04545] text-white font-bold px-10 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer text-base">
              Ավելին
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}