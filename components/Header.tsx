"use client";

// Import necessary hooks and components
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  // State hooks to manage menu open/close state and active menu item
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-center my-4 font-poppins">
      <div className="flex flex-col justify-between items-center md:flex-row md:justify-between px-4 ">
        {/* Logo image */}
        <Image src="/assets/logo1.png" alt="Logo" width={100} height={100} />
        <h1 className="text-3xl font-bold">Product List</h1>
        {/* Menu toggle button */}
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={toggleMenu}
        >
          {menuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>
      {menuOpen && (
        <nav className="mt-4 p-4 bg-white shadow-lg rounded-lg">
          <ul className="flex flex-col items-center space-y-2">
            {['Home', 'Products', 'Contact'].map((item) => (
              <li
                key={item}
                className={`p-2 ${
                  activeElement === item
                    ? 'text-blue-500 font-bold'
                    : 'text-gray-700'
                } cursor-pointer`}
                onClick={() => setActiveElement(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
