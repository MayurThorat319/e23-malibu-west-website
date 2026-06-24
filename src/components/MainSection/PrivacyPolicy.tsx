import { useNavigate } from "react-router-dom";
import styles from "./PrivacyPolicy.module.css";
import { FaTimes } from "react-icons/fa";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.privacyContainer}>
        <h1 className={styles.privacyMainTitle}>Privacy Policy</h1>

        <p className={styles.privacyIntro}>
          At{" "}
          <span className={styles.highlight}>
            EV Homes Constructions Private Limited
          </span>{" "}
          Project <span className={styles.highlight}>23 Malibu West</span>,
          accessible from{" "}
          <a
            href="https://www.ev23malibuwest.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            www.ev23malibuwest.com
          </a>
          , we are committed to protecting and respecting your privacy. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you visit our website.
        </p>

        <div className={styles.policySection}>
          <h2>1. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            This includes names, email addresses, phone numbers, and any other
            contact details you voluntarily provide when you fill out a form on
            our website.
          </p>

          <h3>Non-Personal Information</h3>
          <p>
            We may collect information about how you access our website,
            including your IP address, browser type, device information, and
            browsing behavior.
          </p>
        </div>

        <div className={styles.policySection}>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>
              To provide information and services that you request (e.g.,
              property details, newsletters).
            </li>
            <li>To improve our website and tailor it to user preferences.</li>
            <li>
              To communicate with you, including responding to inquiries or
              sending marketing materials with your consent.
            </li>
            <li>To comply with legal requirements.</li>
          </ul>
        </div>

        <div className={styles.policySection}>
          <h2>3. Data Security</h2>
          <p>
            We take reasonable measures to protect the personal information we
            collect from unauthorized access, disclosure, alteration, or
            destruction. Your data is stored on secure servers, and we use
            industry-standard practices to ensure its safety.
          </p>
        </div>

        <div className={styles.policySection}>
          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services (such as Google Analytics) to
            analyze traffic and improve our website. These third-party services
            may collect non-personal information about your usage of our site.
          </p>
        </div>

        <div className={styles.policySection}>
          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience.
            Cookies are small files stored on your device that help us
            understand your preferences and usage patterns. You can choose to
            disable cookies in your browser settings, but doing so may affect
            your experience on our site.
          </p>
        </div>

        <div className={styles.policySection}>
          <h2>6. Your Rights</h2>
          <ul>
            <li>
              Request access to the personal information we hold about you.
            </li>
            <li>Request correction of any inaccurate information.</li>
            <li>
              Request deletion of your personal information, subject to legal
              obligations.
            </li>
            <li>Withdraw your consent to data processing at any time.</li>
          </ul>
        </div>

        <div className={styles.policySection}>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the effective date will be updated
            accordingly.
          </p>
        </div>

        <div className={styles.policySection}>
          <h2>8. Contact Us</h2>

          <div className={styles.contactInfo}>
            <p>
              <span className={styles.contactLabel}>Phone:</span>
              <a href="tel:+919820909893" className={styles.websiteLink}>
                +91 9820909893
              </a>
            </p>

            <p>
              <span className={styles.contactLabel}>Email:</span>
              <a href="mailto:sales@evhomes.net" className={styles.websiteLink}>
                sales@evhomes.net
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        className={styles.closeButton}
        onClick={() => navigate("/")}
        aria-label="Close"
      >
        <FaTimes />
      </button>
    </section>
  );
}
