// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Item extends React.Component {

  onClick() {

    //
    const { editorState, onChange } = this.props;

    //
    const richUtils = RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    onChange(richUtils)

  }

  render() {
    return <button onMouseDown={e => this.onClick(e)} {...this.props} />
  }

}
