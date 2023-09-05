import React from 'react';

// This line imports the React library.

import { FaEdit, FaTrash } from 'react-icons/fa';

// This line imports the `FaEdit` and `FaTrash` icons from the React Icons library.

function List({ items, removeItem, editItem }) {

// This function defines the `List` component. It takes the following props:
// - `items`: The list of items to be displayed.
// - `removeItem`: A function to remove an item from the list.
// - `editItem`: A function to edit an item in the list.

  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item; // The ID and title of the current item.
        return (
          <article key={id} className="grocery-item">
            <p className="title"> {title}</p> 
            <div className='btn-container'>
              <button type='button' className='edit-btn' onClick={() => editItem(id)}> 
                <FaEdit /> 
                
              </button>
              <button type='button' className='delete-btn' onClick={() => removeItem(id)}> 
                <FaTrash /> 
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

// This line exports the `List` component.

export default List;
