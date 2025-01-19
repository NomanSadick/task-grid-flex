import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-pink-300 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">TripNest</div>

        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        <button className="md:hidden text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
