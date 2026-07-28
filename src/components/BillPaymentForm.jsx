import { useState } from "react";
 
export default function BillPaymentForm() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
 
  const numericAmount = Number(amount);
  const isAmountValid = numericAmount >= 100 && numericAmount <= 100000;
  const isNumberValid = number.trim() !== "" && number.trim() !== "0";
  const canPay = isNumberValid && isAmountValid;
 
  const handlePay = () => {
    if (!canPay) return;
    alert(`Վճարվում է ${amount} դրամ` + "\n" + `Համար՝ ${number}`);
  };
 
  return (
    <div className="w-full max-w-md bg-white p-6 max-[550px]:p-4 max-[550px]:w-full">
      <h1 className="text-2xl max-[550px]:text-xl font-bold text-slate-800 mb-6">
        Կատարեք առցանց վճարումներ
      </h1>
 
      <div className="mb-5">
        <label className="block text-slate-700 font-semibold mb-2">
          Համար
        </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Մուտքագրեք համարը"
          className="w-full rounded-xl bg-slate-100 border border-transparent px-4 py-3 text-left text-slate-800 text-lg outline-none focus:border-slate-300 transition-colors"
        />
        <p className="text-amber-700 text-sm mt-2 leading-snug">
          Կատարեք բջջային և ֆիքսված կապի կամ ինտերնետի վճարումներ մուտքագրելով
          համարը
        </p>
      </div>
 
      <div className="mb-6">
        <label className="block text-slate-700 font-semibold mb-2">
          Գումար
        </label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Մուտքագրեք գումարը"
            className="w-full rounded-xl bg-slate-100 border border-transparent px-4 py-3 text-left pr-16 text-slate-800 text-lg outline-none focus:border-slate-300 transition-colors"
          />
          {amount && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              դրամ
            </span>
          )}
        </div>
        <p className="text-amber-700 text-sm mt-2 leading-snug">
          Վճարման գումարի սահմանաչափը՝ 100 - 100.000 դրամ։
          <br />
          Միջնորդավճար չի գանձվում։
        </p>
      </div>
 
      <button
        type="button"
        onClick={handlePay}
        disabled={!canPay}
        className={`w-full rounded-xl py-3 font-semibold text-lg transition-colors mb-6 ${
          canPay
            ? "bg-slate-800 text-white hover:bg-slate-700"
            : "bg-slate-100 text-slate-400 cursor-not-allowed"
        }`}
      >
        Վճարել
      </button>
 
      <div className="flex items-center gap-4 mb-8 max-[550px]:justify-center">
        <span className="italic font-black text-xl tracking-tight">
          <span className="text-blue-700">VISA</span>
        </span>
        <span className="flex items-center">
          <span className="w-5 h-5 rounded-full bg-red-500 -mr-2 inline-block" />
          <span className="w-5 h-5 rounded-full bg-amber-400 opacity-90 inline-block" />
        </span>
        <span className="italic font-black text-xl tracking-tight text-blue-800">
          Ar<span className="text-red-600">Ca</span>
        </span>
      </div>
 
      <p className="text-xs text-slate-500 leading-relaxed">
        «Թելեկոմ Արմենիա» ԲԲԸ-ն չի պահում կամ փոխանցում բանկային քարտի
        տվյալները։ Բոլոր վճարումների անվտանգությունը ապահովվում է PCI DSS
        միջազգային ստանդարտներով։
      </p>
    </div>
  );
}