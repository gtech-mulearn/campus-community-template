import React from "react";
import EventsCard from "../../Components/EventsCard/EventsCard";
import Navbar from "../../Components/Navbar/Navbar";
import TeamCard from "../../Components/TeamCard/TeamCard";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={styles.main_conatiner}>
        <div className={styles.first_view_container}>
          <Navbar />
          <div className={styles.first_view_texts}>
            <div className={styles.first_view_heading}>GTech MuLearn CUCEK</div>
            <p className={styles.first_view_description}>
              A nonprofit network of high school coding clubs and makers around
              the world, for the students, by the students.
            </p>
            <div className={styles.join_button}>
              <button className={styles.join_campus_button}>
                Join Us <img src="/assets/button.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <p className={styles.sv_header}>
              Events <div></div>
            </p>
          </div>
          <div className={styles.sv_events_container}>
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </div>
        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <p className={styles.tv_header}>
              Team <div></div>
            </p>
            <div className={styles.team_cards_container}>
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
