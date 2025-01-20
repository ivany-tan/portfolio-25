import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeading = ({
  heading,
  subheading,
  headingClassName = "",
  subheadingClassName = "",
}) => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    if (subheadingRef.current && headingRef.current) {
      // Animate subheading
      gsap.fromTo(
        subheadingRef.current,
        { y: -30, opacity: 0 }, // From this state
        {
          y: 0,
          opacity: 1, // To this state
          duration: 1,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 80%", // Trigger when element is in the viewport
            toggleActions: "play none none none",
          },
        }
      );

      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { x: -50, opacity: 0 }, // From this state
        {
          x: 0,
          opacity: 1, // To this state
          duration: 1.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="text-center">
      <p ref={subheadingRef} className={subheadingClassName}>
        {subheading}
      </p>
      <h1 ref={headingRef} className={headingClassName}>
        {heading}
      </h1>
    </div>
  );
};

export default AnimatedHeading;
