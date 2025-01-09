import React, { useState } from "react";

const base = import.meta.env.BASE_URL;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 60; // Leave 16px room for the title
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* <button
          className="text-xl font-bold"
          onClick={() => scrollToSection("hero")}
        >
          Yujie
        </button> */}
        <a href="/" className="flex items-center space-x-2">
          {/* Icon */}
          <img src={`${base}web.svg`} alt="Web Logo" className="w-6 h-6" />
          {/* Name */}
          <span className="text-xl font-bold">YJT</span>
        </a>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-8 ${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row text-center md:text-left`}
        >
          {["About", "Experience", "Showcase"].map((section) => (
            <li key={section} className="my-4 md:my-0">
              <button
                onClick={() => scrollToSection(section.toLowerCase())}
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // Hide navbar when scrolling down
//         setShowNavbar(false);
//       } else {
//         // Show navbar when scrolling up
//         setShowNavbar(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const offset = 60; // Leave 16px room for the title
//       const sectionPosition = section.offsetTop - offset;
//       window.scrollTo({
//         top: sectionPosition,
//         behavior: "smooth",
//       });
//     }
//     setIsOpen(false); // Close menu on click
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-transform duration-300 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <div className="text-xl font-bold">MyPortfolio</div>
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//         <ul
//           className={`md:flex md:space-x-8 ${
//             isOpen ? "block" : "hidden"
//           } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row text-center md:text-left`}
//         >
//           {["Hero", "About", "Experience", "Showcase"].map((section) => (
//             <li key={section} className="my-4 md:my-0">
//               <button
//                 onClick={() => scrollToSection(section.toLowerCase())}
//                 className="text-gray-800 hover:text-blue-500 transition duration-300"
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
