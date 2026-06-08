import Header from "./components/Header"; // ԱՅՍ ՏՈՂԸ ՊԱԿԱՍՈՒՄ Է
import HeroSlider from "./components/HeroSlider";
import ServicesSection from "./components/ServicesSection";
import NewsSection from "./components/NewsSection";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <ServicesSection />
      <NewsSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
}