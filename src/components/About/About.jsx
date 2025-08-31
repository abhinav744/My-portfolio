import React from "react";

import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
        src="/assets/about/abhi_pic.webp"
        alt="Me standing"
        className={styles.aboutImage}
        loading="lazy"
      />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Web Developer</h3>
              <p>
              A passionate and driven full-stack web developer and aspiring data engineer, with a B.Tech in Information Technology from Sikkim Manipal Institute of Technology. I specialize in building scalable, responsive, and user-friendly web applications using modern technologies like JavaScript, React, Node.js, MongoDB, and Docker.
              </p>
              <p>
              With hands-on experience working as a Web Developer at Maxgen Technologies Pvt. Ltd., I’ve contributed to real-world projects that solve meaningful problems. I’m also expanding my expertise into data engineering — learning tools and concepts like Python, SQL, Kafka, and data pipelines to work with big data and build efficient, reliable systems for data-driven decision making.
              </p>
              <p>
              I enjoy taking on new challenges, learning emerging technologies, and turning ideas into impactful digital solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
