import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const colors = {
  snow: "#FFFAFA",
  ghostwhite: "#F8F8FF",
  whitesmoke: "#F5F5F5",
  seashell: "#FFF5EE",
  blue: "#374785",
  navy: "#24305E",
  yellow: "#F8E9A1",
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: `7px solid ${experience.icon_bg}` }}
      contentStyle={{
        background: colors.whitesmoke,
        color: "#24305E",
        borderBottom: "8px",
        borderBottomColor: experience.icon_bg,
        borderStyle: "solid",
        borderRadius: "24px",
        boxShadow: "none",
      }}
      date={experience.date}
      iconStyle={{ background: experience.icon_bg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h1>EXPERIENCE</h1>
      <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
