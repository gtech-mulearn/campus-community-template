import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_view_container}>
        <div className={styles.footer_view}>
          <div className={styles.footer_first_section}>
            <p className={styles.section_label}>Menu</p>
            <div className={styles.section_links}>
              <p className={styles.section_link}>Events</p>
              <p className={styles.section_link}>Team</p>
              <p className={styles.section_link}>Interest Groups</p>
            </div>
            <div className={styles.section_icons}>
              <img
                src="/assets/footer/twitter.png"
                alt=""
                className={styles.section_icon}
              />
              <img
                src="/assets/footer/linkedin.png"
                alt=""
                className={styles.section_icon}
              />
              <img
                src="/assets/footer/instagram.png"
                alt=""
                className={styles.section_icon}
              />
            </div>
          </div>
          <div className={styles.footer_second_section}>
            <p className={styles.section_label}>More Links</p>
            <div className={styles.section_links}>
              <p className={styles.section_link}>Official Website</p>
              <p className={styles.section_link}>Join MuLearn</p>
              <p className={styles.section_link}>Others</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
