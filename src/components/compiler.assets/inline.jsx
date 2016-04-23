// Local dependencies
import walker from './walker.jsx'
import splitter from './splitter.jsx'
import inject from './inject.jsx'

// Module definition
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
  const steps = walker(input, position, iterator)
  const split = splitter(steps)

  inject(input, split)

}
