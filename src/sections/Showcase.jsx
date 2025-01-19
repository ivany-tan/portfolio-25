import React from "react";
import { projectItems } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { styles } from "../styles";

const Showcase = () => {
  return (
    <section id="showcase">
      <p
        className={`${styles.sectionSubText} md:px-[20%] text-center justify-center`}
      >
        My selected works
      </p>
      <h1
        className={`${styles.sectionHeadText} text-center justify-center mb-10`}
      >
        Showcase
      </h1>

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
