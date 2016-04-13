// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'
import Dispatcher from'./dispatcher.jsx'

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
    const dispatcher = new Dispatcher(this.props.dispatcher)
    dispatcher.mount('editor', this)
  }

  componentWillUnmount() {
    const dispatcher = new Dispatcher(this.props.dispatcher)
    dispatcher.unmount('editor', this)
  }

  render() {
    return  <Editor onChange={this.updateState.bind(this)} editorState={this.state.editorState} {...this.props} />
  }

}
