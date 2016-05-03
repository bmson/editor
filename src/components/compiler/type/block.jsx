// Module definition
export default (nodeValue, dictionary = {}, block = {}) => {

  // Get variable from block option
  const { previous, current, next } = block

  // Check if block element is same as siblings
  const firstChild = (current.type !== previous.type)
  const lastChild  = (current.type !== next.type)

  // Call dictionary and send block checks as parameters
  return dictionary[current.type].call(this, { firstChild, lastChild, nodeValue })

}
