export default {

  // Block
  "unstyled": e =>
    (e.firstChild ? '<p>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</p>\n\n' : '<br/>\n'),

  "blockquote": e =>
    (e.firstChild ? '<blockquote>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</blockquote>\n\n' : '<br/>\n'),

  "code-block": e =>
    (e.firstChild ? '<pre>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</pre>\n\n' : '<br/>\n'),

  "ordered-list-item": e =>
    (e.firstChild ? '<ol>\n  <li>' : '  <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li>\n</ol>\n\n' : '</li>\n'),

  "unordered-list-item": e =>
    (e.firstChild ? '<ul>\n  <li>' : '  <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li>\n</ul>\n\n' : '</li>\n'),

  "sticky": e =>
    (e.firstChild ? '<div class="sticky">\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</div>\n\n' : '<br/>\n'),

  // Inline
  "BOLD":          e => '<b>' + e.nodeValue + '</b>',
  "ITALIC":        e => '<i>' + e.nodeValue + '</i>',
  "UNDERLINE":     e => '<u>' + e.nodeValue + '</u>',
  "STRIKETHROUGH": e => '<strike>' + e.nodeValue + '</strike>',
  "CODE":          e => '<code>' + e.nodeValue + '</code>',
  "HIGHLIGHT":     e => '<span class="highlight">' + e.nodeValue + '</span>',
  "BLACKOUT":      e => '<span class="blackout">' + (e.nodeValue).replace(/./g, '*') + '</span>',

}
