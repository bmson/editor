// Global dependencies
import React     from 'react'
import ReactDOM  from 'react-dom'
import Editor    from'./editor.jsx'
import CodeBlock from'./components/toolbar.assets/block/codeBlock.jsx'

// Render
ReactDOM.render(
  <Editor placeholder='type something...'>
    <CodeBlock className='codeBlock' />
  </Editor>,
  document.getElementById('target')
)
