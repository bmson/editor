// Module definition
export default (nodeValue, dictionary = {}, element = {}) => {

  // Get variable from elements option
  const { previous, current, next, index } = element

  // Check if element is same as siblings
  const firstChild = (current.type !== previous.type)
  const lastChild  = (current.type !== next.type)

  // Call dictionary and send element checks as parameters
  return dictionary[current.type].call(this, { firstChild, lastChild, nodeValue, index })


}
