export default function TransferNumberForm() {
    return (
        <section className="bg-[#00263a] py-20 px-6 sm:px-10 md:px-[10%] text-center text-white">
            <h2 className="text-4xl font-bold mb-6">ՏԵՂԱՓՈԽՎԵ՛Ք TEAM ՁԵՐ ՀԱՄԱՐՈՎ</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից՝ պահելով Ձեր բջջային հեռախոսի համարը:
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                <div>
                    <label className="block text-sm mb-2 text-gray-400">Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*</label>
                    <input type="text" className="w-full p-4 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-gray-400">Անուն Ազգանուն*</label>
                    <input type="text" className="w-full p-4 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-gray-400">Կազմակերպություն*</label>
                    <input type="text" className="w-full p-4 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-gray-400">Կոնտակտային համար*</label>
                    <input type="text" className="w-full p-4 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                <div className="md:col-span-2 flex justify-center mt-6">
                    <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-16 rounded-full transition duration-300">
                        Միանալ
                    </button>
                </div>
            </form>
        </section>
    );
}