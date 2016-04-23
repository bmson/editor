// Module definition
export const inject = (input, child, index) => {

  //
  const { previous, current, next } = child

  //
  const array = [previous, current, next].filter(n => n)

  //
  return input.splice(index, 1, ...array)

}

// Module definition
export const splitter = (input, position, iterator) => {

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
  inject(input, child, index)

  //
  return child

}

// Module definition
export const walker = (input, position, iterator) => {

  //
  const { from, to } = position
  const { index, adjust } = iterator

  //
  const length = input[index].length

  //
  if (from - adjust >= length) {

    walker(input, position, {
      index: index + 1,
      adjust: adjust + length
    })

  } else {

    // Matched
    const child = splitter(input, position, iterator)

    //
    if (child.previous && child.current && !child.next) {

      walker(input, {
        from: from + (child.current).length,
        to: to
      }, {
        index: index + 1,
        adjust: adjust + length - (child.current).length
      })

    }

  }

  //
  return input

}

export default (input, range, dictionary = {}) => {

  //
  const position = {
    from: range.offset,
    to:   range.offset + range.length
  }

  const iterator = {
    index:  0,
    adjust: 0
  }

  //
  walker(input, position, iterator)

}
