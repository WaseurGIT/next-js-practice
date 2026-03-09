import Link from "next/link";
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
    <div className="max-w-7xl bg-white/30 mx-auto py-2 rounded-lg flex items-center justify-between px-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Next.js</h1>
      </div>

      <div className="flex items-center justify-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="text-white hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
