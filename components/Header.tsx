import Image from "next/image";

const Header = () => (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Image 
       src='/public/assets/logo.png' 
       alt="Logo" 
       className="w-16 h-16"
       width={100} 
       height={100} 
      />
      <nav>
        <a href="#home" className="mx-2 hover:text-gray-300">Home</a>
        <a href="#about" className="mx-2 hover:text-gray-300">About</a>
        <a href="#contact" className="mx-2 hover:text-gray-300">Contact</a>
      </nav>
    </header>
  );
  
  export default Header;
  