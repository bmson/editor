export default {

  // Block
  "unstyled": e =>
    (e.firstChild ? '<p>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</p>\n\n' : '<br/>\n'),

  "BLOCKQUOTE": e =>
    (e.firstChild ? '<blockquote>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</blockquote>\n\n' : '<br/>\n'),

  "PRE": e =>
    (e.firstChild ? '<pre>\n  ' : '  ')
  + (e.nodeValue)
  + (e.lastChild ? '\n</pre>\n\n' : '<br/>\n'),

  "OL": e =>
    (e.firstChild ? '<ol>\n  <li>' : '  <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li>\n</ol>\n\n' : '</li>\n'),

  "UL": e =>
    (e.firstChild ? '<ul>\n  <li>' : '  <li>')
  + (e.nodeValue)
  + (e.lastChild ? '</li>\n</ul>\n\n' : '</li>\n'),

  "TABLE": e =>
    (e.firstChild ? '<table class="sticky">\n' : '')
  + (e.index % 2 ? '' : '  <tr>\n')
  + ('    <td>' + e.nodeValue + '</td>')
  + (e.index % 2 && !e.lastChild ? '\n  </tr>' : '')
  + (e.lastChild ? '\n  </tr>\n</table>\n\n' : '\n'),

  // Inline
  "BOLD":          e => '<b>' + e.nodeValue + '</b>',
  "ITALIC":        e => '<i>' + e.nodeValue + '</i>',
  "UNDERLINE":     e => '<u>' + e.nodeValue + '</u>',
  "STRIKETHROUGH": e => '<strike>' + e.nodeValue + '</strike>',
  "CODE":          e => '<code>' + e.nodeValue + '</code>',
  "HIGHLIGHT":     e => '<span class="highlight">' + e.nodeValue + '</span>',
  "BLACKOUT":      e => '<span class="blackout">' + (e.nodeValue).replace(/./g, '*') + '</span>',

}
