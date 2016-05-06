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
  },

  'CODE': {
    margin: '0 1px 1px 0',
    padding: '0 1px',
    display: 'inline-block',
    background: 'rgb(240, 240, 240)',
    border: '1px solid rgb(220, 220, 220)',
    borderRadius: '1px',
    fontFamily: 'monospace',
    fontSize: '.9em',
    color: 'rgb(200, 0, 0)'
  },


};

// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Element map
  elements = new Map

  // Block map
  createBlocks = {
    get: (uid) => {

      //
      const exist = this.elements.has(uid)

      //
      !exist && this.elements.set(uid, {
        element: 'div',
        wrapper: <figure className = { uid } />
      })

      //
      return this.elements.get(uid)

    }
  }

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { styleMap }
              blockStyleFn    = { e => e.getType() }
              blockRenderMap  = { this.createBlocks }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
