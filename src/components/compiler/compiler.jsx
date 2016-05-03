// Dependencies
import { convertToRaw } from 'draft-js'

// Local dependencies
import addInline from './type/inline.jsx'
import addBlock  from './type/block.jsx'
import html      from './dictionary/html.jsx'

// Module definition
export default class {

  static modifier = (state, dictionary = html) => {

    // Get array of blocks
    const content = state.getCurrentContent()
    const blocks  = convertToRaw(content).blocks

    // Convert blocks to strings
    const compile = (block, index) => {

      // Add inline styles
      const inline = addInline(block, dictionary)

      // Add block styles
      return addBlock(inline, dictionary, {
        previous: blocks[index - 1] || {},
        current:  blocks[index + 0] || {},
        next:     blocks[index + 1] || {},
      })

    }

    // Map through blocks and return compiled string
    return blocks.map(compile).join('')

  }

}
