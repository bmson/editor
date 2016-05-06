// Toggle value in array
export default (input = [], value = '') => {

  // Clone array and get index of current value
  const array = [...input];
  const index = array.indexOf(value);

  // Add value if it isnot found in array, otherwise remove it
  (index < 0) ? array.splice(0, 0, value) : array.splice(index, 1)

  // Return transformed array
  return array

}
