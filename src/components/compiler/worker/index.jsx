// Local dependencies
import walker      from './walker.jsx'
import { convert } from './utilities.jsx'

// Module definition
export default class {

  block = (nodeValue, dictionary = {}, element = {}) => {

    // Get variable from elements option
    const { previous, current, next } = element

    // Check if element is same as siblings
    const firstChild = (current.type !== previous.type)
    const lastChild  = (current.type !== next.type)

    // Call dictionary and send element checks as parameters
    return dictionary[current.type].call(this, { firstChild, lastChild, nodeValue })


  }

  inline = (block, dictionary = {}) => {

    // Create text block that we will loop through
    let text = [{
      text: block.text,
      type: ['']
    }]

    // Get list of inline style ranges
    const ranges = block.inlineStyleRanges

    // Loop through ranges
    ranges.forEach(range => {

      // Get current range
      const position = {
        from:  range.offset,
        to:    range.offset + range.length,
        style: range.style
      }

      // Walk through text block and replace it with transform text
      text = walker(text, position)

    })

    // Loop through  text blocks and convert using dictionary
    const html = text.map(value => convert(value, dictionary));

    // Convert array to string else
    return html.join('')

  }

}
