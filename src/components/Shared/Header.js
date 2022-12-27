import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user?.displayName);
  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  let activeClass = {
    color: "#D53F8C",
    background: "none",
  };

  const mainMenu = (
    <>
      {/* <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Home
        </NavLink>
      </li> */}
      <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
        <NavLink
          to="/media"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Media
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
        <NavLink
          to="/message"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Message
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          About
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <>
          <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
            <NavLink
              to="/signin"
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li className="text-[16px] font-semibold py-3 mr-4 hover:text-[#D53F8C]">
            <NavLink
              to="/signup"
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <header className="p-4 drop-shadow-md bg-slate-100">
        <div className="container flex items-center justify-between mx-auto">
          <Link className="font-bold text-xl " to="/">
            Social <span className="text-[#D53F8C]">Activity</span>
          </Link>
          <ul className="flex items-center">{mainMenu}</ul>
          {/* <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button> */}
          <Menu className="">
            <MenuButton as={Button} className="" colorScheme="pink">
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
                <MenuItem>Docs</MenuItem>
                <MenuItem>
                  <NavLink
                    to="/signin"
                    style={({ isActive }) =>
                      isActive ? activeClass : undefined
                    }
                  >
                    Sign In
                  </NavLink>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </header>
    </div>
  );
};

export default Header;
