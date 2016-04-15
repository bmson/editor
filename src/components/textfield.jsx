// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'
import Dispatcher from'./dispatcher.jsx'

// Module definition
export default class Textfield extends React.Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  updateState(editorState) {
    this.setState({ editorState })
  }

  componentDidMount() {
    this.props.dispatcher.editor = this;
  }

  componentWillUnmount() {
    delete this.props.dispatcher.editor;
  }

  render() {
    return  <Editor onChange={this.updateState.bind(this)} editorState={this.state.editorState} {...this.props} />
  }

}
