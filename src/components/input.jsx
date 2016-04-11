// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'

// Module definition
class Input extends React.Component {

  constructor() {
    super(...arguments)

    // Store staste
    this.state = {
      editorState: EditorState.createEmpty()
    }

    // Event handlers
    this.onChange = (editorState) => this.setState({ editorState })
  }

  render() {
    return  <Editor editorState={this.state.editorState}
                    onChange={this.onChange}
                    placeholder="something" />
  }

}

//
export default Input
