// Global dependencies
import React           from 'react'
import { Editor }      from 'draft-js'
import { EditorState } from 'draft-js'

import { Map } from 'immutable'

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

const myBlockRenderMap = () => {

  return Map({
    'unordered-list-item': {
      element: 'li',
      wrapper: <ul className='unordered-list-item' />
    },
    'ordered-list-item': {
      element: 'li',
      wrapper: <ol className='ordered-list-item' />
    },
    'blockquote': {
      element: 'div',
      wrapper: <figure className='blockquote' />
    },
    'code-block': {
      element: 'div',
      wrapper: <figure className='code-block' />
    },
    'sticky': {
      element: 'div',
      wrapper: <figure className='sticky' />
    },
    'unstyled': {
      element: 'div',
    },
  })

}

// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { styleMap }
              blockRendererFn = { myBlockRenderer }
              blockStyleFn    = { e => e.getType() }
              blockRenderMap  = { myBlockRenderMap() }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
