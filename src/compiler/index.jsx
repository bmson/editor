// Dependencies
import { convertToRaw } from 'draft-js'

// Local dependencies
import block  from './worker/block.jsx'
import inline from './worker/inline.jsx'
import html   from './dictionary/html.jsx'

// Module definition
export default class {

  static modifier = (state, dictionary = html) => {

    // Get array of blocks
    const content   = state.getCurrentContent()
    const converted = convertToRaw(content)
    const blocks    = converted.blocks
    const entityMap = converted.entityMap

    // Convert blocks to strings
    const compile = (element, index) => {

      // Add inline styles
      const compiled = inline(element, entityMap, dictionary)

      // Add block styles
      return block(compiled, dictionary, {
        previous: blocks[index - 1] || {},
        current:  blocks[index + 0] || {},
        next:     blocks[index + 1] || {},
      })

    }

    // Map through blocks and return compiled string
    return blocks.map(compile).join('')

  }

}
