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
              src="/assets/navbar/logo.svg"
              alt=""
            />
            <div className={styles.navbar_options}>
              <p className={styles.navbar_item}>Event</p>
              <p className={styles.navbar_item}>Team</p>
              <p className={styles.navbar_item}>Interest Group</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
