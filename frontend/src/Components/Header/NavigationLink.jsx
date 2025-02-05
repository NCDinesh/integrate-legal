import React from 'react'
import { Link } from "react-router-dom"

const NavigationLink = (props) => {
    const { menuItems, activeLink, handleLinkClick } = props;
  return (
    <div>
      <ul className="flex gap-16 justify-center min-w-[48vw] truncate font-bold cursor-pointer">
        {menuItems.map((item, index) => (
          <li key={index} className="text-xl font-semibold text-white hover:text-[#FF0000] ease">
            <Link to={item.path} onClick={() => handleLinkClick(item.name)}>
              <span
                className={`${
                  activeLink === item.name
                    ? "text-[#FF0000]"
                    : ""
                } transition-all`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationLink