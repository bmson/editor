// Toggle value in array
export default (input, type = '', data = '') => {

  // Clone array and get index of current value
  const array = [...input]
  const index = array.findIndex(obj => obj.type === type);

  // Add value if it is not found in array, otherwise remove it
  (index < 0) ? array.splice(0, 0, { type, data }) : array.splice(index, 1)

  // Return transformed array
  return array

}
