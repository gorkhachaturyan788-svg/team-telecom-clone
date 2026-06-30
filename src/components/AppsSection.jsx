import React from 'react';

export default function AppsSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Այլ հավելվածներ</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start gap-6 p-6">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17691688001842.png" 
            alt="TeamTV" 
            className="w-40 h-40 rounded-2xl object-cover shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">TeamTV</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Ժամանակակից TV միշտ քեզ հետ։ Մինչև 200 ալիք, 5000+ ֆիլմ և catch-up հնարավորություն։
            </p>
            <button className="bg-red-500 text-white px-8 py-2 rounded-full font-medium hover:bg-red-600 transition">
              Միանալ
            </button>
          </div>
        </div>

        <div className="flex items-start gap-6 p-6">
          <img 
            src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png" 
            alt="Team Energy" 
            className="w-40 h-40 rounded-2xl object-cover shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Team Energy</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական լիցքավորման կայանը և հեշտությամբ լիցքավորել մեքենան։
            </p>
            <button className="bg-red-500 text-white px-8 py-2 rounded-full font-medium hover:bg-red-600 transition">
              Միանալ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}