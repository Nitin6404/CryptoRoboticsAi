import Header from '@/components/LandingPage/Header';
import HeroSection from '@/components/LandingPage/HeroSection';
import TopStrategiesSection from '@/components/LandingPage/TopStrategiesSection';
import MobileApplicationSection from '@/components/LandingPage/MobileApplicationSection';
// import TradingSoftwareSection from '@/components/LandingPage/TradingSoftwareSection';
// import PremiumSupportSection from '@/components/LandingPage/PremiumSupportSection';
// import Footer from '@/components/LandingPage/Footer';

export default function Home() {
  return (
    <div className='flex flex-col h-vh w-vw bg-white'>
      <Header />
      <HeroSection />
      <TopStrategiesSection />
      <MobileApplicationSection />
      {/* <TradingSoftwareSection />
    <PremiumSupportSection />
    <Footer /> */}
    </div>
  );
}
