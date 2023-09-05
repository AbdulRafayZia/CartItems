// Import necessary React components and hooks
import React, { useState, useContext } from 'react';

// Import the 'sublinks' data from an external source
import sublinks from './data';

// Create a React context called 'AppContext'
const AppContext = React.createContext();

// Create an 'AppProvider' component that will wrap its children with context
const AppProvider = ({ children }) => {
  // Define state variables using the 'useState' hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({
    page: '', // Initialize the 'page' property with an empty string
    links: [] // Initialize the 'links' property with an empty array
  });
  const [location, setLocation] = useState({});

  // Function to open the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  // Function to open a submenu
  const openSubmenu = (text, coordinates) => {
    // Find the corresponding 'page' object from 'sublinks' based on the 'text'
    const page = sublinks.find((links) => links.page === text);
    
    // Set the 'page' and 'location' state variables based on the submenu
    setPage(page);
    setLocation(coordinates);
    
    // Open the submenu
    setIsSubmenuOpen(true);
  }

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  // Function to close the submenu
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }

  // Provide the context values to the wrapped children components
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        page,
        location
      }}>
      {children}
    </AppContext.Provider>
  )
}

// Create a custom hook called 'useGlobalContext' to access the context values
export const useGlobalContext = () => {
  return useContext(AppContext);
}

// Export the 'AppContext' and 'AppProvider' components for use in other parts of the application
export { AppContext, AppProvider }
