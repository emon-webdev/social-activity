import React, { useContext, useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
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

  const [isActive, setIsActive] = useState(false);

  const handleHumbagerMenu = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="header p-4 relative drop-shadow-md bg-slate-100">
      <div className="container mx-auto px-4">
        <nav className="navbar__menu">
          {/* <Link className="navbar-brand" to="/">
            <img src="" alt="Car Finder" />
          </Link> */}
          <Link className="navbar-brand font-bold text-2xl flex-1" to="/">
            Social <span className="text-[#D53F8C]">Activity</span>
          </Link>
          <div>
            {isActive ? (
              <button
                className="navbar-toggler text-2xl font-bold text-[#D53F8C]"
                type="button"
                onClick={handleHumbagerMenu}
              >
                <AiOutlineClose />
              </button>
            ) : (
              <button
                className="navbar-toggler text-2xl font-bold text-[#D53F8C]"
                type="button"
                onClick={handleHumbagerMenu}
              >
                <AiOutlineBars />
              </button>
            )}
          </div>

          <div className={isActive ? "navbar-collapsed" : "navbar-collapse"}>
            <ul className="navbar__nav">
              <li className="text-[16px] w-full md:w-auto font-semibold  md:mr-4 hover:text-[#D53F8C] border-b border-[#D53F8C] md:border-0">
                <NavLink
                  to="/media"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  Media
                </NavLink>
              </li>
              <li className="text-[16px] w-full md:w-auto font-semibold md:mr-4 hover:text-[#D53F8C] border-b border-[#D53F8C] md:border-0">
                <NavLink
                  to="/message"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  Message
                </NavLink>
              </li>
              <li className="text-[16px] w-full md:w-auto font-semibold  md:mr-4 hover:text-[#D53F8C] border-b border-[#D53F8C] md:border-0">
                <NavLink
                  to="/about"
                  className="w-full block py-3"
                  style={({ isActive }) => (isActive ? activeClass : undefined)}
                >
                  About
                </NavLink>
              </li>
              {user?.email ? (
                <>
                  <li className="text-[16px] w-full md:w-auto font-semibold py-3 md:mr-4 ">
                    <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-[16px] w-full md:w-auto font-semibold  md:mr-4 hover:text-[#D53F8C] border-b border-[#D53F8C] md:border-0">
                    <NavLink
                      to="/signin"
                      className="w-full block py-3"
                      style={({ isActive }) =>
                        isActive ? activeClass : undefined
                      }
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li className="text-[16px] w-full md:w-auto font-semibold  md:mr-4 hover:text-[#D53F8C]">
                    <NavLink
                      to="/signup"
                      className="w-full block py-3"
                      style={({ isActive }) =>
                        isActive ? activeClass : undefined
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
