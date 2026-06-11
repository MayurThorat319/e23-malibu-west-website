import "./App.css";

import Hero from "./components/MainSection/Hero";
const Slider = lazy(() => import("./components/MainSection/slider"));
const Amenities = lazy(() => import("./components/MainSection/Amenities"));
import Layout from "./Layout";
const VideoTestimonials = lazy(
  () => import("./components/MainSection/VideoTestimonials"),
);
import { lazy, Suspense, useEffect, useState } from "react";
const EleganceHorizons = lazy(
  () => import("./components/MainSection/EleganceHorizons"),
);
const ScrollReveal = lazy(
  () => import("./components/MainSection/ScrollReveal"),
);
const AboutSection = lazy(() => import("./components/MainSection/About"));
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
        {/* <NewSection/> */}
        <Hero />
        {/* <WayUsSection /> */}
        <Suspense fallback={<div />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div />}>
          <ScrollReveal />
        </Suspense>
        <Suspense fallback={<div />}>
          <div className="section-Eleganc">
            <EleganceHorizons />
          </div>
        </Suspense>

        <Suspense fallback={<div />}>
          <div className="section-Amenities">
            <Amenities />
          </div>
        </Suspense>
        {/* <PerfectMove /> */}
        <Suspense fallback={<div />}>
          <div className="section-Slider">
            <Slider />
          </div>
        </Suspense>
        <Suspense fallback={<div />}>
          <div className="section-video">
            <VideoTestimonials />
          </div>

        </Suspense>
      </Layout>
    </>
  );
}


export default App;
