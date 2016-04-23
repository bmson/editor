// Module definition
export default ({ input, position, iterator }) => {

  //
  const { index, adjust } = iterator

  //
  const value = input[index]
  const from  = position.from - adjust
  const to    = position.to - adjust

  //
  const child = {
    previous:  value.slice(0, from),
    current:   value.slice(from, to),
    next:      value.slice(to, value.length),
  }

  //
  return { child, index  }

}
