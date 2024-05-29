import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaList, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const linkStyle = (path) =>
    `flex items-center p-2 rounded ${
      activeRoute === path ? "bg-white text-gray-800" : ""
    }`;

  return (
    <div className="bg-slate-100 text-black w-64 min-h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link
            to="/my-moves"
            className={linkStyle("/my-moves")}
            onClick={() => setActiveRoute("/my-moves")}
          >
            <FaHome className="mr-2" /> My Moves
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/my-profile"
            className={linkStyle("/my-profile")}
            onClick={() => setActiveRoute("/my-profile")}
          >
            <FaUser className="mr-2" /> My Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/get-request"
            className={linkStyle("/get-request")}
            onClick={() => setActiveRoute("/get-request")}
          >
            <FaList className="mr-2" /> Get Request
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/logout"
            className={linkStyle("/logout")}
            onClick={() => setActiveRoute("/logout")}
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
