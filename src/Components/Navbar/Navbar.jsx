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
              {/* Replace /# with Respective Links */}
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <p className={styles.navbar_item}>Events</p>
              </a>

              <a href="/#" target="_blank" rel="noopener noreferrer">
                <p className={styles.navbar_item}>Team</p>
              </a>

              <a href="/#" target="_blank" rel="noopener noreferrer">
                <p className={styles.navbar_item}>Interest Group</p>
              </a>
            </div>

            <div className={styles.navbar_socials}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {/* Replace # with Respective Links */}
                <img
                  src="/assets/navbar/twitter.png"
                  alt=""
                  className={styles.navbar_social}
                />
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/navbar/linkedin.png"
                  alt=""
                  className={styles.navbar_social}
                />
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/navbar/instagram.png"
                  alt=""
                  className={styles.navbar_social}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
