// import React from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlineDateRange } from "react-icons/md";
// import styles from "../../styles/hero/Hero.module.css";


// export default function Hero() {
// return (
// <section className={styles.heroWrapper} aria-label="hero">
// <div className={styles.innerBox}>
// <div className={styles.headings}>
// <h1 className={styles.title}>Find Your Next Journey</h1>
// <p className={styles.subtitle}>Discover available trips and book your seats with ease.</p>
// </div>


// {/* Search Trips Box */}
// <div className={styles.searchBox}>
// <div className={styles.searchInner}>
// <div className={styles.inputGroup}>
// <label className={styles.label} >From</label>
// <div className={styles.inputWrapper}>
// <input type="text" placeholder="Departure Location" />
// <FaLocationDot className={styles.icon} />
// </div>
// </div>


// <div className={styles.inputGroup}>
// <label className={styles.label}>To</label>
// <div className={styles.inputWrapper}>
// <input type="text" placeholder="Arrival Location" />
// <FaLocationDot className={styles.icon} />
// </div>
// </div>


// <div className={styles.inputGroup}>
// <label className={styles.label}>Date</label>
// <div className={styles.inputWrapper}>
// <input type="text" placeholder="mm/dd/yyyy" />
// <MdOutlineDateRange className={styles.icon} />
// </div>
// </div>

// <div className={styles.buttonCont} >
// <button className={styles.searchButton}>Search Trips</button>
// </div>
// </div>
// </div>
// </div>
// </section>
// );
// }


import React from "react";
import styles from "../../styles/hero/Hero.module.css";
import HeroHeading from "./HeroHeading";
import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section className={styles.heroWrapper} aria-label="hero">
      <div className={styles.innerBox}>
        <HeroHeading />
        <SearchBox />
      </div>
    </section>
  );
}
