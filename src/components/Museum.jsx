import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Museum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-sans pt-[30px] pb-[80px]">
      <div className="w-[82%] mx-auto">
        {/* Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex items-center gap-2 text-[#68758a] text-[15px]">
          <Link to="/" className="text-[#68758a] underline">Գլխավոր</Link>
          <span>›</span>
          <span className="underline">Կապի թանգարան</span>
        </div>

        {/* Էջի Վերնագիր */}
        <h1 className="text-[46px] text-[#1b2d46] mt-[25px] mb-[35px] font-bold">
          Կապի թանգարան
        </h1>

        {/* Բովանդակություն */}
        <div className="text-[#68758a] text-[16px] leading-relaxed space-y-6">
          <p>
            <strong className="text-[#1b2d46]">Team Telecom Armenia</strong>-ն հանդիսանում է Հայաստանում առաջին տելեկոմ ցանցի ժառանգորդը։ Ունենալով ոլորտում ծառայությունների մատուցման ավելի քան 100 տարվա պատմություն և ստանձնելով կապի զարգացման պատմության պահպանումն ու նոր սերունդներին փոխանցելու պատասխանատվությունը՝ ընկերությունը հետաքրքրվող բոլոր անձանց առաջարկում է այցելել Հայաստանում միակ Կապի թանգարան։
          </p>
          <p>
            Թանգարանը հիմնադրվել է 2012 թվականին։ Այստեղ ներկայացված են Հայաստանում կապի զարգացման պատմությանը վերաբերող նյութեր։ Թանգարանի այցելուները կարող են ծանոթանալ Հայաստանում հեռահաղորդակցության էվոլյուցիային, տեսնել կապի սարքեր՝ 19-րդ դարից սկսած մինչև ֆիքսված, բջջային և ինտերնետ կապի թվային ժամանակակից միջոցներ։
          </p>

          {/* Առաջին նկարը */}
          <div className="my-8">
            <img 
              src="https://www.telecomarmenia.am/file_manager/museum/Museum.JPG" 
              alt="Կապի թանգարան" 
              className="w-full max-w-[800px] rounded-[8px] shadow-md object-cover" 
            />
          </div>

          <p>
            Կապի թանգարանի մուտքն անվճար է։ Այցելությունները կազմակերպվում են աշխատանքային օրերին՝ նախնական գրանցմամբ։ Գրանցման համար անհրաժեշտ է զանգահարել <strong className="text-[#1b2d46]">+374 99 000811</strong> հեռախոսահամարին կամ գրել <a href="mailto:museum@telecomarmenia.am" className="text-[#0b4f70] underline">museum@telecomarmenia.am</a> էլ. հասցեին։ Թանգարանը գտնվում է Երևանի **Ազատության պողոտա 24/1** հասցեում։
          </p>
          <p>
            Եթե ցանկանում եք ծանոթանալ թանգարանի ցուցանմուշներին, բայց չեք կարող ֆիզիկապես այցելել, առաջարկում ենք կատարել վիրտուալ շրջայց։
          </p>

          {/* Matterport վիրտուալ շրջայցի բլոկ */}
          <div className="mt-8">
            <div className="w-full max-w-[800px] rounded-[8px] overflow-hidden shadow-lg bg-black">
              <iframe 
                src="https://my.matterport.com/show/?m=kmuxkdByHwz" 
                title="Կապի թանգարան Վիրտուալ շրջայց" 
                className="w-full h-[450px] border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}