import React from "react";

import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhinav Chauhan</h1>
        <p className={styles.description}>
        I bring a fresh perspective and a robust foundation in full-stack development and big data
engineering with unwavering commitment and timely project delivery. 
        </p>
        <a href="https://drive.google.com/file/d/1O36IgchijnRkmnaTKDmGC9KSTo5-lrKL/view?usp=sharing" className={styles.resume}>
          Resume
        </a>
      </div>
      <img
        src="/assets/hero/abhinav_photo.webp"
        alt="Hero image of me"
        className={styles.heroImg}
        loading="lazy"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
