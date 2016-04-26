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
    placeholder: false,
    onChange:    Function
  }

  //
  state = {
    editorState: EditorState.createEmpty()
  }

  //
  compile = (dictionary = html) => {
    return compiler(this.state.editorState, dictionary)
  }

  //
  render = () =>
    <Draft onChange    = { editorState => this.setState({ editorState }, this.props.onChange) }
           editorState = { this.state.editorState }
           placeholder = { this.props.placeholder } />


}
