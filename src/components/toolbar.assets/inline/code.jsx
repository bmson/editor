// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Item extends React.Component {

  onClick() {

    //
    const { editorState, onChange } = this.props;

    //
    const richUtils = RichUtils.toggleInlineStyle(editorState, 'CODE')
    onChange(richUtils)

  }

  render = () =>
    <button onMouseDown={e => this.onClick(e)} {...this.props} />

}
