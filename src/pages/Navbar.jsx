import React, { useEffect, useState } from "react";
import kushelLogo from "../assets/images/kusheldigi-logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  "About Us",
  "Services",
  "Our Portfolio",
  "Testimonials",
  "Contact Us",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
       
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-white fixed top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full mx-auto h-[101px] shadow-md px-10 flex justify-between items-center">

        {/* Logo */}
        <img
          className="w-[220px]"
          src={kushelLogo}
          alt="Kushel Digi Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-12 items-center">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href="#" className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Call Button */}
          <button className="hidden md:block bg-[#3C83CB] text-white w-[251px] p-3 tracking-[1px] shadow-md">
            CALL NOW : 9045301702
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-6">
          {navLinks.map((item, index) => (
            <a key={index} href="#" className="block">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;