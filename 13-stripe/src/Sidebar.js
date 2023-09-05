import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

// Define the Sidebar component
const Sidebar = () => {
  // Access the context values using the useGlobalContext hook
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  // Render the Sidebar component with conditional class based on 'isSidebarOpen' state
  return (
    <div className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {/* Map through 'sublinks' and render each page's links */}
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {/* Map through the links for each page and render them */}
                  {links.map((item, index) => {
                    const { label, icon, url } = item;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

// Export the Sidebar component
export default Sidebar;
