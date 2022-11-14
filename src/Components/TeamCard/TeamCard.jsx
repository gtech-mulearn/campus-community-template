import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ image, name, linkedin, position }) => {
  return (
    <div className={styles.team_card_container}>
      <div className={styles.team_card}>
        {image && <img src={image} alt="" className={styles.card_image} />}
        {name && linkedin && (
          <p className={styles.name_label}>
            {name}{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/assets/team/linkico.png" alt="" />
            </a>
          </p>
        )}
        {position && <p className={styles.position_label}>{position}</p>}
      </div>
    </div>
  );
};

export default TeamCard;
