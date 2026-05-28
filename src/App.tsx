import "./App.css";

import Hero from "./components/MainSection/Hero";
import WayUsSection from "./components/MainSection/WayUs";
import AboutSection from "./components/MainSection/About";
import PerfectMove from "./components/MainSection/PerfectMove";
import Slider from "./components/MainSection/slider";
// import FaqSection from "./components/MainSection/faqs";
// import Contact from "./components/MainSection/Contact";
import Amenities from "./components/MainSection/Amenities"

import Layout from "./Layout";
import { ProjectShowcase } from "./components/MainSection/ProjectShowcase";
import GalleryScroll from "./components/MainSection/GalleryScroll";
import VideoTestimonials from "./components/MainSection/VideoTestimonials";
import { lazy, Suspense, useEffect, useState } from "react";
const EnquiryDialog = lazy(() => import("./components/Form/form"));


function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDialogOpen(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
     <>
      {isDialogOpen && (
        <Suspense fallback={null}>
          <EnquiryDialog
            isOpen={isDialogOpen}
            onClose={() => setDialogOpen(false)}
          />
        </Suspense>
      )}
    <Layout onOpenDialog={handleOpenDialog}>
      <Hero />
      <WayUsSection />
      <AboutSection />
      <Amenities/>
      <PerfectMove />
      <Slider />
      <ProjectShowcase />
      <GalleryScroll />
      {/* <FaqSection /> */}
      {/* <Contact /> */}
      <VideoTestimonials />
    </Layout>
    </>
  );
}
//

export default App;