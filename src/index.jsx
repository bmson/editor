// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import Input    from './components/input.jsx'
import Item     from './components/item.jsx'

// Toolbar
const Toolbar = ({ children, ...refs }) =>

  <div className="toolbar" {...refs}>
    {children}
  </div>

// Editor
const Editor = ({ children, ...refs }) =>

  <div className="editor" {...refs}>
    <Input />
    <Toolbar>
      <Item type="bold" />
      <Item type="italic" />
      <Item type="underline" />
    </Toolbar>
    {children}
  </div>

// Render
ReactDOM.render(
  <Editor />,
  document.getElementById('target')
)
