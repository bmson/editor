// Global dependencies
import React from 'react'
import { EditorState } from 'draft-js'

// Local dependencies
import Dispatcher from'./dispatcher.jsx'
import converter from'./converter.jsx'
import dictionary from'./dictionaries/html.jsx'

// Module definition
export default class Preview extends React.Component {

  state = {
    compiled: ''
  }

  componentDidMount() {

    const editor = this.props.dispatcher.editor

    editor.componentDidUpdate = () => {

      const content  = editor.state.editorState.getCurrentContent()
      const compiled = converter(content, dictionary)

      this.setState({ compiled })

    }

  }

  render() {
    return <pre className='preview'>{this.state.compiled}</pre>
  }

}
