const FORMATS = {

  "unstyled": {
    "open": "<p>", // outer, inner: ['<p>', '</p>']
    "close": "</p>"
  },

  "blockquote": {
    "open": "<blockquote>",
    "close": "</blockquote>"
  },

  "code-block": {
    "open": "<pre>",
    "close": "</pre>"
  },

  "ordered-list-item": {
    "open": "<ol>",
    "close": "</ol>"
  },

  "unordered-list-item": {
    "open": "<ul>",
    "close": "</ul>"
  },

  "BOLD": {
    "open": "<strong>",
    "close": "</strong>"
  },

  "ITALIC": {
    "open": "<em>",
    "close": "</em>"
  },

  "UNDERLINE": {
    "open": "<u>",
    "close": "</u>"
  },

  "STRIKETHROUGH": {
    "open": "<strike>",
    "close": "</strike>"
  },

  "CODE": {
    "open": "<code>",
    "close": "</code>"
  }

}

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
const inline = () => {
}

//
const block = () => {
}

//
const convert = (data, dictionary) => {

  //
  const blocks = data.blocks;
  const html   = '';

  //
  blocks.map((block, i) => {

    //
    const offsets = defineOffsets(block.inlineStyleRanges)

    //
    const prev = blocks[i - 1] || {};
    const next = blocks[i + 1] || {};

    //
    if (block.type !== prev.type) {
      html += dictionary[block.type].outer[0]
    else
      html += '<br />'

    //
    html += dictionary[block.type].inner[0]

    //
    for(let i = 0; i < block.text.length; i++){
      html += this.checkStylesBefore(i);
      html += block.text.charAt(i);
      html += this.checkStylesAfter(i + 1);
    }

    //
    html += dictionary[block.type].inner[1]

    //
    if (block.type !== next.type)
      html += dictionary[block.type].outer[1]

  });

  //const offset = defineOffsets()

}



export default class Converter {

  constructor(rawData){
    this.rawData = rawData;
    this.offsets = [];
    this.formatter = FORMATS;
  }

  defineOffsets(inlineStyles){
    inlineStyles.map((metadata) => {
      let offset = {};
      offset.start = metadata.offset;
      offset.end = metadata.offset + metadata.length;
      offset.style = metadata.style;
      this.offsets.push(offset);
    });
  }

  checkStylesBefore(index){
    let formatter = this.formatter;
    let text = "";
    this.offsets.map((offset) => {
      if(index == offset.start && formatter[offset.style] != null) text += formatter[offset.style].open;
    });
    return text;
  }

  checkStylesAfter(index){
    let formatter = this.formatter;
    let text = "";
    this.offsets.map((offset) => {
      if(index == offset.end && formatter[offset.style] != null) text += formatter[offset.style].close;
    });
    return text;
  }

  export(){
    let blocks = this.rawData.blocks;
    let exportText = "";

    blocks.map((block, index) => {
      this.defineOffsets(block.inlineStyleRanges);

      const prev = blocks[index-1];
      const next = blocks[index+1];

      if (block.type !== (prev && prev.type)) {
        exportText += this.formatter[block.type].open;
      } else {
        exportText += '<br/>';
      }

      for(let i = 0; i < block.text.length; i++){
        exportText += this.checkStylesBefore(i);
        exportText += block.text.charAt(i);
        exportText += this.checkStylesAfter(i + 1);
      }

      if (block.type !== (next && next.type)) {
        exportText += this.formatter[block.type].close;
      }
    });
    return exportText;
  }

}
