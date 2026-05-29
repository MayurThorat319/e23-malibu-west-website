import { useEffect, useRef, useState } from "react";
import "./VideoTestimonials.css";
import YouTube from "./youtube";

const videoReviews = [
  {
    quote: "EV Homes made our home-buying journey smooth and stress-free.",
    name: "Mr./Mrs. Bhati",
    role: "Homebuyer",
    img: "/images/bhatiinsta.webp",
    instagramUrl:
      "https://www.instagram.com/reel/DXJrwn_iEdS/?igsh=bGVjMThwcG5yZWJq",
    bg: "/images/luxury2bhk_one.webp",
  },
  {
    quote: "The project quality and sea views exceeded our expectations.",
    name: "Mr./Mrs. Kothari",
    role: "Homebuyer",
    img: "/images/kothariinsta.webp",
    instagramUrl:
      "https://www.instagram.com/reel/DV5CKykiPv0/?igsh=dnl2ZXh4ZzliOWpi",
    bg: "/images/bedroom3bhk.webp",
  },
  {
    quote: "Beautiful location and outstanding construction quality.",
    name: "Mr./Mrs. Kanse",
    role: "Homebuyer",
    img: "/images/kanseinsta.webp",
    instagramUrl:
      "https://www.instagram.com/reel/DWleelfiLyt/?igsh=Y3UzbGg4N28zYzBv",
    bg: "/images/luxury2bhk_one.webp",
  },
  {
    quote: "Everything from booking to possession was seamless.",
    name: "Mr./Mrs. Hathi",
    role: "Homebuyer",
    img: "/images/hathiinsta.webp",
    instagramUrl:
      "https://www.instagram.com/reel/DWnXjCij30a/?igsh=YmRiYmpkNXV2N2o4",
    bg: "/images/luxury2bhk_two.webp",
  },
];

