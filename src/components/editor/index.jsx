// Global dependencies
import React           from 'react'
import { Editor }      from 'draft-js'
import { EditorState } from 'draft-js'

// Style dependencies
import style from './stylesheet.css'

// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Render component
  render = () =>
    <div className = { style.editor }>
      <Editor onChange = { this.props.onChange } editorState = { this.props.state } placeholder = { this.props.placeholder } />
    </div>

}
