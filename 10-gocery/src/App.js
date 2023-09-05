import React, { useState, useEffect } from 'react';
import List from './List'; // Importing the List component
import Alert from './Alert'; // Importing the Alert component
import { type } from '@testing-library/user-event/dist/type'; // Importing 'type' from a testing library (not used in this code)

// Here, a function named getLocalStorage is defined. This function retrieves the 'list' 
//item from the browser's local storage. If the 'list' item exists, it is parsed from JSON format to a JavaScript object, 
//otherwise, an empty array is returned.
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list')); // Parsing the stored list data
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState(''); //name represents the value of the input field.
  const [list, setList] = useState(getLocalStorage()); // list holds the list of items, initialized with the value returned by the getLocalStorage function.
  const [isEditing, setIsEditing] = useState(false); // isEditing is a flag indicating whether the user is in edit mode.
  const [editID, setEditID] = useState(null); //editID stores the ID of the item being edited.
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' }); // alert hold information about the alert msg , including whether to show it, the message itself, and its type.

  // The handleSubmit function is called when the form is submitted. 
  //It first prevents the default form submission behavior. It then checks whether the name field is empty.
  // If so, an alert is shown indicating that a value should be entered. If name is not empty and the user is in editing mode,
  // the code updates the specific item's title in the list array. If not editing, a new item is added to the list array.
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior

    if (!name) {
      showAlert(true, 'danger', 'please enter the value'); // Display an alert if the name is empty
    } else if (name && isEditing) {
      // Editing an existing item
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }; // Update the title of the edited item
          }
          return item;
        })
      );
      setName(''); // Clear the input field
      setEditID(null); // Reset the editID
      setIsEditing(false); // Exit editing mode
      showAlert(true, 'success', 'value changed'); // Show a success alert
    } else {
      // Adding a new item
      showAlert(true, 'success', 'item is added to the list'); // Show a success alert
      const newItem = { id: new Date().getTime().toString(), title: name }; // Create a new item object
      setList([...list, newItem]); // Add the new item to the list
      setName(''); // Clear the input field
    }
  };

  // Function to show alerts
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg }); // Update the alert state
  };

  // Function to remove an item from the list
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed'); // Show a danger alert
    setList(list.filter((item) => item.id !== id)); // Filter out the item with the specified id
  };

  // Function to clear the entire list
  const clearList = () => {
    showAlert(true, 'danger', 'empty list'); // Show a danger alert
    setList([]); // Clear the list by setting it to an empty array
  };

  // Function to initiate item editing
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id); // Find the item to be edited
    setIsEditing(true); // Enter edit mode
    setEditID(id); // Set the editID to the id of the item being edited
    setName(specificItem.title); // Set the input field value to the title of the item
  };

  // This useEffect hook is responsible for updating the local storage whenever
  /// the list state changes. It listens to changes in the list state and stores
  // it in local storage as a JSON string.
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list)); // Store the updated list in local storage
  }, [list]);

  // JSX for rendering the component
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} addAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
