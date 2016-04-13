// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class UnorderedList extends React.Component {

  onClick() {

    //
    const dispatcher = this.props.dispatcher;

    //
    if (dispatcher && dispatcher.has('editor')) {
      const editor = dispatcher.get('editor')
      const richUtils = RichUtils.toggleBlockType(editor.state.editorState, 'unordered-list-item')
      editor.updateState(richUtils)
    }

  }

  render() {
    return  <button onClick={this.onClick.bind(this)} {...this.props} />
  }

}
