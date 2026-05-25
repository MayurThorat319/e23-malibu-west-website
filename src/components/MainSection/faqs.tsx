"use client";
import { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  { q: "How do I start buying a home?", a: "Start by assessing your budget, getting pre-approved for a mortgage, and working with a trusted agent." },
  { q: "How much do I need for a down payment?", a: "It depends on your loan type — some require as little as 3–5%, while others may ask for 20%." },
  { q: "What is the home selling process?", a: "You'll prepare your home, set a listing price, market it, review offers, negotiate terms, and close the sale." },
  { q: "Do I need a real estate agent?", a: "While not required, an agent makes the process smoother by handling negotiations and paperwork." },
  { q: "What costs should I expect besides the listing price?", a: "Expect closing costs, inspection fees, moving expenses, and possible repairs." },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>FAQ</div>
      <h2 className={styles.sectionTitle}>Clear answers to <span className={styles.cursive}>common  questions</span></h2>
      <div className={styles.faq}>
        {faqs.map((f, i) => (
          <div key={i} className={styles.faqItem}>
            <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {f.q}
              <span className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`}>+</span>
            </button>
            {openFaq === i && <div className={styles.faqA}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
