// Dependencies
import { convertToRaw } from 'draft-js'

// Local dependencies
import Worker from './worker/index.jsx'
import html   from './dictionary/html.jsx'

// Module definition
export default class {

  static modifier = (state, dictionary = html) => {

    // Create worker
    const worker = new Worker

    // Get array of blocks
    const content = state.getCurrentContent()
    const blocks  = convertToRaw(content).blocks

    // Convert blocks to strings
    const compile = (block, index) => {

      // Add inline styles
      const inline = worker.inline(block, dictionary)

      // Add block styles
      return worker.block(inline, dictionary, {
        previous: blocks[index - 1] || {},
        current:  blocks[index + 0] || {},
        next:     blocks[index + 1] || {},
      })

    }

    // Map through blocks and return compiled string
    return blocks.map(compile).join('')

  }

}
