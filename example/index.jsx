// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, Toolbar, Preview } from 'editor'

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
  update = (editor) => this.setState({ result: editor.compile() })
  format = (editor) => this.setState({ editor })

  render = () =>
    <div>
      <Editor state = {this.state.editor} placeholder = 'Comment...' onChange = {this.update} />

      <Toolbar state = {this.state.editor} onChange = {this.format}>
        <Definition className = 'codeBlock' tooltip = 'Hot Content' />
      </Toolbar>

      <Preview value = { this.state.result } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
