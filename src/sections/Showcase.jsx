import React from "react";
import { projectItems } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { styles } from "../styles";
import AnimatedHeading from "../components/AnimatedHeading";

const Showcase = () => {
  return (
    <section id="showcase">
      <AnimatedHeading
        subheading="My selected works"
        heading="Showcase"
        subheadingClassName={`${styles.sectionSubText} md:px-[20%]`}
        headingClassName={`${styles.sectionHeadText} mb-10`}
      />

      <div className="my-10 flex flex-col gap-8 sm:gap-12">
        {projectItems.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            img={item.img}
            tech={item.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
