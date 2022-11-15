import React from "react";
import styles from "./EventsCard.module.css";

const EventsCard = ({ image, name, tags, description, registerlink }) => {
  return (
    <div className={styles.event_card_container}>
      <div className={styles.event_card}>
        {image && <img className={styles.card_image} src={image} alt="" />}

        <p className={styles.event_name}>{name}</p>
        <div className={styles.event_tags}>
          {tags && tags.map((tag) => <p className={styles.event_tag}>{tag}</p>)}
        </div>
        <p className={styles.event_description}>{description}</p>
        {registerlink && (
          <a href={registerlink} target="_blank" rel="noopener noreferrer">
            <p className={styles.register_link}>Register Now</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventsCard;
