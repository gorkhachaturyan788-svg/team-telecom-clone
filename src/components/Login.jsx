import { useState, useEffect } from "react";
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Profil from "./profil";

export default function AuthPage() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("individuals");
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState("am");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (authLoading) {
    return <div className="flex justify-center items-center min-h-screen">Բեռնվում է...</div>;
  }

  if (user) {
    return <Profil user={user} />;
  }

  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      await setDoc(doc(db, "users", loggedUser.uid), {
        uid: loggedUser.uid,
        name: loggedUser.displayName || "Անուն չկա",
        email: loggedUser.email,
        photoURL: loggedUser.photoURL || "",
        createdAt: new Date()
      }, { merge: true });

      console.log("Հաջողությամբ մուտք գործեց և պահպանվեց բազայում:", loggedUser.email);
    } catch (err) {
      setError(err.message);
      console.error("Սխալ մուտքի ժամանակ:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || loading) return;
    
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const regUser = userCredential.user;

      await setDoc(doc(db, "users", regUser.uid), {
        uid: regUser.uid,
        email: regUser.email,
        name: "Անուն չկա",
        createdAt: new Date()
      }, { merge: true });

      console.log("Գրանցվեց և պահպանվեց բազայում:", regUser.email);
    } catch (err) {
      setError(err.message);
      console.error("Գրանցման սխալ:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || loading) return;
    
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Մուտք գործեց:", userCredential.user.email);
    } catch (err) {
      setError(err.message);
      console.error("Մուտքի սխալ:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-[#f4f6f9]">
      <div className="w-full lg:w-[40%] min-w-0 lg:min-w-[400px] flex flex-col justify-between items-center py-10 px-5 box-border">
        <div className="flex gap-10 mb-[30px]">
          <button 
            type="button"
            onClick={() => setActiveTab("individuals")}
            className={`bg-transparent border-none text-[16px] font-semibold cursor-pointer pb-2 transition-all ${
              activeTab === "individuals" ? "text-[#1a1a1a] border-b-[3px] border-[#00bcd4]" : "text-[#999] border-b-[3px] border-transparent"
            }`}
          >
            Անհատներին
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab("business")}
            className={`bg-transparent border-none text-[16px] font-semibold cursor-pointer pb-2 transition-all ${
              activeTab === "business" ? "text-[#1a1a1a] border-b-[3px] border-[#00bcd4]" : "text-[#999] border-b-[3px] border-transparent"
            }`}
          >
            Բիզնես
          </button>
        </div>

        <div className="bg-white rounded-lg p-[40px_35px] w-full max-w-[360px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] box-border">
          <form onSubmit={handleLogin}>
            <div className="mb-[25px]">
              <label className="block text-[11px] text-[#888] mb-[5px]">Էլ. հասցե</label>
              <div className="flex items-center border-b border-[#ccc] pb-[5px]">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Մուտքագրեք էլ. հասցեն"
                  className="border-none outline-none w-full text-[14px] text-[#333]"
                  required
                />
              </div>
            </div>

            <div className="mb-[25px]">
              <label className="block text-[11px] text-[#888] mb-[5px]">Գաղտնաբառ</label>
              <div className="flex items-center border-b border-[#ccc] pb-[5px]">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Մուտքագրեք գաղտնաբառը"
                  className="border-none outline-none w-full text-[14px] text-[#333]"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-transparent border-none cursor-pointer text-[#777]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 mb-4 text-xs">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#eb5353] text-white border-none rounded-[20px] py-3 text-[16px] font-semibold cursor-pointer mb-5 hover:bg-[#d44343] transition-colors disabled:opacity-50"
            >
              {loading ? "Բեռնվում է..." : "Մուտք"}
            </button>
          </form>

          <button 
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white text-[#444] border border-[#ccc] rounded-[20px] py-3 text-[15px] font-semibold cursor-pointer mb-5 flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Մուտք Google-ով
          </button>

          <div className="text-center mb-[30px]">
            <a href="#" className="text-[#3a7f9c] text-[13px] underline">Մոռացե՞լ եք գաղտնաբառը</a>
          </div>

          <button 
            type="button"
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-transparent text-[#eb5353] border border-[#eb5353] rounded-[20px] py-3 text-[16px] font-semibold cursor-pointer hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            {loading ? "Բեռնվում է..." : "Գրանցում"}
          </button>
        </div>

        <div className="flex gap-[25px] mt-10">
          <button type="button" onClick={() => setLang("am")} className={`bg-transparent border-none cursor-pointer pb-[5px] ${lang === "am" ? "border-b-2 border-[#00bcd4]" : "border-b-2 border-transparent"}`}>
            <span className="text-[22px]">🇦🇲</span>
          </button>
          <button type="button" onClick={() => setLang("ru")} className={`bg-transparent border-none cursor-pointer pb-[5px] ${lang === "ru" ? "border-b-2 border-[#00bcd4]" : "border-b-2 border-transparent"}`}>
            <span className="text-[22px]">🇷🇺</span>
          </button>
          <button type="button" onClick={() => setLang("en")} className={`bg-transparent border-none cursor-pointer pb-[5px] ${lang === "en" ? "border-b-2 border-[#00bcd4]" : "border-b-2 border-transparent"}`}>
            <span className="text-[22px]">🇬🇧</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-[60%] bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center relative flex-col justify-between p-[60px] box-border overflow-hidden">
        <div className="absolute inset-0 bg-black/12 z-[1]" />

        <div className="relative z-[2] flex justify-center items-center gap-10 mt-10">
          <h1 className="text-[#283442] text-[48px] font-extrabold m-0 tracking-[1px] leading-[1.2] text-right">
            ԱՆՁՆԱԿԱՆ<br />ԳՐԱՍԵՆՅԱԿ
          </h1>

          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-[10px] no-underline w-[140px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/></svg>
              <div>
                <div className="text-[9px] opacity-70 uppercase">Download on the</div>
                <div className="text-[15px] font-semibold leading-[1.2]">App Store</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-[10px] no-underline w-[140px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.25 2.25c-.173 0-.342.045-.491.13L13.11 10.5l3.22-3.22L5.59 2.43c-.105-.06-.221-.11-.34-.11v-.07zM3.47 3.22a.742.742 0 00-.22.53v16.5c0 .204.083.39.22.53l9.01-9.01-9.01-9.01zM13.84 11.23l-3.32 3.32 7.07 4.08c.36.21.78.21 1.14 0l-4.89-4.89-2.51-2.51zm4.14-1.44l4.15-2.4c.36-.21.57-.59.57-1s-.21-.79-.57-1l-5.17 2.99 1.02 1.41z"/></svg>
              <div>
                <div className="text-[9px] opacity-70 uppercase">GET IT ON</div>
                <div className="text-[15px] font-semibold leading-[1.2]">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <img 
          src="https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=3" 
          alt="Mobile Devices" 
          className="absolute bottom-10 right-10 w-[480px] z-[2] pointer-events-none"
        />

        <div className="relative z-[3] flex flex-col items-end gap-10 mt-auto">
          <div className="w-full flex justify-between items-center text-white/80 text-[13px]">
            <div className="flex gap-[15px]">
              <a href="#" className="text-inherit"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg></a>
              <a href="#" className="text-inherit"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" className="text-inherit"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
            <div>Team © 2026.</div>
          </div>
        </div>
      </div>
    </div>
  );
}