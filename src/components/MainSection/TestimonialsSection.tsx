import "./TestimonialsSection.css";
import YouTube from "./youtube";

export default function TestimonialsSection() {

  return (
    <section id="testimonials" className="dm-testimonial-section">
      <div className="dm-t-container">
        <div className="dm-t-head">
          <h2 className="dm-h2">Feedback From Our Valued Clients</h2>
          <p>
            Stories from homeowners, investors, and partners who trusted us to
            shape their next chapter.
          </p>
        </div>

        {/* <div className="dm-slider">
          <div className="dm-slider-viewport">
            <div
              className="dm-slider-track"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="dm-slide">
                  <div className="dm-t-card">
                    <svg className="dm-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 7h4v4H7c0 2 1 4 4 4v2c-4 0-6-3-6-6V7zm10 0h4v4h-4c0 2 1 4 4 4v2c-4 0-6-3-6-6V7z" />
                    </svg>
                    <p className="dm-t-text">"{t.text}"</p>
                    <div className="dm-t-author">
                      <img src={t.image} alt={t.name} className="dm-client-image" loading="lazy" />
                      <div>
                        <div className="dm-user-name">{t.name}</div>
                        <div className="dm-profession">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dm-slider-controls">
            <button className="dm-arrow" onClick={() => go(index - 1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="dm-dots">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  className={`dm-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="dm-arrow" onClick={() => go(index + 1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div> */}
        <YouTube />
      </div>
    </section>
  );
}
