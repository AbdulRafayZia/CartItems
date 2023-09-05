import React, { useState } from "react";
import SingleColor from "./SingleColor"; // Importing the SingleColor component
import Values from "values.js"; // Importing the 'values.js' library for color manipulation

function App() {
  // State variables
  const [color, setColor] = useState(''); // Stores the user input color value
  const [error, setError] = useState(false); // Indicates whether there's an error
  const [list, setList] = useState([]); // Stores a list of generated colors

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Attempt to create an array of color shades based on the user input
      let colors = new Values(color).all(10); // Generate 10 color shades
      setList(colors); // Update the 'list' state with the generated colors
    } catch (error) {
      setError(true); // Set 'error' state to true if an error occurs
      console.log(error); // Log the error to the console
    }
  }

  return (
    <>
      {/* Container for the color generator */}
      <section className="container">
        <h3>Color generator</h3>
        {/* Form for user input */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? "error" : null}`} // Apply 'error' class if there's an error
          />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>
      {/* Display generated color shades */}
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            // Render SingleColor component for each color in the list
            <SingleColor
              key={index}
              {...color} // Pass color properties as props
              index={index} // Pass the index as a prop
              hexColor={color.hex} // Pass the hexadecimal color value as a prop
            />
          )
        })}
      </section>
    </>
  )
}

export default App;
