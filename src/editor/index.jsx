// Global dependencies
import React            from 'react'
import { Editor }       from 'draft-js'
import { EditorState }  from 'draft-js'
import { ContentState } from 'draft-js'

// Local dependencies
import style    from './stylesheet.css'
import stylemap from './stylemap.jsx'

// Module definition
export default class extends React.Component {

  // Exposed API
  static create = (text, decorator) => {

    // Create content state and fallback to empty string
    const contentState = ContentState.createFromText(text || '')
    return EditorState.createWithContent(contentState, decorator)

  }

  // Block render
  blockRenderMap = {
    get: (uid) => {

      // Get map and check if it includes the uid
      const map   = this._map = this._map || new Map
      const exist = map.has(uid)

      // Return map value if it exists
      if (exist) {
        return map.get(uid)
      }

      // Create map value based on uid
      switch (uid) {

        case 'UL':
          map.set(uid, {
            element: 'li',
            wrapper: <ul className = { uid } />
          })
        break

        case 'OL':
          map.set(uid, {
            element: 'li',
            wrapper: <ol className = { uid } />
          })
        break

        default:
          map.set(uid, {
            element: 'div',
            wrapper: <figure className = { uid } />
          })
        break

      }

      // Return current map value
      return map.get(uid)

    }
  }

  // Render component
  render = () =>
    <div className = { style.editor }>

      <Editor customStyleMap  = { stylemap }
              blockRenderMap  = { this.blockRenderMap }
              onChange        = { this.props.onChange }
              editorState     = { this.props.state }
              placeholder     = { this.props.placeholder } />

    </div>

}
