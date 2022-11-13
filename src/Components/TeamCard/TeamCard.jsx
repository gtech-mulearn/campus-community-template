import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = () => {
  return (
    <div className={styles.team_card_container}>
      <div className={styles.team_card}>
        <img
          src="/assets/team/image1.png"
          alt=""
          className={styles.card_image}
        />
        <p className={styles.name_label}>
          Aswin Asok <img src="/assets/team/linkico.png" alt="" />
        </p>
        <p className={styles.position_label}>Web Lead</p>
      </div>
    </div>
  );
};

export default TeamCard;
