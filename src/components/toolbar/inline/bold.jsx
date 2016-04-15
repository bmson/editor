// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';
import Dispatcher from'./../../dispatcher.jsx'

// Module definition
export default class Item extends React.Component {

  onClick() {

    const editor = this.props.dispatcher.editor

    const richUtils = RichUtils.toggleInlineStyle(editor.state.editorState, 'BOLD')
    editor.updateState(richUtils)

  }

  render() {
    return  <button onClick={this.onClick.bind(this)} {...this.props} />
  }

}
