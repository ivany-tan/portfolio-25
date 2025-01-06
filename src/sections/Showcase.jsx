import React from "react";
import { projectItems } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Showcase = () => {
  return (
    <section id="showcase">
      <h1>SHOWCASE</h1>
      <div className="my-10 flex flex-col gap-11">
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
