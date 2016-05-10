// Global dependencies
import React            from 'react'
import { Editor }       from 'draft-js'
import { EditorState }  from 'draft-js'
import { ContentState } from 'draft-js'

// Local dependencies
import style       from './stylesheet.css'
import stylemap    from './renderer/stylemap.jsx'
import BlockRender from './renderer/block.jsx'

// Module definition
export default class extends React.Component {

  // Exposed API
  static create = (text, decorator) => {

    // Create content state and fallback to empty string
    const contentState = ContentState.createFromText(text || '')
    return EditorState.createWithContent(contentState, decorator)

  }

  // Dynamic block render map
  blockRender = new BlockRender

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { stylemap }
              blockRenderMap  = { this.blockRender }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
