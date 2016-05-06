// Loop through types and call dictionary
export default ({ text, type }, dictionary) => {

  // Create html string
  let nodeValue = text

  // Loop through types and call dictionary functions
  type.forEach(o => {
    nodeValue = dictionary[o] && dictionary[o].call(this, { nodeValue }) || nodeValue
  })

  // Return transpiled html
  return nodeValue

}
