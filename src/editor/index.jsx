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
  }
};

const myBlockRenderer = (contentBlock) => {

  const type = contentBlock.getType();
  if (type === 'sticky') {
    return {
      editable: true,
    };
  }

}

// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Element map
  static elements = new Map

  // Block map
  static blockMap = {
    get: (uid) => {

      //
      const exist = this.elements.has(uid)

      //
      if (!exist) {

        this.map.set(key, {
          element: 'div',
          wrapper: <figure className = { key } />
        })

      //
      } else return this.elements.get(key)

    }
  }

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { styleMap }
              blockRendererFn = { this.blockMap }
              blockStyleFn    = { e => e.getType() }
              blockRenderMap  = { myBlockRenderMap() }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
