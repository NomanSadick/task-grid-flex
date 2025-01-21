import Footer from "./components/Footer";
import FormBoard from "./components/FormBoard";
import MakeJourney from "./components/MakeJourney";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <FormBoard />
      <MakeJourney />
      <Footer />
    </div>
  );
}
