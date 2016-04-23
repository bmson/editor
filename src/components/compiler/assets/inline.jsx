// Module definition
const inject = (input, child, index) => {

  //
  const { previous, current, next } = child

  //
  const array = [previous, current, next].filter(n => n.text)

  //
  input.splice(index, 1, ...array)

}

// Module definition
const splitter = (input, position, iterator) => {

  //
  const { index, adjust } = iterator

  //
  const value = input[index].text
  const from  = position.from - adjust
  const to    = position.to - adjust

  //
  const child = {
    previous:  { text: value.slice(0, from) },
    current:   { text: value.slice(from, to) },
    next:      { text: value.slice(to, value.length) },
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
  const length = input[index].text.length

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
    if (child.previous.text && child.current.text && !child.next.text) {

      walker(input, {
        from: from + (child.current).text.length,
        to: to
      }, {
        index: index + 1,
        adjust: adjust + length - (child.current).text.length
      })

    }

  }

}

export default (input, range, dictionary = {}) => {

  //
  const position = {
    from:  range.offset,
    to:    range.offset + range.length,
    style: range.style
  }

  const iterator = {
    index:  0,
    adjust: 0
  }

  //
  walker(input, position, iterator)

}
