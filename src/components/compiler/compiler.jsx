// Dependencies
import { convertToRaw } from 'draft-js'

// Local dependencies
import addInline from './type/inline.jsx'
import addBlock  from './type/block.jsx'
import html      from './dictionary/html.jsx'

// Module definition
export default class {

  static modifier = (state, dictionary = html) => {

    //
    const content = state.getCurrentContent()
    const blocks  = convertToRaw(content).blocks

    //
    const compile = (block, index) => {

      //
      const text = [{ text: block.text, type:[''] }]
      const range = block.inlineStyleRanges

      //
      let inline = [text[0].text];
      range.map(range => {
        const v = addInline(text, range, dictionary)
        inline = v
      })

      //
      return addBlock(inline.join(''), dictionary, {
        previous: blocks[index - 1] || {},
        current:  blocks[index + 0] || {},
        next:     blocks[index + 1] || {},
      })

    }

    //
    return blocks.map(compile).join('')

  }

}
