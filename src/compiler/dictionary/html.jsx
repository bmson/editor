export default {

  // Block
  "unstyled": e =>
    (e.firstChild ? '<p>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</p>' : '<br/>'),

  "BLOCKQUOTE": e =>
    (e.firstChild ? '<blockquote>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</blockquote>' : '<br/>'),

  "PRE": e =>
    (e.firstChild ? '<pre>' : '')
  + (e.nodeValue)
  + (e.lastChild ? '</pre>' : '<br/>'),

  "OL": e =>
    (e.firstChild ? '<ol><li>' : '<li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li></ol>' : '</li>'),

  "UL": e =>
    (e.firstChild ? '<ul><li>' : '<li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li></ul>' : '</li>'),

  // Inline
  "BOLD":          e => '<b>' + e.nodeValue + '</b>',
  "ITALIC":        e => '<i>' + e.nodeValue + '</i>',
  "UNDERLINE":     e => '<u>' + e.nodeValue + '</u>',
  "STRIKETHROUGH": e => '<strike>' + e.nodeValue + '</strike>',
  "CODE":          e => '<code>' + e.nodeValue + '</code>',

}
