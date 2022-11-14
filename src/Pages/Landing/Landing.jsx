import React from "react";
import EventsCard from "../../Components/EventsCard/EventsCard";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
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
            {/* Change this to your college name */}
            <div className={styles.first_view_heading}>GTech µLearn CUCEK</div>
            <p className={styles.first_view_description}>
              A nonprofit network of high school coding clubs and makers around
              the world, for the students, by the students.
            </p>
            <div className={styles.join_button}>
              {/* Inside the href add link for joining your chapter */}
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <button className={styles.join_campus_button}>
                  Join Us <img src="/assets/button.png" alt="" />
                </button>
              </a>
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
            <EventsCard
              image="#" //Add the path to the image here
              name="Define Hackathon" // Add the name of the event here
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam." //Add the description of the event.
              tags={["Hackathon", "Networking"]} //Add the Tags for the event.
              registerlink="#" //Add the link for register to the event.
            />
            <EventsCard
              image="#"
              name="Define Hackathon"
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
              tags={["Hackathon", "Networking"]}
              registerlink="#"
            />
            <EventsCard
              image="#"
              name="Define Hackathon"
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
              tags={["Hackathon", "Networking"]}
              registerlink="#"
            />
          </div>
        </div>
        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <p className={styles.tv_header}>
              Team <div></div>
            </p>
            <div className={styles.team_cards_container}>
              <TeamCard
                image="/assets/team/image1.png" //Add the image link here.
                name="Andrea Janet" //Add the name of the Team Member.
                linkedin="#" //LinkedIn Profile of Team Member.
                position="Web Lead" //Add the Position of the Team Member.
              />
              <TeamCard
                image="/assets/team/image1.png"
                name="Andrea Janet"
                linkedin="#"
                position="Web Lead"
              />
              <TeamCard
                image="/assets/team/image1.png"
                name="Andrea Janet"
                linkedin="#"
                position="Web Lead"
              />
              <TeamCard
                image="/assets/team/image1.png"
                name="Andrea Janet"
                linkedin="#"
                position="Web Lead"
              />
              <TeamCard
                image="/assets/team/image1.png"
                name="Andrea Janet"
                linkedin="#"
                position="Web Lead"
              />
            </div>
          </div>
        </div>
        <div className={styles.faq_view_container}>
          <div className={styles.faq_view}>
            <p className={styles.fv_header}>
              Frequently Asked Questions <div></div>
            </p>
            <FAQ />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
