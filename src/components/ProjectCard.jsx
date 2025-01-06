import React from "react";

function ProjectCard({ id, icon, title, img, description, tech }) {
  console.log("ABC: ", tech[0]);
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section
        className="bg-white w-full border border-black/5 
      rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem]
      hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white 
      dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="lg:pl-10 sm:pr-2 sm:pt-4 
        sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[40%]"
        >
          <h3 className="text-2xl lg:text-3xl lg:pb-3 font-extrabold">
            {icon} {title}
          </h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70 text-[1rem] lg:text-[18px]">
            {description}
          </p>
          <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto">
            {tech.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-4 py-1 text-[0.75rem] lg:text-[1rem] tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={img}
          alt="Project I worked"
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
