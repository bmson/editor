// Global dependencies
import React           from 'react'
import { Editor }      from 'draft-js'
import { EditorState } from 'draft-js'

// Module definition
export default class extends React.Component {

  //
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  //
  render = () =>
    <Editor onChange    = { this.props.onChange }
            editorState = { this.props.state }
            placeholder = { this.props.placeholder } />

}
