import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ComboSection from "./components/ComboSection";
import ShopPreview from "./components/ShopPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* Գլխավոր Մենյու */}
      <Header />

      <main>
        {/* Գլխավոր Սլայդեր (Ակցիաներ) */}
        <HeroSlider />

        {/* Սակագնային Փաթեթներ */}
        <ComboSection />

        {/* Օնլայն Խանութ */}
        <ShopPreview />
      </main>

      {/* Ֆուտեր */}
      <footer className="bg-blue-950 text-white text-center py-8 border-t border-blue-900 text-sm font-sans">
        <p>© 2026 TEAM TELECOM PROJECT. Պատրաստված է ուսումնական նպատակներով։</p>
      </footer>
    </div>
  );
}