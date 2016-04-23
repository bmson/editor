// Local dependencies
import walker from './inline.assets/walker.jsx'
import splitter from './inline.assets/splitter.jsx'
import inject from './inline.assets/inject.jsx'

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
