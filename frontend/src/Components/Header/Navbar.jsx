import React, { useEffect, useState } from "react";
import Logo from "../../assets/logos.png";
import NavigationLink from "./NavigationLink";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const menuItems = [
  { name: "home", path: "/", label: "Home" },
  { name: "blog", path: "/blog", label: "Blog" },
  { name: "about", path: "/about", label: "About" },
  { name: "contact", path: "/contact", label: "Contact" },
];

const Navbar = ({ activeLink: initialActiveLink }) => {
  const [activeLink, setActiveLink] = useState(initialActiveLink || "home");
  const [menuNav, setMenuNav] = useState(false);

  useEffect(() => {
    if (initialActiveLink) {
      setActiveLink(initialActiveLink);
    }
  }, [initialActiveLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update active link
    setMenuNav(false); // Close menu for mobile
  };

  const handleMenuNav = () => {
    setMenuNav((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 px-8 lg:px-16 py-2 bg-black z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center">
        <div className="min-w-[200px]">
          <img src={Logo} alt="Logo" className="w-[200px]" />
        </div>
        <div>
          <NavigationLink
            menuItems={menuItems}
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
        </div>
        <div className="flex gap-6">
          {/* <button className="text-lg font-semibold px-6 py-[6px] border-2 rounded-sm text-[#FF0000] border-white truncate">
            Login
          </button> */}
          <button className="text-lg font-semibold px-6 py-[6px] border-0 rounded-sm text-white bg-red-600 truncate">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        {/* Menu Icon */}
        <div onClick={handleMenuNav} className="cursor-pointer z-30">
          {menuNav ? (
            <AiOutlineClose size={24} color="white" />
          ) : (
            <AiOutlineMenu size={24} color="white" />
          )}
        </div>

        {/* Logo */}
        <div className="flex-grow flex justify-center">
          <img src={Logo} alt="Logo" className="w-[200px] z-40" />
        </div>

        {/* Login & Signup Buttons */}
        <div className="flex gap-4">
          {/* <button className="text-sm font-semibold px-4 py-[4px] border-2 rounded-sm text-[#FF0000] border-white truncate">
            Login
          </button> */}
          <button className="text-[17px] font-semibold px-4 py-[5px] border-0 rounded-sm text-white bg-red-600 truncate">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Navigation */}
      <div
        className={`${
          menuNav
            ? "fixed left-0 top-0 w-full h-full bg-black z-20 ease-in-out duration-300 pt-14"
            : "fixed left-[-100%] pt-14"
        }`}
      >
        <NavigationLink
          menuItems={menuItems}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
