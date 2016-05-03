//
const toggle = (array = [], value = '') => {
  var index = array.indexOf(value);

  var copy = [].concat(array);

  if (index === -1) {
    copy.push(value);
  } else {
    copy.splice(index, 1);
  }

  return copy;
}

//
const inject = (input, child, index) => {

  //
  const { previous, current, next } = child

  //
  const array = [previous, current, next].filter(n => n.text)

  //
  input.splice(index, 1, ...array)

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
    current:   { text: value.slice(from, to), type: toggle(curType, position.style), style: position.style },
    next:      { text: value.slice(to, value.length), type: curType, style:curStyle }, // remove position from curStyle
  }

  //
  inject(input, child, index)

  //
  return child

}

//
export const walker = (input, position, iterator) => {

  //
  const { from, to } = position
  const { index, adjust } = iterator

  //
  const length = input[index] && input[index].text.length

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
        to: to,
        style: (child.current).style
      }, {
        index: index + 1,
        adjust: adjust + length - (child.current).text.length
      })

    }

  }

}

//
export default (block, dictionary = {}) => {

  const text = [{ text: block.text, type:[''] }]
  const ranges = block.inlineStyleRanges

  ranges.map(range => {

    //
    const position = {
      from: range.offset,
      to:   range.offset + range.length,
      style: range.style
    }

    //
    const iterator = {
      index:  0,
      adjust: 0
    }

    //
    walker(text, position, iterator)

  })


  //
  return text.map(i => {

    //
    let val = i.text

    //
    i.type.forEach(o => {
      val = dictionary[o] && dictionary[o].call(this, { nodeValue: val }) || val
    })

    //
    return val;

  }).join('') || block.text

}
