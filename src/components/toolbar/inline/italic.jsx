// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Item extends React.Component {

  onClick() {

    //
    const { editorState, onChange } = this.props;

    //
    const richUtils = RichUtils.toggleInlineStyle(editorState, 'ITALIC')
    onChange(richUtils)

  }

  render() {
    return <button onMouseDown={e => this.onClick(e)} {...this.props} />
  }

}
