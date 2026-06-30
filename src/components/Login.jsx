import { useState } from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [authType, setAuthType] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState("am");

  return (
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#f4f6f9" 
    }}>
      
      <div style={{ 
        width: "40%", 
        minWidth: "400px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "40px 20px",
        boxSizing: "border-box"
      }}>
        
        <div style={{ display: "flex", gap: "40px", marginBottom: "30px" }}>
          <button 
            onClick={() => setActiveTab("individuals")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color: activeTab === "individuals" ? "#1a1a1a" : "#999",
              cursor: "pointer",
              paddingBottom: "8px",
              borderBottom: activeTab === "individuals" ? "3px solid #00bcd4" : "3px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Անհատներին
          </button>
          <button 
            onClick={() => setActiveTab("business")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color: activeTab === "business" ? "#1a1a1a" : "#999",
              cursor: "pointer",
              paddingBottom: "8px",
              borderBottom: activeTab === "business" ? "3px solid #00bcd4" : "3px solid transparent",
              transition: "all 0.2s"
            }}
          >
            Բիզնես
          </button>
        </div>

        <div style={{ 
          backgroundColor: "#ffffff", 
          borderRadius: "8px", 
          padding: "40px 35px", 
          width: "100%", 
          maxWidth: "360px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          boxSizing: "border-box"
        }}>
          
          <div style={{ display: "flex", gap: "20px", marginBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
            <button 
              onClick={() => setAuthType("phone")}
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: authType === "phone" ? "#1a1a1a" : "#888",
                cursor: "pointer",
                paddingBottom: "10px",
                borderBottom: authType === "phone" ? "2px solid #00bcd4" : "2px solid transparent"
              }}
            >
              Հեռախոսահամար
            </button>
            <button 
              onClick={() => setAuthType("email")}
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: authType === "email" ? "#1a1a1a" : "#888",
                cursor: "pointer",
                paddingBottom: "10px",
                borderBottom: authType === "email" ? "2px solid #00bcd4" : "2px solid transparent"
              }}
            >
              Էլ. հասցե
            </button>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontSize: "11px", color: "#888", marginBottom: "5px" }}>Օգտանուն</label>
            <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
              {authType === "phone" && <span style={{ fontSize: "14px", color: "#333", marginRight: "8px", fontWeight: "500" }}>+374</span>}
              <input 
                type={authType === "phone" ? "tel" : "email"} 
                placeholder={authType === "phone" ? "Մուտքագրեք ձեր օգտանունը" : "Մուտքագրեք էլ. հասցեն"}
                style={{ border: "none", outline: "none", width: "100%", fontSize: "14px", color: "#333" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontSize: "11px", color: "#888", marginBottom: "5px" }}>Գաղտնաբառ</label>
            <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Մուտքագրեք գաղտնաբառը"
                style={{ border: "none", outline: "none", width: "100%", fontSize: "14px", color: "#333" }}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#777" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          <button style={{ 
            width: "100%", 
            backgroundColor: "#eb5353", 
            color: "#ffffff", 
            border: "none", 
            borderRadius: "20px", 
            padding: "12px", 
            fontSize: "16px", 
            fontWeight: "600", 
            cursor: "pointer",
            marginBottom: "20px"
          }}>
            Մուտք
          </button>

          <div style={{ textAlignment: "center", marginBottom: "30px", textAlign: "center" }}>
            <a href="#" style={{ color: "#3a7f9c", fontSize: "13px", textDecoration: "underline" }}>Մոռացե՞լ եք գաղտնաբառը</a>
          </div>

          <button style={{ 
            width: "100%", 
            backgroundColor: "transparent", 
            color: "#eb5353", 
            border: "1px solid #eb5353", 
            borderRadius: "20px", 
            padding: "12px", 
            fontSize: "16px", 
            fontWeight: "600", 
            cursor: "pointer"
          }}>
            Գրանցում
          </button>

        </div>

        <div style={{ display: "flex", gap: "25px", marginTop: "40px" }}>
          <button onClick={() => setLang("am")} style={{ background: "none", border: "none", cursor: "pointer", paddingBottom: "5px", borderBottom: lang === "am" ? "2px solid #00bcd4" : "2px solid transparent" }}>
            <span style={{ fontSize: "22px" }}>🇦🇲</span>
          </button>
          <button onClick={() => setLang("ru")} style={{ background: "none", border: "none", cursor: "pointer", paddingBottom: "5px", borderBottom: lang === "ru" ? "2px solid #00bcd4" : "2px solid transparent" }}>
            <span style={{ fontSize: "22px" }}>🇷🇺</span>
          </button>
          <button onClick={() => setLang("en")} style={{ background: "none", border: "none", cursor: "pointer", paddingBottom: "5px", borderBottom: lang === "en" ? "2px solid #00bcd4" : "2px solid transparent" }}>
            <span style={{ fontSize: "22px" }}>🇬🇧</span>
          </button>
        </div>

      </div>

      <div style={{ 
        width: "60%", 
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px",
        boxSizing: "border-box",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.12)", zIndex: 1 }} />

        <div style={{ 
          position: "relative", 
          zIndex: 2, 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "40px"
        }}>
          <h1 style={{ 
            color: "#283442", 
            fontSize: "48px", 
            fontWeight: "800", 
            margin: 0, 
            letterSpacing: "1px",
            lineHeight: "1.2",
            textAlign: "right"
          }}>
            ԱՆՁՆԱԿԱՆ<br />ԳՐԱՍԵՆՅԱԿ
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#000000", color: "#fff", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", width: "140px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.7, textTransform: "uppercase" }}>Download on the</div>
                <div style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2" }}>App Store</div>
              </div>
            </a>
            
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#000000", color: "#fff", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", width: "140px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.25 2.25c-.173 0-.342.045-.491.13L13.11 10.5l3.22-3.22L5.59 2.43c-.105-.06-.221-.11-.34-.11v-.07zM3.47 3.22a.742.742 0 00-.22.53v16.5c0 .204.083.39.22.53l9.01-9.01-9.01-9.01zM13.84 11.23l-3.32 3.32 7.07 4.08c.36.21.78.21 1.14 0l-4.89-4.89-2.51-2.51zm4.14-1.44l4.15-2.4c.36-.21.57-.59.57-1s-.21-.79-.57-1l-5.17 2.99 1.02 1.41z"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.7, textTransform: "uppercase" }}>GET IT ON</div>
                <div style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2" }}>Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <img 
          src="https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=3" 
          alt="Mobile Devices" 
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "480px",
            zIndex: 2,
            pointerEvents: "none"
          }}
        />

        <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "40px", marginTop: "auto" }}>
          
          <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            color: "rgba(255,255,255,0.8)",
            fontSize: "13px"
          }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="#" style={{ color: "inherit" }}><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg></a>
              <a href="#" style={{ color: "inherit" }}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" style={{ color: "inherit" }}><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
            <div>Team © 2026.</div>
          </div>

        </div>

      </div>

    </div>
  );
}