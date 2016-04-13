// Dependencies
import { convertToRaw } from 'draft-js'

//
const defineOffsets = (styles) => {

  const object = (item, i) => ({
    start: styles[i].offset,
    end:   styles[i].offset + styles[i].length,
    style: styles[i].style,
  })

  return Array.from({ length: styles.length }, object)

}

//
const addInline = (block, dictionary, i) => {

  //
  const offsets = defineOffsets(block.inlineStyleRanges)

  //
  const text = block.text.charAt(i)

  //
  const open = offsets.map((offset) => {

    if(i === offset.start && dictionary[offset.style])
      return dictionary[offset.style].inner[0]

  });

  //
  const close = offsets.map((offset) => {

    if(i+1 === offset.end && dictionary[offset.style])
      return dictionary[offset.style].inner[1]

  });

  //
  return [].concat(open, text, close).join('')

}

//
const addBlock = (text, dictionary, block) => {

  //
  const isFirst = (block.current.type !== block.previous.type)
  const isLast  = (block.current.type !== block.next.type)

  //
  const dictionaryType = dictionary[block.current.type];

  //
  const outer = {
    open:  isFirst && dictionaryType.outer ? dictionaryType.outer[0] : '',
    close: isLast  && dictionaryType.outer ? dictionaryType.outer[1] : '',
  }

  const inner = {
    open:  isFirst || dictionaryType.outer ? dictionaryType.inner[0] : '',
    close: isLast  || dictionaryType.outer ? dictionaryType.inner[1] : '<br />',
  }

  return `${outer.open}${inner.open}${text}${inner.close}${outer.close}`

}

//
export default (state, dictionary) => {

  //
  const blocks = convertToRaw(state).blocks

  //
  return blocks.map((block, i) => {

    //
    const prev = blocks[i - 1] || {}
    const next = blocks[i + 1] || {}

    //
    const fn = (value, i) => addInline(block, dictionary, i);
    const text = [...block.text].map(fn).join('');

    //
    return addBlock(text, dictionary, {
      current:  block,
      previous: blocks[i - 1] || {},
      next:     blocks[i + 1] || {},
    })

  }).join('')

}
