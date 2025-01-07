// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";
// import Allusers from "../pages/users/Allusers";
// import {sidebarData} from "../Utils/sidebarmenu"
// const AppRoutes = () => {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/";
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       {!isLoginPage && <Navbar toggleSidebar={toggleSidebar} />}
//       <div
//         className={`main-content ${
//           isLoginPage ? "login-content" : "pages-section"
//         }`}
//       >
//         {!isLoginPage && (
//           <Sidebar
//             menuItems={sidebarData}
//             isSidebarOpen={isSidebarOpen}
//             toggleSidebar={toggleSidebar}
//           />
//         )}
//         <div
//           className={`content container-section ${
//             isSidebarOpen ? "" : "full-width"
//           }`}
//         >
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/users/allusers" element={<Allusers />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppRoutes;
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Allusers from "../pages/users/Allusers";
import { sidebarData } from "../Utils/sidebarmenu";

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth > 768 // Default to open if the screen width is greater than 768px
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Ensure the sidebar is responsive on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {!isLoginPage && <Navbar toggleSidebar={toggleSidebar} />}
      <div
        className={`main-content ${
          isLoginPage ? "login-content" : "pages-section"
        }`}
      >
        {!isLoginPage && (
          <Sidebar
            menuItems={sidebarData}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
        <div
          className={`content container-section ${
            isSidebarOpen ? "" : "full-width"
          }`}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/allusers" element={<Allusers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
