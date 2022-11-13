import React from "react";
import EventsCard from "../../Components/EventsCard/EventsCard";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <Navbar />
      <EventsCard/>
    </>
  );
};

export default Landing;
