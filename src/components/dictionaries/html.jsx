export default {


  "unstyled":            e => (e.firstChild ? '<p>\n ' : ' ') + e.nodeValue + (e.lastChild ? '\n</p>\n\n' : '<br/>\n'),
  "blockquote":          e => (e.firstChild ? '<blockquote>\n ' : ' ') + e.nodeValue + (e.lastChild ? '\n</blockquote>\n\n' : '<br/>\n'),
  "code-block":          e => (e.firstChild ? '<pre>\n ' : ' ') + e.nodeValue + (e.lastChild ? '\n</pre>\n\n' : '<br/>\n'),
  "ordered-list-item":   e => (e.firstChild ? '<ol>\n <li> ' : ' <li> ') + e.nodeValue + (e.lastChild ? '</li>\n</ol>\n\n' : '</li>\n'),
  "unordered-list-item": e => (e.firstChild ? '<ul>\n <li> ' : ' <li> ') + e.nodeValue + (e.lastChild ? '</li>\n</ul>\n\n' : '</li>\n'),

  "IMAGE": {
    "inner": ["<img src='$0' />", ""]
  },

  "BOLD": {
    "inner": ["<strong>", "</strong>"]
  },

  "ITALIC": {
    "inner": ["<em>", "</em>"]
  },

  "UNDERLINE": {
    "inner": ["<u>", "</u>"]
  },

  "STRIKETHROUGH": {
    "inner": ["<strike>", "</strike>"]
  },

  "CODE": {
    "inner": ["<code>", "</code>"]
  }

}
