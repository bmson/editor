// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// DraftJS Dependencies
import {
  Editor,
  EditorState,
  RichUtils } from 'draft-js'

// Module definition
export default class Textfield extends React.Component {

  constructor() {
    super(...arguments)

    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  updateState(editorState) {
    this.setState({ editorState })
  }

  componentDidMount() {
    this.props.dispatcher.set('editor', this);
  }

  componentWillUnmount() {
    this.props.dispatcher.delete('editor', this);
  }

  render() {
    return  <Editor onChange={this.updateState.bind(this)} editorState={this.state.editorState} {...this.props} />
  }

}
