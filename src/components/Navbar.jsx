import React from "react";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/foods", label: "Foods" },
    { path: "/country", label: "Countries" },
  ];

  return (
    <div className="max-w-7xl bg-white/30 mx-auto py-2 rounded-lg">
      <div className="flex items-center justify-center gap-10">
        {navLinks.map((link) => (
          <a key={link.path} href={link.path} className="text-white hover:underline">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
