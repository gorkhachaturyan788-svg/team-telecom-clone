export default function NokiaVideoSection() {
  return (
    <section className="w-full bg-[#f4f6f8] py-16 lg:py-24 px-6 lg:px-12 font-sans text-[#003853]">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        
        {/* Վերնագիր և ենթավերնագիր */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#003853]">
            Nokia devices
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Best devices for the best service
          </p>
        </div>

        {/* Ավելի նեղ և կոմպակտ քարտ */}
        <div className="max-w-[480px] mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-left">
          
          {/* YouTube Video Embed */}
          <div className="relative w-full aspect-[16/9] bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WzbiaREKq-g"
              title="Nokia WiFi installation and configuration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Տեքստային հատված */}
          <div className="p-5 md:p-6 space-y-2.5">
            <h3 className="text-lg md:text-xl font-bold text-[#003853]">
              Nokia Beacon 1.1 Wi-Fi 5
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
              Nokia WiFi mesh creates a seamless Wi-Fi network throughout the home. The intelligent channel selection ensures that at each moment, the optimal Wi-Fi channel is selected, avoiding any Wi-Fi glitches.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}