import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import DownloadAppSection from "../components/DownloadAppSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <NewsSection />
      <DownloadAppSection />
    </div>
  );
}