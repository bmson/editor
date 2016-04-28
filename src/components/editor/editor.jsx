// Global dependencies
import React               from 'react'
import { Editor as Draft } from 'draft-js'
import { EditorState }     from 'draft-js'

// Local dependencies
import compiler from './compiler/compiler.jsx'
import html     from './dictionaries/html.jsx'

// Module definition
export default class Editor extends React.Component {

  //
  static defaultProps = {
    onChange: e => e,
    placeholder: 'Click and type…'
  }

  //
  state = {
    editor: EditorState.createEmpty()
  }

  //
  compile = (dictionary = html) =>
    compiler(this.state.editor, dictionary)

  //
  render = () =>
    <Draft onChange    = { editor => this.setState({ editor }, this.props.onChange) }
           editorState = { this.state.editor }
           placeholder = { this.props.placeholder } />

}
