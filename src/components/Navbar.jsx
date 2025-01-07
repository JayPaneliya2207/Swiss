import React from "react";
import "../style/style.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <main>
        <header className="Main-section">
          <div className="header-image">
            <img
              className="Logo-image"
              src="https://jeevannarogya.com/images/logo/jeevannarogya_(1).png"
              alt=""
            />
          </div>

          <nav>
            <div className="dropdown-wrapper">
              <input
                type="checkbox"
                id="dropdown-toggle"
                className="dropdown-toggle"
              />
              <label htmlFor="dropdown-toggle" className="dropdown-label" />
              <div className="dropdown-menu dropdown-menu--display">
                <div className="upper-triangle" />
                <ul className="dropdown-list">
                  <li>
                    <ion-icon
                      name="settings-outline"
                      className="dropdown-list-icon"
                    />
                    <span>Settings</span>
                  </li>
                  <li>
                    <ion-icon
                      name="help-circle-outline"
                      className="dropdown-list-icon"
                    />
                    <span>Help</span>
                  </li>
                  <li>
                    <ion-icon
                      name="log-out-outline"
                      className="dropdown-list-icon"
                    />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
              ☰
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Navbar;
