import { forwardRef, useEffect } from "react";
import "./GalleryScroll.css";

const leftImages = [
  "https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop",
];

const middleImages = [
  "https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop",
];

const rightImages = [
  "https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop",
];

const GalleryScroll = forwardRef<HTMLElement>((_props, ref) => {
  // Optional: smooth scroll with Lenis if installed. Safe no-op otherwise.
  useEffect(() => {
    let lenis: any;
    let raf = 0;
    (async () => {
      try {
        const { default: Lenis } = await import(/* @vite-ignore */ "lenis");
        lenis = new Lenis();
        const loop = (t: number) => {
          lenis.raf(t);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {
        /* lenis not installed — native scroll is fine */
      }
    })();
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy?.();
    };
  }, []);

  return (
    <main className="sg-main" ref={ref}>
      <div className="sg-wrapper">
        <section className="sg-hero">
          <h1 className="sg-title">
            Gallery Section
          </h1>
        </section>
      </div>

      <section className="sg-gallery">
        <div className="sg-cols">
          <div className="sg-col">
            {leftImages.map((src, i) => (
              <figure key={i} className="sg-fig">
                <img src={src} alt="" className="sg-img sg-img-tall" />
              </figure>
            ))}
          </div>

          <div className="sg-col sg-col-sticky">
            {middleImages.map((src, i) => (
              <figure key={i} className="sg-fig sg-fig-fill">
                <img src={src} alt="" className="sg-img sg-img-fill" />
              </figure>
            ))}
          </div>

          <div className="sg-col">
            {rightImages.map((src, i) => (
              <figure key={i} className="sg-fig">
                <img src={src} alt="" className="sg-img sg-img-tall" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
});

GalleryScroll.displayName = "GalleryScroll";
export default GalleryScroll;
