// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

// Module definition
class RichEditor extends React.Component {
  constructor(props) {
    super(props);

    // Store state
    this.state = {editorState: EditorState.createEmpty()};

    // Event handlers
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

export default RichEditor
