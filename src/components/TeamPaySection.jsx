import React from "react";
import { Link } from "react-router-dom";

export default function TeamPaySection() {
  const apps = [
    {
      title: "My Team",
      desc: "My Team հավելվածի միջոցով Դուք կարող եք՝ հաշվեկշռի և փաթեթների մնացորդների ստուգում, ավտոմատ վճարումների ակտիվացում, սակագնային փաթեթների կառավարում։",
      img: "https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png",
      link: "/my-team"
    },
    {
      title: "Team Energy",
      desc: "Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ լիցքավորել մեքենան։",
      img: "https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png",
      link: "/team-energy"
    }
  ];

  return (
    <div className="py-[60px] max-w-7xl mx-auto px-4">
      <h2 className="text-[32px] text-[#1b2d46] mb-10 font-bold">
        Այլ հավելվածներ
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {apps.map((app, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 bg-white rounded-3xl shadow-sm border border-gray-100">
            <img 
              src={app.img} 
              alt={app.title} 
              className="w-[160px] h-[160px] rounded-[20px] object-cover shrink-0" 
            />
            <div className="text-center sm:text-left">
              <h3 className="text-[24px] text-[#1b2d46] mb-2.5 font-bold">{app.title}</h3>
              <p className="text-[#68758a] text-[14px] leading-relaxed mb-5">
                {app.desc}
              </p>
              <Link 
                to={app.link} 
                className="bg-[#f55252] text-white px-[30px] py-2.5 rounded-[25px] no-underline font-semibold inline-block hover:bg-[#e04444] transition-colors"
              >
                Միանալ
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}