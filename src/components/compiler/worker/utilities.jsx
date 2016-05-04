// Toggle value in array
export const toggle = (input = [], value = '') => {

  // Clone array and get index of current value
  const array = [...input];
  const index = array.indexOf(value);

  // Add value if it isnot found in array, otherwise remove it
  (index < 0) ? array.splice(0, 0, value) : array.splice(index, 1)

  // Return transformed array
  return array

}

// Divide array at specific index
export const divide = (input, index, { previous, current, next }) => {

  // Clone array
  const array = [...input]

  // Filter out values that don't have text attribute, so we're not inserting empty style tags
  const split = [previous, current, next].filter(n => n.text)

  // Add split into array at index
  array.splice(index, 1, ...split)

  // Return array
  return array

}

// Loop through types and call dictionary
export const convert = ({ text, type }, dictionary) => {

  // Create html string
  let nodeValue = text

  // Loop through types and call dictionary functions
  type.forEach(o => {
    nodeValue = dictionary[o] && dictionary[o].call(this, { nodeValue }) || nodeValue
  })

  // Return transpiled html
  return nodeValue

}

// Export group
export default { toggle, divide, convert }
