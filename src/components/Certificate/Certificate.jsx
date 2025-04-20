import React from "react";
import certificates from "../../data/certificates.json";
import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <img
              src={getImageUrl(cert.imageSrc)}
              alt={cert.title}
              className={styles.image}
            />
            <div className={styles.details}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
