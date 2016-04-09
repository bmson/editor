// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {Editor, EditorState} from 'draft-js'

// Module definition
class RichEditor extends React.Component {
  constructor(props) {
    super(props)

    // Store state
    this.state = {editorState: EditorState.createEmpty()}

    // Event handlers
    this.onChange = (editorState) => this.setState({editorState})
  }

  render() {

    var containerStyle = {
      height: 200,
      width: 400,
      background: 'red',
      overflow: 'auto'
    };

    const { editorState } = this.state
    return (
      <div className="editor">
        <Editor editorState={editorState} onChange={this.onChange} placeholder="something" />
      </div>
    )
  }
}

export default RichEditor
