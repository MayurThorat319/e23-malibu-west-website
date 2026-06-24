import { useNavigate } from "react-router-dom";
import styles from "./TermsConditons.module.css";
import { FaTimes } from "react-icons/fa";

export default function TermsConditions() {
  const navigate = useNavigate();

  return (
    <section className={styles.termsConditions}>
      <div className={styles.termsContainer}>
        <h1 className={styles.termsMainTitle}>Terms and Conditions</h1>

        <p className={styles.termsIntro}>
          Welcome to{" "}
          <span className={styles.highlight}>
            EV Homes Constructions Pvt Ltd
          </span>
          ’s website for the{" "}
          <span className={styles.highlight}>23 Malibu West</span> project. By
          accessing and using this website, you agree to comply with and be
          bound by the following Terms and Conditions. Please read them
          carefully before proceeding.
        </p>

        <div className={styles.termsSection}>
          <h2>1. Project Information</h2>

          <p>
            The 23 Malibu West project is registered under the Maharashtra Real
            Estate Regulatory Authority (MAHARERA) as per the requirements of
            the RERA Act, 2016 of the Government of India.
          </p>

          <p>
            <strong>MAHARERA Registration Number:</strong> P51700078094
          </p>

          <p>
  <strong>Website:</strong>{" "}
  <a
    href="https://www.ev23malibuwest.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.websiteLink}
  >
    www.ev23malibuwest.com
  </a>
</p>

          <p>
            For detailed project information, you may visit the MAHARERA website
            or contact our office.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>2. Rights To Advertise</h2>

          <p>
            EV Homes Constructions Pvt Ltd has received full rights to
            Market/Advertise/Sell the apartments in 23 Malibu West vide
            applicable MAHARERA Registration permissions and approvals.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>3. Disclaimer</h2>

          <p>
            The information and content provided on this website are for
            informational purposes only and do not constitute an offer or
            invitation to purchase any units or services.
          </p>

          <p>
            All information about the 23 Malibu West project, including prices,
            availability, and specifications, is subject to change without prior
            notice.
          </p>

          <p>
            EV Homes Constructions Pvt Ltd strives to ensure the accuracy of the
            content displayed on this site but does not warrant or guarantee the
            completeness or correctness of such information.
          </p>

          <p>
            Buyers are encouraged to verify all project-related details from the
            official MAHARERA website.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>4. Pricing and Availability</h2>

          <ul>
            <li>
              All prices mentioned on this website are indicative and subject to
              change without prior notice.
            </li>
            <li>
              The availability of properties mentioned on the website is subject
              to confirmation.
            </li>
            <li>
              Contact our sales team for the most up-to-date pricing and
              availability information.
            </li>
          </ul>
        </div>

        <div className={styles.termsSection}>
          <h2>5. Communication</h2>

          <p>
            By providing your contact details on our website (including phone
            numbers and email addresses), you agree to receive communication
            from EV Homes Constructions Pvt Ltd.
          </p>

          <p>
            This may include phone calls, SMS, and emails regarding project
            updates, offers, or information about our products and services.
          </p>

          <p>
            You can opt out of marketing communication at any time by contacting
            us or by following the unsubscribe instructions in our emails.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>6. Legal Compliance and Registration</h2>

          <p>
            The 23 Malibu West project is developed and marketed in accordance
            with the Real Estate (Regulation and Development) Act, 2016 (RERA).
          </p>

          <p>
            Buyers are encouraged to visit the official MAHARERA website for
            complete project details, approvals, and registration status.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>7. Intellectual Property</h2>

          <p>
            All content, logos, images, and trademarks displayed on the website
            are the property of EV Homes Constructions Pvt Ltd or its affiliates
            and are protected under applicable copyright laws.
          </p>

          <p>
            You are prohibited from copying, distributing, or reproducing any
            content from this site without prior written consent from the
            company.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>8. Third-Party Links</h2>

          <p>
            The website may contain links to third-party websites. These links
            are provided for your convenience and do not imply any endorsement
            by EV Homes Constructions Pvt Ltd.
          </p>

          <p>
            We are not responsible for the content or privacy practices of such
            third-party sites.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>9. Limitation of Liability</h2>

          <p>
            EV Homes Constructions Pvt Ltd shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from the use
            of this website or the information provided herein.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>10. Governing Law</h2>

          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of India.
          </p>

          <p>
            Any disputes arising out of or in connection with these terms shall
            be subject to the exclusive jurisdiction of the courts located in{" "}
            <strong>Navi Mumbai, Maharashtra</strong>.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>11. Amendments</h2>

          <p>
            EV Homes Constructions Pvt Ltd reserves the right to update or
            modify these Terms and Conditions at any time without prior notice.
          </p>

          <p>
            It is your responsibility to review these terms periodically for any
            changes.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>12. Contact Us</h2>

          <div className={styles.contactInfo}>
            <p>
              <span className={styles.contactLabel}>Corporate Office:</span>
              <br />
              2 ND FLOOR, OFFICE NO A-212,
              <br />
              VARDHAMAN CHEMBERS,
              <br />
              PLOT NO 84, SECTOR 17,
              <br />
              VASHI, NAVI MUMBAI,
              <br />
              Mumbai City, Maharashtra, 400703
            </p>

            <p>
  <span className={styles.contactLabel}>Email:</span>{" "}
  <a
    href="mailto:sales@evhomes.net"
    className={styles.websiteLink}
  >
    sales@evhomes.net
  </a>
</p>

           <p>
  <span className={styles.contactLabel}>Phone:</span>{" "}
  <a
    href="tel:+919820909893"
    className={styles.websiteLink}
  >
    +91 9820909893
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