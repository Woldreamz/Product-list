"use client";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mt-8">
    <div className="container mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} Product List. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="text-blue-400 hover:text-blue-500 w-6 h-6" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-blue-600 hover:text-blue-700 w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-pink-500 hover:text-pink-600 w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
