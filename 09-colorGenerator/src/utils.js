// Convert a single color component to its hexadecimal representation.
function componentToHex(c) {
  var hex = c.toString(16); // Convert the color component to a hexadecimal string.
  return hex.length == 1 ? '0' + hex : hex; // Add a leading '0' if the length is 1 (for single-digit values).
}

// Convert RGB color components (red, green, blue) to a hexadecimal color representation.
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b); // Combine the components into a valid hexadecimal color string.
}

export default rgbToHex; // Export the 'rgbToHex' function for use in other modules.
