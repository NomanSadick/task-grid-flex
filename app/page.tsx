import Card from './components/Card';
import Footer from './components/Footer';
import FormBoard from './components/FormBoard';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import MakeJourny from './components/MakeJourney';
import Navbar from './components/Navbar';
import PhoneButton from './components/PhoneButton';
export default function Page() {
  return(
    <div>
      <Navbar />
      <Hero />
      <FormBoard />
      <MakeJourny />
      <HeroSection />
      <Card />
      <Footer />
      <PhoneButton />
    </div>
  );
}
