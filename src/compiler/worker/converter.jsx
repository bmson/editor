// Loop through types and call dictionary
export default ({ text, type }, dictionary) => {

  // Create html string
  let nodeValue = text

  // Loop through types and call dictionary functions
  type.forEach(o => {
    const data = o.data
    nodeValue = dictionary[o.type] && dictionary[o.type].call(this, { nodeValue, data }) || nodeValue
  })

  // Return transpiled html
  return nodeValue

}
