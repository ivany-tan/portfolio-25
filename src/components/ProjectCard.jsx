import React from "react";

function ProjectCard({ id, icon, title, img, description, tech }) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="single-proj-container sm:group-even:pl-8">
        <div className="text-container sm:group-even:ml-[40%]">
          <h3>
            {icon} {title}
          </h3>
          <p>{description}</p>
          <ul>
            {tech.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <img
          src={img}
          alt="Project"
          //   width="500"
          height="100"
          className="absolute hidden w-[400px] lg:w-[500px] sm:block top-8 -right-40
             rounded-t-lg shadow-2xl transition
             group-hover:scale-[1.04] group-hover:-translate-x-3
             group-hover:translate-y-3 group-hover:-rotate-2
             group-even:group-hover:-translate-x-3
             group-even:group-hover:translate-y-3
             group-even:group-hover:-rotate-2
             group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
}

export default ProjectCard;
