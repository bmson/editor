//
const slice = (input, position, settings) => {

  //
  const { index, adjust } = settings

  //
  const value = input[index]
  const from  = position.from - adjust
  const to    = position.to - adjust

  //
  return {
    first:  value.slice(0, from),
    second: value.slice(from, to),
    third:  value.slice(to, value.length)
  }

}

//
const inject = (input, position, settings) => {

  //
  const { from, to } = position
  const { index, adjust } = settings

  //
  const { first, second, third } = slice(input, position, settings)

  //
  if (first)  input.splice(index + 0, 1, first)
  if (second) input.splice(index + 1, 0, second)
  if (third)  input.splice(index + 2, 0, third)

  //
  return input

}

//
const walker = (input, position, settings) => {

  //
  const { from, to } = position
  const { index, adjust } = settings

  //
  const length = input[index].length

  // Not reached
  if (length < from - adjust) {

    return walker(input, position, {
      index:  index,
      adjust: adjust + length
    })

  }

  // Matched
  if (length < to - adjust) {

    return walker(input, position, {
      index:  index + 1,
      adjust: adjust + length
    })

  }

  //
  return inject(input, position, settings)

}

//
export default (input, range, dictionary = {}) => {

  //
  const position = {
    from: range.offset,
    to:   range.offset + range.length
  }

  const settings = {
    index:  0,
    adjust: 0
  }

  //
  return walker(input, position, settings)

}
