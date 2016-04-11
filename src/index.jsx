// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import Input    from './components/input.jsx'
import Item     from './components/item.jsx'

const dispatcher = {}

// Toolbar
const Toolbar = ({ children, ...refs }) =>

  <div className="toolbar">
    <Item name="bold" {...refs} />
    <Item name="italic" {...refs} />
    <Item name="underline" {...refs} />
    {children}
  </div>

// Editor
const Editor = ({ children, ...refs }) =>

  <div className="editor" {...refs}>
    <Input dispatcher={dispatcher} {...refs} />
    <Toolbar dispatcher={dispatcher}>
      {children}
    </Toolbar>
  </div>

// Render
ReactDOM.render(
  <Editor placeholder="type something..." />,
  document.getElementById('target')
)

//
export default Editor;
