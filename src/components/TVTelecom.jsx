export default function TVTelecom() {
  return (
    <section className="w-full bg-[#003853] text-white py-12 lg:py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex justify-center mb-10 lg:mb-14">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight select-none">
            <span className="text-[#e85050]">Team</span>
            <span className="text-[#52c5d0]">TV</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            
            <div className="flex items-start gap-5">
              <img 
                src="https://www.telecomarmenia.am/file_manager/cosmo/icons/2_icon.png" 
                alt="Catch-Up Icon" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain shrink-0 mt-0.5"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-bold mb-1.5 leading-snug">
                  Catch-Up մինչև 7 օր
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  Ընտրեք հաղորդումը և դիտեք այն ձեզ հարմար ժամանակ
                </p>
              </div>
            </div>

            {/* 2. Հարուստ տեսադարան */}
            <div className="flex items-start gap-5">
              <img 
                src="https://www.telecomarmenia.am/file_manager/cosmo/icons/3_icon.png" 
                alt="Library Icon" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain shrink-0 mt-0.5"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-bold mb-1.5 leading-snug">
                  Հարուստ տեսադարան
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  Ֆիլմերի, մուլտֆիլմերի և հեռուստասերիալների մեծ ընտրություն
                </p>
              </div>
            </div>

            {/* 3. 4K */}
            <div className="flex items-start gap-5">
              <img 
                src="https://www.telecomarmenia.am/file_manager/cosmo/icons/4K_icon.png" 
                alt="4K Icon" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain shrink-0 mt-0.5"
              />
              <div className="flex items-center min-h-[48px]">
                <h3 className="text-lg lg:text-xl font-bold leading-snug">
                  4K հնարավորությամբ TV սարքավորում
                </h3>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <img 
              src="https://www.telecomarmenia.am/file_manager/cosmo/img/iptv.png" 
              alt="TeamTV Screen and Mobile App" 
              className="w-full max-w-[620px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}