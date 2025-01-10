import React from "react";
import { projectItems } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { styles } from "../styles";

const Showcase = () => {
  return (
    <section id="showcase">
      <h1 className={`${styles.sectionHeadText} text-center justify-center`}>
        Showcase
      </h1>
      <p
        className={`${styles.sectionSubText} mb-10 md:px-[20%] text-center justify-center`}
      >
        The following shows my selected works including responsive web & mobile
        development.
      </p>
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
