// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, Toolbar, Preview, Compiler } from 'editor'

// Local dependencies
import Definition from './components/definition.jsx'

// Module definition
export default class App extends React.Component {

  //
  state = {
    editor: Editor.createEmpty(),
    result: null
  }

  //
  update = (editor) =>
    this.setState({ editor, result: Compiler.modifier(editor) })

  //
  render = () =>
    <div>
      <Editor state = {this.state.editor} onChange = {this.update} placeholder = 'Click and type…' />

      <Toolbar state = {this.state.editor} onChange = {this.update}>
        <Definition className = 'codeBlock' tooltip = 'Hot Content' />
      </Toolbar>

      <Preview value = { this.state.result } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
