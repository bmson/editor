// Module definition
export default (nodeValue, dictionary = {}, block = {}) => {

  //
  const { previous, current, next } = block

  //
  const callback  = dictionary[current.type]

  //
  const firstChild = (current.type !== previous.type)
  const lastChild  = (current.type !== next.type)

  //
  return callback({ firstChild, lastChild, nodeValue })

}
