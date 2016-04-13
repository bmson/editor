// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState } from 'draft-js'


// Local dependencies
import converter  from'./converter.jsx'
import dictionary from'./dictionaries/html.jsx'

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

    const content = editorState.getCurrentContent()
    const converted = converter(content, dictionary);

    console.log(converted);
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
