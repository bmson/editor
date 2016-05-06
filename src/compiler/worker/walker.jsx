// Local dependencies
import splitter from './splitter.jsx'

// Walk through array and split up when new style is found
const walker = (input, { from, to, style }, { index, adjust } = { index: 0, adjust: 0 }) => {

  // clone array and get text length
  const clone  = [...input]
  const length = clone[index] && clone[index].text.length

  // Split input base on options
  const { previous, current, next, array } = splitter(clone, { from, to, style }, { index, adjust })

  // If we have not reach current node
  if (from - adjust >= length) {

    return walker(clone, { from, to, style }, {
      index:  index + 1,
      adjust: adjust + length
    })

  // If we have reached current node but need to split it up
  } else if (previous.text && current.text && !next.text) {

    return walker(array, {
      from:  from + current.text.length,
      to:    to,
      style: current.style
    }, {
      index:  index + 1,
      adjust: adjust + length - current.text.length
    })

  // If we have reached current node
  } else return array

}

// Export default
export default walker
