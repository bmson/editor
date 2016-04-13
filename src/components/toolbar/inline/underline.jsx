// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Italic extends React.Component {

  onClick() {

    //
    const dispatcher = this.props.dispatcher;

    //
    if (dispatcher && dispatcher.has('editor')) {
      const editor = dispatcher.get('editor')
      const richUtils = RichUtils.toggleInlineStyle(editor.state.editorState, 'UNDERLINE')
      editor.updateState(richUtils)
    }

  }

  render() {
    return  <button onClick={this.onClick.bind(this)} {...this.props} />
  }

}
