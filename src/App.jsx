import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Mobile from "./components/Mobile";
import TariffsFixed from "./pages/TariffsFixed";
import ChatWidget from "./components/ChatWidget";

import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import Business from "./pages/Business";
import BillPaymentForm from "./components/BillPaymentForm";

import TeamTV from "./pages/TeamTV";
import MyTeam from "./pages/MyTeam";
import TeamPay from "./pages/TeamPay";
import TeamEnergy from "./pages/TeamEnergy";
import Profil from "./components/profil";

import CosmoPage from "./components/CosmoPage";
import ComboPage from "./components/ComboPage";

import Car from "./pages/Car";

import Smart from "./pages/Smart";

import HamarTan from "./pages/HamarTan";
import Kompi from "./pages/Kompi";

// Ծառայությունների ենթաէջեր
import Carayutyun1 from "./pages/Carayutyun1";
import Carayutyun2 from "./pages/Carayutyun2";
import Carayutyun3 from "./pages/Carayutyun3";
import Carayutyun4 from "./pages/Carayutyun4";
import Carayutyun5 from "./pages/Carayutyun5";

import Sarq from "./pages/Sarq";

import Spasarkum from "./pages/Spasarkum";

import Hrahang from "./pages/Hrahang";

import Room from "./pages/Room";

import Mig from "./pages/Mig";

import Ogtakar from "./pages/Ogtakar";

import Shop1 from "./pages/Shop1";

import Hetevel from "./pages/Hetevel";

import Support from "./pages/Support";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/online-credit" element={<Shop1 />} />

        <Route path="/support/settings" element={<Sarq />} />
        <Route path="/devices" element={<Sarq />} />
        
        {/* Ավելացված է այս տողերը, որպեսզի սխալ չտա */}
        <Route path="/devices/computer" element={<Kompi />} />
        <Route path="/internet/device" element={<Kompi />} />

        <Route path="/support/subscriber-service" element={<Spasarkum />} />
        <Route path="/support/service" element={<Spasarkum />} />

        <Route path="/support/ussd-codes" element={<Hrahang />} />
        <Route path="/support/ussd" element={<Hrahang />} />

        <Route path="/roaming" element={<Room />} />
        <Route path="/support/roaming" element={<Room />} />
        <Route path="/roaming/map" element={<Room />} />
        <Route path="/roaming/roaming" element={<Room />} />

        <Route path="/mig" element={<Mig />} />
        <Route path="/international" element={<Mig />} />
        <Route path="/roaming/international" element={<Mig />} />

        <Route path="/support/useful-info" element={<Ogtakar />} />
        <Route path="/useful-info" element={<Ogtakar />} />
        <Route path="/roaming/info" element={<Ogtakar />} />
        <Route path="/ogtakar" element={<Ogtakar />} />

        <Route path="/roaming/services" element={<Car />} />
        <Route path="/services" element={<Car />} />
        <Route path="/car" element={<Car />} />

        <Route path="/internet/smartphone" element={<Smart />} />
        <Route path="/smart" element={<Smart />} />
        <Route path="/tariffs/mobile" element={<Smart />} />

        <Route path="/subscription" element={<Hetevel />} />

        <Route path="/support" element={<Support />} />
        <Route path="/support/faq" element={<Support />} />

        <Route path="/login" element={<Login />} />

        <Route path="/tariffs" element={<Mobile />} />
        <Route path="/tariffs/fixed" element={<TariffsFixed />} />

        <Route path="/tariffs/combo" element={<CosmoPage />} />
        <Route path="/internet/home-combo" element={<CosmoPage />} />

        <Route path="/internet/home-combi" element={<HamarTan />} />
        <Route path="/tariffs/combos" element={<HamarTan />} />
        <Route path="/tariffs/combi" element={<HamarTan />} />
        <Route path="/internet/combo" element={<HamarTan />} />

        <Route path="/account" element={<Profil user={user} />} />

        <Route path="/services/team-tv" element={<Carayutyun1 />} />
        <Route path="/services/payment" element={<Carayutyun2 />} />
        <Route path="/services/entertainment" element={<Carayutyun3 />} />
        <Route path="/services/calls-security" element={<Carayutyun4 />} />
        <Route path="/services/fixed" element={<Carayutyun5 />} />

        <Route path="/teamtv" element={<TeamTV />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/teampay" element={<TeamPay />} />
        <Route path="/team-energy" element={<TeamEnergy />} />
        <Route path="/payment" element={<BillPaymentForm />} />
      </Routes>

      {!hideLayout && <Footer />}

      {!hideLayout && !authLoading && <ChatWidget user={user} />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}