import React from "react";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/foods", label: "Foods" },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-gray-200 py-2 rounded-lg mt-2">
      <div className="flex items-center justify-center gap-10">
        {navLinks.map((link) => (
          <a key={link.path} href={link.path}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
