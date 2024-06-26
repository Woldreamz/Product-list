"use client";

// Importing necessary icons from react-icons library
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

// Footer component definition
const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mt-8 font-poppins">
    <div className="container mx-auto text-center">
      {/* Logo image */}
      <Image src="/assets/logo1.png" alt="Logo" width={150} height={150} />
      {/* Footer text including the current year */}
      <p>&copy; {new Date().getFullYear()} Product List. All rights reserved.</p>
      {/* Social media icons with links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-blue-400 hover:text-blue-500 w-6 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="text-blue-600 hover:text-blue-700 w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-pink-500 hover:text-pink-600 w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
