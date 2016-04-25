// React
import React from 'react'

// DraftJS
import { Editor as Draft } from 'draft-js'
import { EditorState }     from 'draft-js'

// Local dependencies
import Toolbar  from './components/toolbar/toolbar.jsx'
import Preview  from './components/preview/preview.jsx'
import compiler from './components/compiler/compiler.jsx'
import html     from './components/dictionaries/html.jsx'

// Module definition
class Editor extends React.Component {

  //
  state = {
    editorState: EditorState.createEmpty()
  }

  //
  static defaultProps = {
    toolbar:     true,
    placeholder: false,
    onChange:    Function
  }

  //
  export = (dictionary = html) => compiler(this.state.editorState, dictionary)

  //
  change = (editorState) => this.setState({ editorState }, this.props.onChange)

  //
  render = () =>

    <div className = 'editor' { ...this.props }>

      <Draft onChange    = { (editorState) => this.change(editorState) }
             editorState = { this.state.editorState }
             placeholder = { this.props.placeholder } />

      <Toolbar onChange    = { (editorState) => this.change(editorState) }
               editorState = { this.state.editorState }
               children    = { this.props.children } />

    </div>

}

// Exporter
export { Editor, Preview }
export * from './components/toolbar/toolbar.jsx';
