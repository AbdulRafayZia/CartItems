import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

// Define the Navbar component
const Navbar = () => {
  // Access the context values using the useGlobalContext hook
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  // Function to display the submenu when hovering over a link button
  const displaySubmenu = (e) => {
    // Get the text content of the link button that triggered the event
    const page = e.target.textContent;

    // Get the position of the link button for submenu placement
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    // Log the center and bottom positions for debugging
    console.log(center);
    console.log(bottom);

    // Open the submenu for the specified page at the calculated position
    openSubmenu(page, { center, bottom });
  };

  // Function to handle closing the submenu
  const handleSubmenu = (e) => {
    // Check if the event target does not have the "link-btn" class
    if (!e.target.classList.contains("link-btn")) {
      // Close the submenu
      closeSubmenu();
    }
  };

  // Render the Navbar component
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            {/* Button for the "products" link */}
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            {/* Button for the "developers" link */}
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            {/* Button for the "company" link */}
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn"> Sign in</button>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
