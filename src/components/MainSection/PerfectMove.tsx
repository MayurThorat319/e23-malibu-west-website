import { MdOutlinePerson2 } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./PerfectMove.module.css";

const cardData = [
  {
    icon: HiOutlineLocationMarker,
    title: "Local market expertise",
    description:
      "We provide in-depth knowledge of neighborhoods and market trends, helping clients make informed property decisions.",
  },
  {
    icon: MdOutlinePerson2,
    title: "Personalized service",
    description:
      "Our team tailors every step of the buying or selling process to meet your unique needs and preferences.",
  },
  {
    icon: BsPatchCheck,
    title: "Proven track record",
    description:
      "With years of successful transactions, we consistently deliver results that exceed our clients’ expectations.",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "Always in the know",
    description:
      "We keep clients informed at every stage, ensuring clarity, trust, and confidence throughout the process.",
  },
];

const PerfectMove = () => {
  return (
    <section id="perfect-move" className={styles.perfectMoveContainer}>
      <div className={styles.container}>
        <div className={styles.contentWrap}>
          <div className={styles.pillWrap}>
            <div className={styles.pillDot}></div>
            <div className={styles.pillText}>Our vision</div>
          </div>

          <h2 className={styles.h2Heading}>
            <span className={styles.handwriting}>
              The qualities behind
            </span>
            <br />
            every perfect move
          </h2>
        </div>

        <div className={styles.cardWrapper}>
          {cardData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className={styles.card} key={index}>
                <Icon className={styles.cardIcon} />

                <div className={styles.contentWrapcard}>
                  <h3 className={styles.h3Heading}>{item.title}</h3>

                  <p
                    className={styles.paragraphSmall}
                    style={{ opacity: 0.8 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerfectMove;