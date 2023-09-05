// Import the React library, the useState hook, and the useContext hook from react.
import React, { useState, useContext } from 'react';

// Create a custom context called AppContext.
const AppContext = React.createContext();

// Create a component called AppProvider.
const AppProvider = ({ children }) => {

  // declare two state variables, one for the sidebar open state and one for the modal open state.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // create functions to open and close the sidebar and modal.
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Return the AppProvider component.
  return (
    <AppContext.Provider value={
      {
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        isModalOpen,
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

// Export the useGlobalContext hook.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// Export the AppContext and AppProvider components.
export { AppContext, AppProvider };
