import Card from './components/Card';
import Footer from './components/Footer';
import FormBoard from './components/FormBoard';
import HeroSection from './components/HeroSection';
import MakeJourny from './components/MakeJourny';
import Navbar from './components/Navbar';
import PhoneButton from './components/PhoneButton';
export default function Page() {
  return(
    <div>
      <Navbar />
      <FormBoard />
      <MakeJourny />
      <HeroSection />
      <Card />
      <Footer />
      <PhoneButton />
    </div>
  );
}
