import React from 'react'
import { Link } from "react-router-dom"

const NavigationLink = (props) => {
    const { menuItems, activeLink, handleLinkClick } = props;
  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => handleLinkClick(item.name)}>
              <span
                className={`${
                  activeLink === item.name
                    ? "underline decoration-red-500 underline-offset-[5px]"
                    : "hover:no-underline hover:border-b-2 hover:border-red-500"
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