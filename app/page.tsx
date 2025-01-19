import Card from './components/Card';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
export default function Page() {
  return(
    <div>
      <Navbar />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
}
