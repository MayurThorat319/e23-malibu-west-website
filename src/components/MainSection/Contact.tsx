import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.contactBackground} />
            <div className={styles.contactOverlay} />
            <div className={styles.contactInner}>
                <div>
                    <div className={styles.sectionLabel}>Contact</div>
                    <h2 className={styles.sectionTitle}>Start your next <span className={styles.cursive}>real estate journey</span> </h2>
                    <p>Have questions about buying, selling, or investing? Fill out the form and our Solflare team will get back to you promptly.</p>
                </div>
                <form className={styles.form} >
                    <input className={styles.input} placeholder="Name" />
                    <input className={styles.input} placeholder="Surname" />
                    <input className={styles.input} placeholder="Mail" type="email" />
                    <input className={styles.input} placeholder="Phone" />
                    <textarea className={`${styles.textarea} ${styles.formFull}`} placeholder="Message" />
                    <button className={styles.submit} type="submit">Send message ↗</button>
                </form>
            </div>
        </section>
    );
}
