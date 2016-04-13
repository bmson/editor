const FORMATS = {
  "HTML": {
    "BLOCK": {
      "unstyled": {
        "open": "<p>",
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
      }
    },
    "INLINE": {
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
  }
};

export default class Converter {

  constructor(rawData){
    this.rawData = rawData;
    this.offsets = [];
    this.formatter = FORMATS.HTML;
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
    let formatter = this.formatter['INLINE'];
    let text = "";
    this.offsets.map((offset) => {
      if(index == offset.start && formatter[offset.style] != null) text += formatter[offset.style].open;
    });
    return text;
  }

  checkStylesAfter(index){
    let formatter = this.formatter['INLINE'];
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
        exportText += this.formatter['BLOCK'][block.type].open;
      } else {
        exportText += '<br/>';
      }

      for(let i = 0; i < block.text.length; i++){
        exportText += this.checkStylesBefore(i);
        exportText += block.text.charAt(i);
        exportText += this.checkStylesAfter(i + 1);
      }

      if (block.type !== (next && next.type)) {
        exportText += this.formatter['BLOCK'][block.type].close;
      }
    });
    return exportText;
  }

}
