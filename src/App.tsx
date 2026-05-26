import "./App.css";

import Hero from "./components/MainSection/Hero";
import WayUsSection from "./components/MainSection/WayUs";
import AboutSection from "./components/MainSection/About";
import PerfectMove from "./components/MainSection/PerfectMove";
import Slider from "./components/MainSection/slider";
import FaqSection from "./components/MainSection/faqs";
import Contact from "./components/MainSection/Contact";
import Amenities from "./components/MainSection/Amenities"

import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <WayUsSection />
      <AboutSection />
      <Amenities/>
      <PerfectMove />
      <Slider />
      <FaqSection />
      <Contact />
    </Layout>
  );
}
//

export default App;