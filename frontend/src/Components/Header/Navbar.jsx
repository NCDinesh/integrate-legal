import React, { useEffect, useState } from 'react'
import Logo from "../../assets/logos.png"
import NavigationLink from './NavigationLink'

const menuItems = [
    { name: "home" , path: "/", label: "Home"},
    { name: "blog" , path: "/blog", label: "Blog"},
    { name: "about" , path: "/about", label: "About"},
    { name: "contact" , path: "/contact", label: "Contact"}
]


const Navbar = ({activeLink: initialActiveLink}) => {
    const [activeLink, setActiveLink] = useState(initialActiveLink || "home")

    
    useEffect(() => {
        if(initialActiveLink) {
            setActiveLink(initialActiveLink);
        }
    },[initialActiveLink])

    const handleLinkClick = (Link) => {
        if(activeLink !== Link) {
            setActiveLink(Link)
        }
    }


  return (
    <nav className="sticky top-0 px-4 py-3 bg-black flex justify-around items-center">
      <div className="w-[200px] ">
        <img src={Logo} alt="" />
      </div>
      <div>
        <NavigationLink
          menuItems={menuItems}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      </div>
      <div className="flex gap-6">
        <button className="text-lg font-semibold px-6 py-[6px] border-2 rounded-sm text-[#FF0000] border-white">
          Login
        </button>
        <button className="text-lg font-semibold px-6 py-[6px] border-0 rounded-sm text-white bg-[#FF0000]">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar