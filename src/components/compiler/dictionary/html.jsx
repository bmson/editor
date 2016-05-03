export default {

  // Block
  "unstyled": e =>
    (e.firstChild ? '<p>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</p>' : '<br/>'),

  "blockquote": e =>
    (e.firstChild ? '<blockquote>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</blockquote>' : '<br/>'),

  "code-block": e =>
    (e.firstChild ? '<pre>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</pre>' : '<br/>'),

  "ordered-list-item": e =>
    (e.firstChild ? '<ol><li>' : ' <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li></ol>' : '</li>'),

  "unordered-list-item": e =>
    (e.firstChild ? '<ul><li>' : ' <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li></ul>' : '</li>'),

  // Inline
  "BOLD":          e => '<strong>' + e.nodeValue + '</strong>',
  "ITALIC":        e => '<em>' + e.nodeValue + '</em>',
  "UNDERLINE":     e => '<u>' + e.nodeValue + '</u>',
  "STRIKETHROUGH": e => '<strike>' + e.nodeValue + '</strike>',
  "CODE":          e => '<code>' + e.nodeValue + '</code>',

}
