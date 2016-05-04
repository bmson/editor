// Toggle value in array
const toggleArray = (input = [], value = '') => {

  // Clone array and get index of current value
  const array = [...input];
  const index = array.indexOf(value);

  // Add value if it isnot found in array, otherwise remove it
  (index < 0) ? array.splice(0, 0, value) : array.splice(index, 1)

  // Return transformed array
  return array

}

// Insert children into array at specific index
const spliceArray = (input, child, index) => {

  // Clone array and collect child attributes
  const array = [...input]
  const { previous, current, next } = child

  // Filter out values that don't have text attribute, so we're not inserting empty style tags
  const split = [previous, current, next].filter(n => n.text)

  // Add split into array at index
  array.splice(index, 1, ...split)

  // Retur child object and array
  return { child, array }

}

// Split current index into multiple
const splitter = (input, position, { index, adjust }) => {

  // clone array and get object on index
  const array  = [...input]
  const object = array[index] || {}

  // Get text and position
  const value = object.text || ''
  const from  = position.from - adjust
  const to    = position.to - adjust

  // Toggle current style
  const toggledType = toggleArray(object.type, position.style)

  // Split array based on position
  const child = {
    previous:  { text: value.slice(0, from),          type: object.type, style: object.style },
    current:   { text: value.slice(from, to),         type: toggledType, style: position.style },
    next:      { text: value.slice(to, value.length), type: object.type, style: object.style },
  }

  //
  return spliceArray(array, child, index)

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
    const { child, array } = splitter(input, position, { index, adjust })

    //
    if (child.previous.text && child.current.text && !child.next.text) {

      return walker(array, {
        from:  from + (child.current).text.length,
        to:    to,
        style: child.current.style
      }, {
        index:  index + 1,
        adjust: adjust + length - (child.current).text.length
      })

    } else {

      return array

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
  let text = [{
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
    text = walker(text, position)

  })

  //
  return text.map(value => {

    return setDictionary(value, dictionary)

  }).join('') || block.text

}
