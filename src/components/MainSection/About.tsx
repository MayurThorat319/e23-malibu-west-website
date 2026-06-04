import "./AboutSection.css";

export default function AboutSection() {
    return (
        <div className="dm-root">

            <header className="dm-header">
                <div className="dm-tagline-row">
                    <span className="dm-rule" />
                    <p className="dm-tagline">WAKE UP TO KOPAR KHAIRANE'S FINEST</p>
                    <span className="dm-rule" />
                </div>
                <p className="dm-sub">
                    An extraordinary waterfront address crafted for those who seek uninterrupted views, exceptional design, and a life defined by distinction.
                </p>
                <div className="no-destiop">
                    <h2 className="dm-heading">
                        Kopar Khairane's First Iconic<br />
                        <span className="dm-heading-accent"> Malibu Themed Waterfront Living.</span>
                    </h2>
                </div>
            </header>

            <section className="dm-section">
                <div className="dm-text">
                    <div className="no_mobile">
                        <span className="dm-eyebrow">
                            <span className="dm-eyebrow-mark">✦</span>Kopar Khairane's
                        </span>
                        <h2 className="dm-heading">
                            First Iconic<br />
                            <span className="dm-heading-accent"> Malibu Waterfront Living.</span>
                        </h2>
                    </div>
                    <p className="dm-body">
                        Experience a world where shimmering waters, breathtaking sunsets, and elevated luxury come together to create a life beyond expectation. <span style={{ color: "#1c9696", fontWeight: "600" }}>Live Above It All.</span>
                    </p>

                    <div className="dm-mobile-only dm-mobile-about">
                        <p className="dm-about-lede">
                            Welcome Home to a Life Between<br /> Bay and Skyline
                        </p>
                        <p className="dm-about-body">
                            In the heart of Navi Mumbai’s most coveted corridor, 10 Marina Bay is more than a residence, it’s a retreat of refined living, where serene water views, timeless prestige, and modern elegance come together in perfect harmony.
                        </p>
                    </div>

                    {/* FEATURE BAR - DESKTOP ONLY */}
                    <div className="dm-features-row dm-desktop-only">
                        <div className="dm-feature-item">
                            <div className="dm-feature-icon">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                >
                                    <path d="M6 18V4h12v14" />
                                    <path d="M10 21v-3" />
                                    <path d="M14 21v-3" />
                                    <path d="M2 21h20" />
                                    <path d="M2 24s2-1 5-1 5 1 10 1 5-1 5-1" />
                                </svg>
                            </div>
                            <span className="dm-feature-label">
                                SEA-FACING
                                <br />
                                RESIDENCES
                            </span>
                        </div>

                        <span className="dm-feature-divider"></span>

                        <div className="dm-feature-item">
                            <div className="dm-feature-icon">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                >
                                    <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                                    <path d="M2 9h20" />
                                    <path d="M12 21l4-12" />
                                    <path d="M12 21l-4-12" />
                                </svg>
                            </div>
                            <span className="dm-feature-label">
                                CURATED
                                <br />
                                LUXURY
                            </span>
                        </div>

                        <span className="dm-feature-divider"></span>

                        <div className="dm-feature-item">
                            <div className="dm-feature-icon">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                >
                                    <path d="M12 22v-9" />
                                    <path d="M12 13C8 13 5 10 5 6c4 0 7 3 7 7z" />
                                    <path d="M12 13c4 0 7-3 7-7-4 0-7 3-7 7z" />
                                    <path d="M7 22h10l1-5H6z" />
                                </svg>
                            </div>
                            <span className="dm-feature-label">
                                EXCEPTIONAL
                                <br />
                                AMENITIES
                            </span>
                        </div>

                        <span className="dm-feature-divider"></span>

                        <div className="dm-feature-item">
                            <div className="dm-feature-icon">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                >
                                    <rect x="3" y="3" width="18" height="18" />
                                    <path d="M12 3v18" />
                                    <path d="M3 12h18" />
                                    <rect x="6" y="6" width="12" height="12" />
                                </svg>
                            </div>
                            <span className="dm-feature-label">
                                TIMELESS
                                <br />
                                DESIGN
                            </span>
                        </div>
                    </div>

                    <a className="dm-cta" href="#">
                        EXPLORE ALL PROPERTIES <span className="dm-cta-arrow">→</span>
                    </a>
                </div>

                <div className="dm-image-wrap dm-hero-image">
                    <img
                        src="/images/aboutImage.png"
                        alt="10 Marina Bay - Garden View"
                        className="dm-hero-img"
                    />

                </div>
            </section>
        </div>
    );
}