import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

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
  const hideLayout = location.pathname === "/login";

  
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {!hideLayout && <Header user={user} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/login" element={<Login />} />
        
     
        <Route path="/account" element={<Profil user={user} />} /> 
        
        <Route path="/teamtv" element={<TeamTV />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/teampay" element={<TeamPay />} />
        <Route path="/team-energy" element={<TeamEnergy />} />
        <Route path="/payment" element={<BillPaymentForm />} />
      </Routes>

      {!hideLayout && <Footer />}
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