// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// Editor
import { Editor, Toolbar, Preview, Compiler } from 'editor'

// Components
import dictionary from './components/dictionary.jsx'
import Highlight  from './components/toolbar/highlight.jsx'
import Blackout   from './components/toolbar/blackout.jsx'
import Table      from './components/toolbar/table.jsx'

// Module definition
export default class App extends React.Component {

  //
  state = {
    editor: Editor.create('some content'),
    result: null
  }

  //
  update = (editor) =>
    this.setState({ editor, result: Compiler.run(editor, dictionary) })

  //
  render = () =>
    <div>
      <Editor state = {this.state.editor} onChange = {this.update} placeholder = 'Click and type…' />

      <Toolbar state = {this.state.editor} onChange = {this.update}>
        <Highlight className = 'highlight' tooltip = 'Highlighter' />
        <Blackout  className = 'blackout'  tooltip = 'Blackout' />
        <Table     className = 'table'    tooltip = 'Table' />
      </Toolbar>

      <Preview value = { this.state.result } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
