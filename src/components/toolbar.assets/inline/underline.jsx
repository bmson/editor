// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Underline extends React.Component {

  onClick(e) {

    //
    const { editorState, onChange } = this.props;

    //
    const richUtils = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE')
    onChange(richUtils)

    //
    e.preventDefault()

  }

  render = () =>
    <button onMouseDown={e => this.onClick(e)}
            data-tooltip={this.props.tooltip}
            {...this.props} />

}
