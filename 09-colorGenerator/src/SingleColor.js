import React, { useState, useEffect } from 'react'
import rgbToHex from './utils' // Import the 'rgbToHex' utility function (not used in this component)

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // State variables
  const [alert, setAlert] = useState(false); // Indicates whether the color has been copied to the clipboard
  const bgc = rgb.join(","); // Convert RGB array to a comma-separated string
  const hexValue = `#${hexColor}`; // Hexadecimal color value

  // useEffect hook to handle the alert timeout
  useEffect(() => {
    // Set a timeout to hide the alert message after 3 seconds
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [alert]); // Run this effect when 'alert' state changes

  return (
    // Render a colored box with details
    <article
      className={`color${index > 10 && 'color-light'}`} // Apply 'color-light' class conditionally
      style={{ background: `rgb(${bgc})` }} // Set the background color based on the RGB values
      onClick={() => {
        setAlert(true); // Set 'alert' state to true when clicked
        navigator.clipboard.writeText(hexValue); // Copy the hexValue to the clipboard
      }}
    >
      <p className='percent-value'>{weight}%</p> {/* Display color weight percentage */}
      <p className='color-value'>{hexValue}</p> {/* Display hexadecimal color value */}
      {alert && <p className='alert'>copied to clipboard</p>} {/* Display an alert when 'alert' is true */}
    </article>
  )
}

export default SingleColor;
