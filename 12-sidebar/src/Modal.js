// Import the React library and the FaTimes icon from react-icons.
import React from 'react';
import { FaTimes } from 'react-icons/fa';

// Import the useGlobalContext hook from the context file.
import { useGlobalContext } from './context';

// Create a component called Modal.
const Modal = () => {

  // Get the isModalOpen and closeModal functions from the global context.
  const { isModalOpen, closeModal } = useGlobalContext();

  // Return the Modal component.
  return (
    <div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      {/* // This is the modal overlay. */}
      <div className='modal-container'>
        {/* // This is the header of the modal. */}
        <h3>Model content</h3>

        {/* // This is the button to close the modal. */}
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

// Export the Modal component.
export default Modal;
