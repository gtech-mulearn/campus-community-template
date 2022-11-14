import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar}>
            <img
              className={styles.navbar_logo}
              src="/assets/navbar/logo.png"
              alt=""
            />
            <div className={styles.navbar_options}>
              <p className={styles.navbar_item}>Events</p>
              <p className={styles.navbar_item}>Team</p>
              <p className={styles.navbar_item}>Interest Group</p>
            </div>
            <div className={styles.navbar_socials}>
              <img
                src="/assets/navbar/twitter.png"
                alt=""
                className={styles.navbar_social}
              />
              <img
                src="/assets/navbar/linkedin.png"
                alt=""
                className={styles.navbar_social}
              />
              <img
                src="/assets/navbar/instagram.png"
                alt=""
                className={styles.navbar_social}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
