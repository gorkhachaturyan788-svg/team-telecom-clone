import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Home from "./pages/Home";
import Eshop from "./pages/Eshop";

import TeamTV from "./pages/TeamTV";
import MyTeam from "./pages/MyTeam";
import TeamPay from "./pages/TeamPay";
import TeamEnergy from "./pages/TeamEnergy";

function Layout() {
  const location = useLocation();

  // Թաքցնում է Header-ն ու Footer-ը login էջում
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/login" element={<Login />} />

        <Route path="/teamtv" element={<TeamTV />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/teampay" element={<TeamPay />} />
        <Route path="/team-energy" element={<TeamEnergy />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}