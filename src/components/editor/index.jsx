// Global dependencies
import React           from 'react'
import { Editor }      from 'draft-js'
import { EditorState } from 'draft-js'

// Style dependencies
import style from './stylesheet.css'

const styleMap = {
  'HIGHLIGHT': {
    background: 'rgb(255, 231, 154)'
  },

  'BLACKOUT': {
    background: 'rgb(0, 0, 0)',
    color: 'rgb(0, 0, 0)'
  }
};


// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap = { styleMap }
              onChange       = { this.props.onChange }
              editorState    = { this.props.state }
              placeholder    = { this.props.placeholder } />

    </div>

}
