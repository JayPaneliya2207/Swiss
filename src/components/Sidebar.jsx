import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Sidebar.css";
import { sidebarData } from "../Utils/sidebarmenu"; 

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menuLabel) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel],
    }));
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <ul>
        {sidebarData.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.link || "#"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => menu.submenu?.length && toggleSubmenu(menu.label)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                {menu.icon} {menu.label}
              </span>
              {menu.submenu?.length > 0 && (
                <span className="dropdown-arrow">
                  {openSubmenus[menu.label] ? "▲" : "▼"}
                </span>
              )}
            </NavLink>

            {menu.submenu?.length > 0 && openSubmenus[menu.label] && (
              <ul className="submenu">
                {menu.submenu.map((submenu, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={submenu.link}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {submenu.icon} {submenu.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
