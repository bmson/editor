// Local dependencies
import walker    from './walker.jsx'
import converter from './converter.jsx'

// Module definition
export default (block, dictionary = {}) => {

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
  const html = text.map(value => converter(value, dictionary));

  // Convert array to string else
  return html.join('')

}
