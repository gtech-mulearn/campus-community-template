import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "Why the µLearn chapter?",
      content: `Campus Chapters are a concept that are to be implemented in-house by the Students for the Students. Campus chapters seek to bring together students within a college, developing the μLearn culture from within.`,
    },
    {
      title: "What is the µLearn Chapter?",
      content: `Each campus has its own culture, with students having their specific interests and liking. Campus chapters seek to bring together students within a college, developing the μLearn culture from within.`,
    },
    {
      title: "What’s the chapter’s focus and why?",
      content: `µLearn, is an industry-enabled digital platform for peer learning to nurture students with the necessary expertise in industry from their college days. Through Mu Learn, students will get the opportunity to network, acquire and demonstrate their skills with the help of mentors and industry leaders, along with internships and training.Tech communities have had an unprecedented impact on student development in these last couple of years. These communities have helped students to think together with industry leaders, find their tech niches, and participate in boot camps to perfect their crafts.`,
    },
    {
      title: "Who is a chapter member?",
      content: `In addition to the student ambassadors, chapters must consist of chapter members. Chapter Members are µLearn membership owners who are in the chapter college, can participate in other chapter events.`,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "#202020",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
