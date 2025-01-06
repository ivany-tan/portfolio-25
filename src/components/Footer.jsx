const Footer = () => {
  const startYear = 2024; // The year you started the project
  const currentYear = new Date().getFullYear();
  const displayYear =
    startYear === currentYear ? currentYear : `${startYear}–${currentYear}`;

  return (
    <footer className="flex justify-center py-10">
      <p className="text-gray-300 cursor-default">
        © {displayYear} <strong>Yujie Tan</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
