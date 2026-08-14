export default function TclTvPromo() {
  return (
    <section className="w-full bg-[#e7e3d8] text-[#003853] py-12 lg:py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-6 flex justify-center">
          <img 
            src="https://www.telecomarmenia.am/images/block_with_text/1/17859375803242.jpeg" 
            alt="TCL Զգա արագությունը մեծ էկրանով" 
            className="w-full max-w-[580px] h-auto object-contain rounded-xl shadow-sm"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] text-[#003853]">
            Զգա <br className="hidden sm:inline" />
            արագությունը՝ <br className="hidden sm:inline" />
            մեծ էկրանով
          </h2>

          <p className="text-[#003853] text-sm lg:text-base leading-relaxed font-normal">
            Միացե՛ք ԿՈՍՄՈ 4-ին 1 տարով և ձե՛ռք բերեք պրեմիում որակի հեռուստացույցներ՝ հասանելի գնով՝ TCL 55T6D QLED հեռուստացույցը 189 000 դրամով՝ 299 900 դրամի փոխարեն TCL 65P7K QLED հեռուստացույցը 259 000 դրամով՝ 369 900 դրամի փոխարեն: Ամենաթեժ պայքարն առջևում է, հետևե՛ք խաղերին գերարագ ինտերնետով և պրեմիում որակի էկրանով:
          </p>

          <div className="pt-2">
            <button className="bg-[#f85252] hover:bg-[#e04545] text-white font-bold px-10 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer text-base">
              Միանալ
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}