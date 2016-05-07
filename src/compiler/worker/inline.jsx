// Local dependencies
import walker    from './walker.jsx'
import converter from './converter.jsx'

// Module definition
export default (block, entityMap, dictionary = {}) => {

  // Create text block that we will loop through
  let text = [{
    text: block.text,
    type: [{}]
  }]

  // Loop through entities and convert to an range object
  const entityStyleRanges = (block.entityRanges).map(entity => {

    // Get entity options from map
    const attribute = entityMap[entity.key]

    // Generate range object
    return { offset: entity.offset,
             length: entity.length,
             style:  attribute.type,
             data:   attribute.data }

  })

  // Get list of inline and entity style ranges
  const ranges = [].concat(block.inlineStyleRanges, entityStyleRanges)
  console.log(ranges)

  // Loop through ranges
  ranges.forEach(range => {

    // Get current range
    const position = {
      from:  range.offset,
      to:    range.offset + range.length,
      style: range.style,
      data:  range.data
    }

    // Walk through text block and replace it with transform text
    text = walker(text, position)

  })

  // Loop through  text blocks and convert using dictionary
  const html = text.map(value => converter(value, dictionary));

  // Convert array to string else
  return html.join('')

}
