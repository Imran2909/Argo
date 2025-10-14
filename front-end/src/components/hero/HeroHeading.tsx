import React from "react";
import styles from "../../styles/hero/Hero.module.css";

export default function HeroHeading() {
  return (
    <div className={styles.headings}>
      <h1 className={styles.title}>Find Your Next Journey</h1>
      <p className={styles.subtitle}>
        Discover available trips and book your seats with ease.
      </p>
    </div>
  );
}
