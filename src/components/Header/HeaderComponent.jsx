import React, { useState } from "react";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";
import {
  MdOutlineRestaurantMenu,
  MdOutlineRestaurant,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

const HeaderComponent = () => {
  const items = useSelector((state) => state.cart);
  const [nav, setNav] = useState(false);
  // const uid = new Date().getTime()

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full bg-white flex items-center justify-center px-10 py-8 dark:bg-black dark:text-white">
        <ul className=" hidden md:flex items-center justify-center gap-5">
          {NavItems.map((item) => (
            <li
              key={item.title}
              className="capitalize hover:text-yellow text-lightBlack-0 transition-all duration-200"
            >
              <NavLink
                key={item.title}
                to={`/${item.link}`}
                className={({ isActive }) =>
                  `${isActive ? `underline decoration-red` : ""}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink to={"/cart"}>
              <div className="relative">
                <BsCart4 className="text-2xl" />
                <div className="absolute -top-3 -right-3 bg-red text-white rounded-full px-1.5 text-sm">
                  {items.length}
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
        <button
          onClick={handleNav}
          className="md:hidden block text-2xl cursor-pointer text-yellow transition-all ease-in-out duration-500 focus:outline-none"
        >
          {nav ? <MdOutlineRestaurantMenu /> : <MdOutlineRestaurant />}
        </button>
        {/* mobile responsive */}

        <ul
          className={
            nav
              ? `md:hidden fixed left-0 mt-[700px] items-center justify-center space-y-5 h-screen bg-black w-full text-white text-center translate-y-6 ease-in-out duration-500`
              : "fixed left-[-100%]"
          }
        >
          {NavItems.map((item) => {
            return (
              <>
                <li className="capitalize font-navtitle hover:text-yellow text-lightBlack-0 transition-all duration-200" key={item.title}>
                  <NavLink to={`/${item.link}`}>{item.title}</NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
