/**
 * TODO:
 * 1. ...
 * 2. ...
 */

import React, { useState } from "react";
import { socialMedia } from "../constants";
import {
  IoCopyOutline,
  IoCheckmarkSharp,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoDocker,
  IoLogoTableau,
  IoLogoGithub,
  IoServerOutline,
  IoGitBranch,
} from "react-icons/io5";

export const SkillIcons = () => (
  <div className="flex flex-wrap gap-2 mb-2 text-white text-2xl lg:text-3xl justify-center">
    <IoLogoHtml5 />
    <IoLogoCss3 />
    <IoLogoJavascript />
    <IoLogoReact />
    <IoLogoNodejs />
    <IoLogoPython />
    <IoServerOutline />
    <IoLogoDocker />
    <IoLogoTableau />
    <IoGitBranch />
  </div>
);

const items = [
  {
    id: 1,
    title: "full stack software developer.",
    subtitle: "I am Yujie, a fresh new postgrad and a",
    img: "",
    icon: <span className="grid-icon">👨🏻‍💻</span>,
    bgColor: "bg-blue-100", // Light blue background
    titleColor: "text-pink", // Pink title color
    subtitleColor: "text-white", // White subtitle color
  },
  {
    id: 2,
    title: "Commerce & IT",
    subtitle: "Creativity powered by my multidisciplinary background",
    img: "",
    icon: <span className="grid-icon">🎓</span>,
    bgColor: "bg-pink", // Pink background
    titleColor: "text-navy", // Dark blue title color
    subtitleColor: "text-yellow", // Yellow subtitle color
  },
  {
    id: 3,
    title: "my tech stack.",
    subtitle: "I constantly try to learn new and improve",
    img: "",
    icon: (
      <span>
        <SkillIcons />
      </span>
    ),
    bgColor: "bg-navy", // Dark blue background
    titleColor: "text-yellow", // Yellow title color
    subtitleColor: "text-white", // White subtitle color
  },
  {
    id: 4,
    title: "Connections.",
    subtitle: "",
    img: "",
    bgColor: "bg-yellow", // Yellow background
    titleColor: "text-blue", // Medium dark blue title color
    subtitleColor: "text-pink", // Pink subtitle color
  },
  {
    id: 5,
    title: "Let's work together.",
    subtitle: "Great idea in your mind?",
    img: "",
    icon: <span className="grid-icon">💡</span>,
    bgColor: "bg-blue", // Medium blue background
    titleColor: "text-white", // White title color
    subtitleColor: "text-pink", // Pink subtitle color
  },
];

export const FiveGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "jiejie.ivan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Utility function to determine classes based on id
  const getSpanClasses = (id) => {
    let classes = "";
    if (id === 1 || id === 5) {
      classes += " lg:col-span-2 card";
    }
    if (id === 2 || id === 4) {
      classes += "card";
    }
    if (id === 3) {
      classes += " lg:row-span-2 md:row-span-2 vertical-card";
    }
    return classes;
  };

  return (
    <div className="bento-grid">
      {items.map(
        ({
          id,
          title,
          subtitle,
          img,
          icon,
          bgColor,
          titleColor,
          subtitleColor,
        }) => (
          <div
            key={id}
            className={`${bgColor} ${getSpanClasses(id)} single-grid`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="content flex flex-col items-center justify-center p-4 gap-1">
              {icon}
              <p className={`${subtitleColor} grid-subtitle`}>{subtitle}</p>
              <h2 className={`${titleColor} grid-title`}>{title}</h2>

              {/* Social Media Buttons */}
              {id === 4 && (
                <div className="flex gap-5 mt-2">
                  {socialMedia.map(({ name, icon, url }) => (
                    <a href={url} key={name}>
                      <img
                        className="grid-social-media-btn"
                        src={icon}
                        alt={name}
                      />
                    </a>
                  ))}
                </div>
              )}

              {/* Email Button */}
              {id === 5 && (
                <button className="grid-email-btn" onClick={handleCopy}>
                  {copied ? (
                    <>
                      Email is copied <IoCheckmarkSharp />
                    </>
                  ) : (
                    <>
                      Copy my email <IoCopyOutline />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};
