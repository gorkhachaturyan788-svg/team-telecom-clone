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
import AdminChat from "./pages/AdminChat";

import Home from "./pages/Home";
import Eshop from "./pages/Eshop";
import Business from "./pages/Business";
import BillPaymentForm from "./components/BillPaymentForm";

import TeamTV from "./pages/TeamTV";
import MyTeam from "./pages/MyTeam";
import TeamPay from "./pages/TeamPay";
import TeamEnergy from "./pages/TeamEnergy";
import Profil from "./components/profil";

function Layout() {
  const location = useLocation();
  // Չաթը և Footer-ը թաքցնում ենք ՄԻԱՅՆ /login էջում
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
        <Route path="/login" element={<Login />} />

        <Route path="/tariffs" element={<Mobile />} />
        <Route path="/tariffs/mobile" element={<Mobile />} />
        <Route path="/tariffs/fixed" element={<TariffsFixed />} />

        <Route path="/account" element={<Profil user={user} />} />

        <Route path="/teamtv" element={<TeamTV />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/teampay" element={<TeamPay />} />
        <Route path="/team-energy" element={<TeamEnergy />} />
        <Route path="/payment" element={<BillPaymentForm />} />
      </Routes>

      {!hideLayout && <Footer />}

      {/* Չաթը կանչում ենք ՄԵԿ ԱՆԳԱՄ՝ բոլոր մուտք գործած օգտատերերի համար */}
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