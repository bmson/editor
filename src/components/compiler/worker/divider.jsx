// Divide array at specific index
export default (input, index, { previous, current, next }) => {

  // Clone array
  const array = [...input]

  // Filter out values that don't have text attribute, so we're not inserting empty style tags
  const split = [previous, current, next].filter(n => n.text)

  // Add split into array at index
  array.splice(index, 1, ...split)

  // Return array
  return array

}
