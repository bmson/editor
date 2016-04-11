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

    const dispatcher = this.props.dispatcher
    dispatcher.input = this
    // componentDidMount
    // componentWillUnmount

    // Event handler
    this.onChange = (editorState) => this.setState({ editorState })
  }

  render() {
    return  <Editor onChange={this.onChange} editorState={this.state.editorState} {...this.props} />
  }

}

//
export default Input
