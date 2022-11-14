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
              {/* Instead of the # replace with respective links */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <p className={styles.section_link}>Events</p>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <p className={styles.section_link}>Team</p>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <p className={styles.section_link}>Interest Groups</p>
              </a>
            </div>
            <div className={styles.section_icons}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/footer/twitter.png"
                  alt=""
                  className={styles.section_icon}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/footer/linkedin.png"
                  alt=""
                  className={styles.section_icon}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/footer/instagram.png"
                  alt=""
                  className={styles.section_icon}
                />
              </a>
            </div>
          </div>
          <div className={styles.footer_second_section}>
            <p className={styles.section_label}>More Links</p>
            <div className={styles.section_links}>
              <a
                href="http://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.section_link}>Official Website</p>
              </a>
              <a
                href="http://discord.mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.section_link}>Join MuLearn</p>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <p className={styles.section_link}>Others</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
