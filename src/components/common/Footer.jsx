// src/components/common/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Branding */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              NextRoom
            </Link>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/donation-requests" className="hover:text-gray-200">Donation Requests</Link>
            <Link to="/blog" className="hover:text-gray-200">Blog</Link>
            <Link to="/funding" className="hover:text-gray-200">Funding</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </div>

          {/* Social / Contact */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-gray-200">FB</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-gray-200">TW</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-200">LI</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} NextRoom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;