export default function DownloadAppSection() {
  return (
    <section className="py-20 px-6 bg-[#f4f7f9] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b33]">Հավելված My Team</h2>
          <p className="text-gray-700 text-lg leading-relaxed">Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար։ Կատարե՛ք վճարումներ, ստացե՛ք բոնուսներ և օգտվե՛ք այլ հնարավորություններից։</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://apps.apple.com/am/app/my-team-armenia/id1453472097" target="_blank" className="transition-transform hover:scale-105">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-14" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=am.telecomarmenia.myteam" target="_blank" className="transition-transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-14" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center gap-6">
          <div className="bg-white p-3 rounded-2xl shadow-xl">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.telecomarmenia.am/" alt="QR Code" className="w-32 h-32" />
          </div>
          <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17400318089669.png" alt="My Team App" className="h-[400px] object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}   