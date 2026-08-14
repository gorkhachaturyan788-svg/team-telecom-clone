export default function BeFreeSection() {
  return (
    <section className="w-full bg-[#003853] mt-28 pt-16 pb-24 px-4 lg:px-8 font-sans text-white border-t border-cyan-900/30">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-16">
          <div className="md:col-span-7 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              Be Free-ն հատուկ գնով
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-[480px]">
              Դարձի՛ր ԿՈՍՄՈ կամ ԿՈՄԲՈ փաթեթներից մեկի բաժանորդ և ստացիր մինչև 3 SIM քարտ` հատուկ սակագներով։
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <img
              src="https://www.telecomarmenia.am/images/block_with_text/1/17761517712737.png"
              alt="3 BE FREE SIM քարտ"
              className="max-h-[160px] lg:max-h-[190px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 tracking-wide max-w-[850px] leading-tight">
          Ձեռք բեր Be Free փաթեթները հատուկ գնով
        </h2>

        <div className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
          
          {/* Card Image 1 */}
          <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer">
            <img
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/17658825869005.png"
              alt="Be Free Card 1"
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl"
            />
          </div>

         
          <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer">
            <img
              src="https://www.telecomarmenia.am/images/block_with_icons_icons/1/17841229532579.png"
              alt="Be Free Card 2"
              className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}