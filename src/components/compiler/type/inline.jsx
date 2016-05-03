// Toggle value in array
const toggleArray = (array = [], value = '') => {

  // Get index of current value and clone array
  const index = array.indexOf(value);
  const copy  = [...array];

  // Add value if it isnot found in array, otherwise remove it
  (index < 0) ? copy.splice(0, 0, value) : copy.splice(index, 1)

  // Return transformed array
  return copy

}

//
const inject = (input, child, index) => {

  // Collect child attributes and clone array
  const { previous, current, next } = child
  const copy = [...input]

  // Filter out values that don't have text attribute
  // so we're not inserting empty style tags
  const array = [previous, current, next].filter(n => n.text)

  // TODO: Remove input from here
  input.splice(index, 1, ...array)

  //
  return { child, copy }

}

//
const splitter = (input, position, iterator) => {

  //
  const { index, adjust } = iterator

  //
  const value = input[index] && input[index].text || ''
  const from  = position.from - adjust
  const to    = position.to - adjust

  //
  const curType = input[index] && input[index].type
  const curStyle = input[index] && input[index].style

  //
  const child = {
    previous:  { text: value.slice(0, from), type: curType, style:curStyle }, // remove position from curStyle ????
    current:   { text: value.slice(from, to), type: toggleArray(curType, position.style), style: position.style },
    next:      { text: value.slice(to, value.length), type: curType, style:curStyle }, // remove position from curStyle
  }

  //
  return inject(input, child, index)

}

//
const walker = (input, position, { index, adjust } = { index: 0, adjust: 0 }) => {

  //
  const { from, to } = position

  //
  const length = input[index] && input[index].text.length

  //
  if (from - adjust >= length) {

    return walker(input, position, {
      index: index + 1,
      adjust: adjust + length
    })

  } else {

    // Matched
    const { child, copy } = splitter(input, position, { index, adjust })

    //
    if (child.previous.text && child.current.text && !child.next.text) {

      return walker(input, {
        from:  from + (child.current).text.length,
        to:    to,
        style: child.current.style
      }, {
        index:  index + 1,
        adjust: adjust + length - (child.current).text.length
      })

    } else {

      return input

    }

  }

}

const setDictionary = ({ text, type }, dictionary) => {

  //
  let val = text

  //
  type.forEach(o => {
    val = dictionary[o] && dictionary[o].call(this, { nodeValue: val }) || val
  })

  return val

}

//
export default (block, dictionary = {}) => {

  //
  const text = [{
    text: block.text,
    type: ['']
  }]

  //
  const ranges = block.inlineStyleRanges

  //
  ranges.forEach(range => {

    //
    const position = {
      from:  range.offset,
      to:    range.offset + range.length,
      style: range.style
    }

    //
    walker(text, position)

  })

  //
  return text.map(value => {

    return setDictionary(value, dictionary)

  }).join('') || block.text

}
