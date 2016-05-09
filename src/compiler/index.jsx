// Global dependencies
import { convertToRaw } from 'draft-js'

// Local dependencies
import block  from './worker/block.jsx'
import inline from './worker/inline.jsx'
import html   from './dictionary/html.jsx'

// Module definition
export default class {

  static run = (state, dictionary = html) => {

    // Get array of blocks
    const content = state.getCurrentContent()
    const blocks  = convertToRaw(content).blocks

    // Count index of child elements in blocks
    var index = 0

    // Convert blocks to strings
    const compile = (element, step) => {

      // Add inline styles
      const compiled = inline(element, dictionary)

      // Get the current and sibling blocks
      const previous = blocks[step - 1] || {}
      const current  = blocks[step + 0] || {}
      const next     = blocks[step + 1] || {}

      // Check the current index of block element
      index = (previous.type === current.type) ? index + 1 : 0

      // Add block styles
      return block(compiled, dictionary, { previous, current, next, index })

    }

    // Map through blocks and return compiled string
    return blocks.map(compile).join('')

  }

}
