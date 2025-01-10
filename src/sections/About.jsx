import React from "react";
import { FiveGrid } from "../components/BentoGrid";
import { styles } from "../styles";

const About = () => {
  return (
    <section id="about">
      <h1 className={styles.sectionHeadText}>Overview</h1>
      <p className={`${styles.sectionSubText} mb-10 lg:w-[50%]`}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like Next.JS, React.JS, Node.JS,
        and Three.JS.
      </p>
      <FiveGrid />
    </section>
  );
};

export default About;
