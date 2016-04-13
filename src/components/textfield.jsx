// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

import Converter from'./converter.jsx'

// DraftJS Dependencies
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw } from 'draft-js'

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

    const customState = editorState.getCurrentContent()
    const raw = convertToRaw(customState)

    const exporter = new Converter(raw);

    console.log( exporter.export() );
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
