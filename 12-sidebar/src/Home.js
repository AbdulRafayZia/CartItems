// Import the React library and the FaBars icon from react-icons.
import React from 'react';
import { FaBars } from 'react-icons/fa';

// Import the useGlobalContext hook from the context file.
import { useGlobalContext } from './context';

// Create a component called Home.
const Home = () => {

  // Get the openSidebar and openModal functions from the global context.
  const { openSidebar, openModal } = useGlobalContext();

  // Return the Home component.
  return (
    <main>
      {/* // This is a button that toggles the sidebar. */}
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>

      {/* // This is a button that opens the modal. */}
      <button onClick={openModal} className='btn'>
        show model
      </button>
    </main>
  );
};

// Export the Home component.
export default Home;
