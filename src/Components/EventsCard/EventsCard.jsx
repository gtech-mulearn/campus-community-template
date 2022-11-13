import React from "react";
import styles from "./EventsCard.module.css";

const EventsCard = () => {
  return (
    <div className={styles.event_card_container}>
      <div className={styles.event_card}>
        <div className={styles.card_image}>
          <img src="" alt="" />
        </div>
        <p className={styles.event_name}>Define Hackathon 2022</p>
        <div className={styles.event_tags}>
          <p className={styles.event_tag}>Hackathon</p>
          <p className={styles.event_tag}>Newtworking</p>
        </div>
        <p className={styles.event_description}>
          Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam.
        </p>
        <p className={styles.register_link}>Register Now</p>
      </div>
    </div>
  );
};

export default EventsCard;
