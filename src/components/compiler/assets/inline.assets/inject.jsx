// Module definition
export default (input, { child, index }) => {

  //
  const { previous, current, next } = child

  //
  const array = [previous, current, next].filter(n => n)

  //
  return input.splice(index, 1, ...array)

}
