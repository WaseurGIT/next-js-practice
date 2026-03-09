"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm opacity-90">
              My first Next.js project exploring modern web development with
              React and Next.js framework.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm opacity-90">
              Email:{" "}
              <Link
                href="mailto:hello@example.com"
                className="hover:opacity-75 transition"
              >
                hello@example.com
              </Link>
            </p>
            <p className="text-sm opacity-90 mt-2">Follow us on social media</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-85">
            <p>&copy; 2026 My First Next.js Project. All rights reserved.</p>
            <p>Built with React & Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
