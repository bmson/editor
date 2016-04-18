// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import Editor   from'./editor.jsx'
import Image    from'./components/toolbar.assets/inline/image.jsx'

// Render
ReactDOM.render(
  <Editor placeholder='type something...'>
    <Image className='codeBlock' />
  </Editor>,
  document.getElementById('target')
)
