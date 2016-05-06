// Global dependencies
import React           from 'react'
import { Editor }      from 'draft-js'
import { EditorState } from 'draft-js'

// Style dependencies
import style from './stylesheet.css'
import stylemap from './stylemap.jsx'

// Module definition
export default class extends React.Component {

  // Exposed API
  static createEmpty       = (...args) => EditorState.createEmpty(...args)
  static createWithContent = (...args) => EditorState.createWithContent(...args)

  // Element map
  elementMap = new Map

  // Block render
  blockRenderMap = {
    get: (uid) => {

      // Get map and check if it includes the uid
      const map   = this.elementMap
      const exist = map.has(uid)

      //
      !exist && map.set(uid, {
        element: 'div',
        wrapper: <figure className = { uid } style = { stylemap[uid] } />
      })

      // Return current map value
      return map.get(uid)

    }
  }

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { stylemap }
              blockStyleFn    = { e => e.getType() }
              blockRenderMap  = { this.blockRenderMap }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
