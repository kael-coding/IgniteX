import Navbar from "../../Components/Home/Navbar";
import Hero from "../../Components/Home/Hero";
import KeyBenefits from "../../Components/Home/KeyBenefits";
import HowToUse from "../../Components/Home/HowToUse";
import About from "../../Components/Home/About";
import Contact from "../../Components/Home/Contact";

function Home() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        <Navbar />
        <Hero />
        <KeyBenefits />
        <HowToUse />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;
