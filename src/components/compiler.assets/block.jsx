// Module definition
export default (nodeValue, dictionary = {}, block = {}) => {

  //
  const { previous, current, next } = block

  //
  const firstChild = (current.type !== previous.type)
  const lastChild  = (current.type !== next.type)

  //
  return dictionary[current.type].call(this, { firstChild, lastChild, nodeValue })

}