export default function VideoTestimonials() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!wrap || !section) return;

      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      
      const x = -progress * 65;
      const y = -progress * 40;

      let sectionOpacity = 1;
      if (progress > 0.7) {
        sectionOpacity = 1 - (progress - 0.7) / 0.3;
      }

      section.style.transform = `translate3d(${x}vw, ${y}vh, 0)`;
      section.style.opacity = `${Math.max(sectionOpacity, 0)}`;

      if (cards) {
        const fadeStart = 0.1; 
        const fadeEnd = 0.35; 
        
        let cardsOpacity = 1;
        if (progress > fadeStart) {
          cardsOpacity = 1 - (progress - fadeStart) / (fadeEnd - fadeStart);
        }
        
        cardsOpacity = Math.min(1, Math.max(0, cardsOpacity));
        cards.style.opacity = `${cardsOpacity}`;
        
        cards.style.pointerEvents = cardsOpacity <= 0.02 ? "none" : "auto";
        cards.style.transform = `translate3d(0, ${-(progress * 30)}px, 0)`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="scroll-section" id="feedback">
      <div className="scroll-wrap" ref={wrapRef}>
        <div className="scroll-sticky">
          <section className="video-section" ref={sectionRef}>
            <div className="video-bg-div" />
            <div className="video-container">
              <div className="video-grid">
                <div className="video-content-div">
                  <div className="overflow-hidden-div">
                    <h2 className="h2-heading">
                      Step Inside with Our Exclusive Video Tours
                    </h2>
                  </div>
                  <div className="vertical-line" />
                  <div className="overflow-hidden-div">
                    <p className="paragraph">
                      Explore every corner of our premium properties through
                      immersive cinematic walkthroughs — get the real feel
                      before you visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="video-review-wrapper" ref={cardsRef}>
              <div className="video-review-viewport">
                <div className="video-review-marquee">
                  {[...videoReviews, ...videoReviews].map((review, i) => (
                    <div className="video-review-slide" key={i}>
                      <div
                        className="video-review-card"
                        style={{ "--card-bg": `url(${review.bg})` } as React.CSSProperties}
                      >
                        <div className="review-top">
                          <div className="review-stars">★★★★★</div>
                        </div>
                        <p className="video-review-text">{review.quote}</p>
                        <div className="video-gold-line" />
                        
                        <div className="video-review-bottom">
                          <div className="video-review-footer">
                            <img
                              src={review.img}
                              alt={review.name}
                              className="video-review-avatar"
                            />
                            <div>
                              <h4>{review.name}</h4>
                              <span>{review.role}</span>
                            </div>
                          </div>
                          
                          <div 
                            className="instagram-play-btn"
                            onClick={() => window.open(review.instagramUrl, "_blank")}
                            style={{ cursor: "pointer" }}
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 1000 1000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <linearGradient
                                  id="ig-gradient"
                                  x1="25.922%"
                                  y1="104.041%"
                                  x2="75.82%"
                                  y2="-5.433%"
                                >
                                  <stop stopColor="#FFD600" offset="0%" />
                                  <stop stopColor="#FF6900" offset="30%" />
                                  <stop stopColor="#F00" offset="50%" />
                                  <stop stopColor="#D000FF" offset="75%" />
                                  <stop stopColor="#002FFF" offset="100%" />
                                </linearGradient>
                              </defs>
                              <rect
                                rx="225"
                                width="1000"
                                height="1000"
                                fill="url(#ig-gradient)"
                              />
                              <path
                                d="M500,203c96.7,0,108.1,0.4,146.4,2.1c35.4,1.6,54.6,7.5,67.4,12.5c16.9,6.6,29,14.5,41.7,27.2c12.7,12.7,20.6,24.8,27.2,41.7c5,12.8,10.9,32,12.5,67.4c1.7,38.2,2.1,49.6,2.1,146.4s-0.4,108.1-2.1,146.4c-1.6,35.4-7.5,54.6-12.5,67.4c-6.6,16.9-14.5,29-27.2,41.7c-12.7,12.7-24.8,20.6-41.7,27.2c-12.8,5-32,10.9-67.4,12.5c-38.2,1.7-49.6,2.1-146.4,2.1s-108.1-0.4-146.4-2.1c-35.4-1.6-54.6-7.5-67.4-12.5c-16.9-6.6-29-14.5-41.7-27.2c-12.7-12.7-20.6-24.8-27.2-41.7c-5-12.8-10.9-32-12.5-67.4c-1.7-38.2-2.1-49.6-2.1-146.4s0.4-108.1,2.1-146.4c1.6-35.4,7.5-54.6,12.5-67.4c6.6-16.9,14.5-29,27.2-41.7c12.7-12.7,24.8-20.6,41.7-27.2c12.8-5,32-10.9,67.4-12.5C391.9,203.4,403.3,203,500,203 M500,123c-98.3,0-110.5,0.4-149.2,2.2c-38.6,1.8-65,7.9-88,16.9c-23.8,9.2-44,21.5-64.1,41.6c-20.1,20.1-32.4,40.3-41.6,64.1c-8.9,23-15.1,49.4-16.9,88C123.4,389.5,123,401.7,123,500s0.4,110.5,2.2,149.2c1.8,38.6,7.9,65,16.9,88c9.2,23.8,21.5,44,41.6,64.1c20.1,20.1,40.3,32.4,64.1,41.6c23,8.9,49.4,15.1,88,16.9c38.7,1.8,50.9,2.2,149.2,2.2s110.5-0.4,149.2-2.2c38.6-1.8,65-7.9,88-16.9c23.8-9.2,44-21.5,64.1-41.6c20.1-20.1,32.4-40.3,41.6-64.1c8.9-23,15.1-49.4,16.9-88c1.8-38.7,2.2-50.9,2.2-149.2s-0.4-110.5-2.2-149.2c-1.8-38.6-7.9-65-16.9-88c-9.2-23.8-21.5-44-41.6-64.1c-20.1-20.1-40.3-32.4-64.1-41.6c-23-8.9-49.4-15.1-88-16.9C610.5,123.4,598.3,123,500,123 L500,123z"
                                fill="#FFF"
                              />
                              <path
                                d="M500,295.3c-113,0-204.7,91.7-204.7,204.7c0,113,91.7,204.7,204.7,204.7c113,0,204.7-91.7,204.7-204.7C704.7,387,613,295.3,500,295.3 M500,624.7c-68.9,0-124.7-55.8-124.7-124.7c0-68.9,55.8-124.7,124.7-124.7c68.9,0,124.7,55.8,124.7,124.7C624.7,568.9,568.9,624.7,500,624.7"
                                fill="#FFF"
                              />
                              <circle
                                cx="688.5"
                                cy="311.5"
                                r="53.5"
                                fill="#FFF"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="testimonials" className="testimonial-section">
        <div className="t-container">
          <div className="t-head">
            <div className="overflow-hidden-div">
              <h2 className="h2-heading">Feedback From Our Valued Clients</h2>
            </div>
            <p>
              Stories from homeowners, investors, and partners who trusted us to
              shape their next chapter.
            </p>
          </div>
          <div className="slider">
            <YouTube />
          </div>
        </div>
      </section>

      {open && (
        <div
          className="lightbox-modal"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://www.youtube.com/embed/5Peo-ivmupE?autoplay=1"
              title="Video tour"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}