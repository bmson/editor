// Local dependencies
import toggle  from './toggle.jsx'
import divider from './divider.jsx'

// Split current index into multiple
export default (input, { from, to, style }, { index, adjust } = { index: 0, adjust: 0 }) => {

  // clone array and get object on index
  const array  = [...input]
  const object = array[index] || {}

  // Get text and position
  const value  = object.text || ''
  const eqFrom = from - adjust
  const eqTo   = to - adjust

  // Toggle current style
  const toggledType = toggle(object.type, style)

  // Split array based on position
  const previous = {
    text:  value.slice(0, eqFrom),
    type:  object.type,
    style: object.style
  }

  const current = {
    text:  value.slice(eqFrom, eqTo),
    type:  toggledType,
    style: style
  }

  const next = {
    text:  value.slice(eqTo, value.length),
    type:  object.type,
    style: object.style
  }

  // Return nodes and array
  return {
    previous, current, next,
    array: divider(array, index, { previous, current, next })
  }

}
