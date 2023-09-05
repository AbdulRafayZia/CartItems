import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

// Define the Submenu component
const Submenu = () => {
  // Access context values using the useGlobalContext hook
  const {
    isSubmenuOpen,
    page: { page, links },
    location
  } = useGlobalContext();

  // Create a ref to the submenu container
  const container = useRef(null);

  // Initialize the number of columns in the submenu
  const [columns, setColumns] = useState("col-2");

  // Update submenu position and columns based on page, location, and links
  useEffect(() => {
    setColumns("col-2");

    // Get the center and bottom coordinates from the location
    const { center, bottom } = location;

    // Get a reference to the submenu element
    const submenu = container.current;

    // Set the submenu's position based on center and bottom coordinates
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    // Adjust the number of columns based on the number of links
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  // Render the Submenu component with conditional class
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {/* Map through the links and render them */}
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

// Export the Submenu component
export default Submenu;
