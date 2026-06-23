import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";

import Layout from "./Layout";
import Hero from "./components/MainSection/Hero";
import SEO from "./components/SEO";

// Critical / Above-the-fold Lazy Sections
const AboutSection = lazy(() => import("./components/MainSection/About"));
const ScrollReveal = lazy(() => import("./components/MainSection/ScrollReveal"));

// Below-the-fold Lazy Sections (Deferred)
const LuxurySection = lazy(() => import("./components/MainSection/luxury_section"));
const Amenities = lazy(() => import("./components/MainSection/Amenities"));
const Slider = lazy(() => import("./components/MainSection/slider"));
const VideoTestimonials = lazy(() => import("./components/MainSection/VideoTestimonials"));
// const EnquiryDialog = lazy(() => import("./components/Form/form"));

function App() {
  const [, setDialogOpen] = useState(false);
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  useEffect(() => {
    // 1. Stagger below-the-fold component mounting to free up the main thread
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const handle = idleCallback(() => setLoadBelowFold(true));

    // 2. Delayed conversion dialog
    const timer = setTimeout(() => {
      setDialogOpen(true);
    }, 25000);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(handle);
      else clearTimeout(handle);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* {isDialogOpen && (
        <Suspense fallback={null}>
          <EnquiryDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />
        </Suspense>
      )} */}

      <SEO
        title="EV23 Malibu West | Luxury Waterfront Residences"
        description="Luxury waterfront residences in Navi Mumbai."
        path="/"
        image="/images/Malibu_logo.webp"
      />

      <Layout onOpenDialog={handleOpenDialog}>
        {/* Rendered Immediately */}
        <div id="hero">
          <Hero />
        </div>


        {/* Immediate Async Components */}
        <Suspense fallback={<div className="h-[40vh] bg-neutral-900 animate-pulse" />}>
          <div id="about">
            <AboutSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[60vh] bg-neutral-900 animate-pulse" />}>
          <ScrollReveal />
        </Suspense>

        {/* Deferred Components (Mounts only after initial thread is clear) */}
        {loadBelowFold && (
          <>
            <Suspense fallback={<div className="h-[50vh]" />}>
              <div id="work">
                <LuxurySection />
              </div>
            </Suspense>

            <Suspense fallback={<div className="h-[50vh]" />}>
              <div id="amenities" className="section-Amenities">
                <Amenities />
              </div>
            </Suspense>

            <Suspense fallback={<div className="h-[40vh]" />}>
              <div id="layout" className="section-Slider" >
                <Slider />
              </div>
            </Suspense>

            <Suspense fallback={<div className="h-[50vh] bg-neutral-900 animate-pulse" />}>
              <div  id="Feedback" className="section-video" >
                <VideoTestimonials />
              </div>
            </Suspense>
          </>
        )}
      </Layout>
    </>
  );
}

export default App;