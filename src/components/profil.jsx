import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Profil({ user }) {
  const [activeMenu, setActiveMenu] = useState(() => {
    return localStorage.getItem("activeMenu") || "data";
  });

  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("activeMenu");
      await signOut(auth);
    } catch (err) {
      console.error("Դուրս գալու սխալ:", err);
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-[#f4f6f9] overflow-hidden">
      <div className="w-[320px] bg-white border-r border-[#e2e8f0] flex flex-col justify-between shrink-0 shadow-sm z-10">
        <div>
          <div className="p-5 border-b border-[#e2e8f0] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[15px] font-semibold text-[#1e293b]">Հաշիվներ</span>
            </div>
            <svg width="16" height="16" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="p-5 border-b border-[#e2e8f0] bg-[#fafbfc]">
            <p className="text-[12px] text-[#64748b] mb-1">Հիմնական հաշիվ</p>
            <p className="text-[13px] font-medium text-[#0f172a] truncate mb-2">{user?.email}</p>
            <p className="text-[20px] font-bold text-[#0f172a]">0 ֏</p>
          </div>

          <div className="py-2">
            <button 
              onClick={() => setActiveMenu("data")}
              className={`w-full flex items-center justify-between px-5 py-3 text-[14px] transition-colors ${
                activeMenu === "data" ? "bg-[#f1f5f9] text-[#0f172a] font-semibold border-l-4 border-[#00bcd4]" : "text-[#475569] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.654 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Անձնական տվյալներ</span>
              </div>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button 
              onClick={() => setActiveMenu("settings")}
              className={`w-full flex items-center justify-between px-5 py-3 text-[14px] transition-colors ${
                activeMenu === "settings" ? "bg-[#f1f5f9] text-[#0f172a] font-semibold border-l-4 border-[#00bcd4]" : "text-[#475569] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Կարգավորումներ</span>
              </div>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button 
              onClick={() => setActiveMenu("tariffs")}
              className="w-full flex items-center justify-between px-5 py-3 text-[14px] text-[#475569] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Սակագներ</span>
              </div>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button 
              onClick={() => setActiveMenu("services")}
              className="w-full flex items-center justify-between px-5 py-3 text-[14px] text-[#475569] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Ծառայություններ</span>
              </div>
              <span className="bg-[#e2e8f0] text-[#334155] text-[10px] font-bold px-1.5 py-0.5 rounded">TEAM</span>
            </button>

            <button 
              onClick={() => setActiveMenu("bonus")}
              className="w-full flex items-center justify-between px-5 py-3 text-[14px] text-[#475569] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Բոնուս</span>
              </div>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button 
              onClick={() => setActiveMenu("help")}
              className="w-full flex items-center justify-between px-5 py-3 text-[14px] text-[#475569] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Օգնություն</span>
              </div>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div className="p-5 border-t border-[#e2e8f0]">
          <button 
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 border border-red-200 rounded-xl py-2.5 text-[14px] font-semibold hover:bg-red-100 transition-colors"
          >
            Դուրս գալ
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center flex flex-col relative overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-md px-8 py-3.5 border-b border-gray-200 flex items-center gap-4 shadow-sm">
          <img 
            src="https://www.telecomarmenia.am/myaccount/img/account-logo.png" 
            alt="Team Telecom Armenia" 
            className="h-7 object-contain"
          />
          <span className="text-[15px] font-medium text-gray-700">Իմ Team</span>
        </div>

        <div className="p-8 max-w-[800px] flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-white/40 overflow-hidden">
            <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
              <svg width="20" height="20" fill="none" stroke="#334155" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h2 className="text-[16px] font-bold text-[#1e293b]">Ներառումներ</h2>
            </div>

            <div className="p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#00bcd4]">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-800">Շեյր կուտակված ՄԲ</p>
                    <p className="text-[13px] font-bold text-gray-900">Կուտակված՝ <span className="text-[#00bcd4]">0</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-800">Շեյր կուտակված Բոնուս</p>
                    <p className="text-[13px] font-bold text-gray-900">Կուտակված՝ <span className="text-amber-500">0 միավոր</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-white/40 overflow-hidden">
            <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
              <svg width="20" height="20" fill="none" stroke="#334155" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-[16px] font-bold text-[#1e293b]">Իմ ծառայությունները</h2>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-[#eb5353] text-[14px] font-medium">Ծառայություններն անհասանելի են այլ օպերատորների համար</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}