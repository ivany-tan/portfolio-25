import React from "react";
import { FiveGrid } from "../components/BentoGrid";
import { styles } from "../styles";

const About = () => {
  return (
    <section id="about">
      {/* <p className={`${styles.sectionSubText} lg:max-w-[60%]`}>
        2 years experience in <br />
        Next.JS, React.JS, Node.JS, mySQL & mongoDB.
      </p> */}
      <h1 className={`${styles.sectionHeadText} mb-10`}>Overview</h1>
      <FiveGrid />
    </section>
  );
};

export default About;
