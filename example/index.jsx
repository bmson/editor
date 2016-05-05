// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, Toolbar, Preview, Compiler } from 'editor'

// Local dependencies
import dictionary from './components/dictionary.jsx'
import Highlight  from './components/highlight.jsx'

// Module definition
export default class App extends React.Component {

  //
  state = {
    editor: Editor.createEmpty(),
    result: null
  }

  //
  update = (editor) =>
    this.setState({ editor, result: Compiler.modifier(editor, dictionary) })

  //
  render = () =>
    <div>
      <Editor state = {this.state.editor} onChange = {this.update} placeholder = 'Click and type…' />

      <Toolbar state = {this.state.editor} onChange = {this.update}>
        <Highlight className = 'highlight' tooltip = 'Hot Content' />
      </Toolbar>

      <Preview value = { this.state.result } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
