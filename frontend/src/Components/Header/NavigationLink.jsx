import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ menuItems, activeLink, handleLinkClick }) => {
  return (
    <div>
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 lg:gap-18 justify-center truncate font-bold cursor-pointer">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`text-[18px] font-semibold ${
                activeLink === item.name
                  ? "text-[#FF0000]"
                  : "text-white hover:text-[#FF0000]"
              } transition-all`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Links */}
      <ul className="flex md:hidden flex-col items-center gap-6 py-10 truncate font-bold cursor-pointer">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`text-[18px] font-semibold ${
                activeLink === item.name
                  ? "text-[#FF0000]"
                  : "text-white hover:text-[#FF0000]"
              } transition-all`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLink;
