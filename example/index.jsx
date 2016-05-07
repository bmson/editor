// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, Toolbar, Preview, Compiler } from 'editor'

// Local dependencies
import dictionary from './components/dictionary.jsx'
import Highlight  from './components/highlight.jsx'
import Blackout   from './components/blackout.jsx'
import Sticky     from './components/sticky.jsx'
import Link       from './components/link.jsx'

import { CompositeDecorator } from 'draft-js'
import LinkDecorator from './decorator.jsx';

const decorator = new CompositeDecorator([LinkDecorator]);

// Module definition
export default class App extends React.Component {

  //
  state = {
    editor: Editor.createWithContent('something to write here', decorator),
    result: null
  }

  //
  update = (editor) =>
    this.setState({ editor, result: Compiler.modifier(editor, dictionary) }) // rename modifier to run

  //
  render = () =>
    <div>
      <Editor state = {this.state.editor} onChange = {this.update} placeholder = 'Click and type…' />

      <Toolbar state = {this.state.editor} onChange = {this.update}>
        <Highlight className = 'highlight' tooltip = 'Highlighter' />
        <Blackout  className = 'blackout'  tooltip = 'Blackout' />
        <Sticky    className = 'sticky'    tooltip = 'Sticky note' />
        <Link      className = 'link'      tooltip = 'Link' />
      </Toolbar>

      <Preview value = { this.state.result } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
