// Dependencies
import { convertToRaw } from 'draft-js'

//
const defineOffsets = (styles) => {

  const object = (item, i = 0) => ({
    start: styles[i].offset,
    end:   styles[i].offset + styles[i].length,
    style: styles[i].style,
  })

  return Array.from({ length: styles.length }, object)

}

//
const addInline = (block, dictionary = {}, i = 0) => {

  //
  const offsets = defineOffsets(block.inlineStyleRanges)

  //
  const text = block.text.charAt(i)

  //
  const open = offsets.map((offset) => {

    if(i === offset.start && dictionary[offset.style])
      return dictionary[offset.style].inner[0]

  })

  //
  const close = offsets.map((offset) => {

    if(i+1 === offset.end && dictionary[offset.style])
      return dictionary[offset.style].inner[1]

  })

  //
  return [].concat(open, text, close).join('')

}

//
const addBlock = (text, dictionary = {}, block = {}) => {

  //
  const isFirst = (block.current.type !== block.previous.type)
  const isLast  = (block.current.type !== block.next.type)

  //
  const dictType  = dictionary[block.current.type]
  const breakType = dictionary['break']

  //
  const outer = {
    open:  isFirst && dictType.outer ? dictType.outer[0] : '',
    close: isLast  && dictType.outer ? dictType.outer[1] : '',
  }

  const inner = {
    open:  isFirst || dictType.outer ? dictType.inner[0] : '',
    close: isLast  || dictType.outer ? dictType.inner[1] : breakType.inner[0],
  }

  return `${outer.open}${inner.open}${text}${inner.close}${outer.close}`

}

//
export default (state, dictionary = {}) => {

  //
  const content = state.getCurrentContent()
  const blocks  = convertToRaw(content).blocks

  //
  return blocks.map((block, i) => {

    //
    const prev = blocks[i - 1] || {}
    const next = blocks[i + 1] || {}

    //
    const fn = (value, i) => addInline(block, dictionary, i)
    const text = [...block.text].map(fn).join('')

    //
    return addBlock(text, dictionary, {
      current:  block,
      previous: blocks[i - 1] || {},
      next:     blocks[i + 1] || {},
    })

  }).join('')

}
