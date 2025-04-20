import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/IMG_6819.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Web Developer</h3>
              <p>
              A passionate and driven full-stack web developer with a B.Tech in Information Technology from Sikkim Manipal Institute of Technology. I specialize in building scalable, responsive, and user-friendly web applications using technologies like JavaScript, React, Node.js, MongoDB, and Docker.
              </p>
              <p>
              With hands-on experience working as a Web Developer at Maxgen Technologies Pvt. Ltd., I’ve contributed to real-world projects that solve real problems. I enjoy taking on new challenges, learning emerging technologies, and turning ideas into digital experiences.
              </p>
              <p>
              My goal is to grow as a developer, contribute to impactful projects, and keep leveling up my skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
