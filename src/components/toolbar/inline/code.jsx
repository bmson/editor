// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Code extends React.Component {

  onClick(e) {

    //
    const { editorState, onChange } = this.props

    //
    const richUtils = RichUtils.toggleInlineStyle(editorState, 'CODE')
    onChange(richUtils)

    //
    e.preventDefault()

  }

  render = () =>
    <button onMouseDown={e => this.onClick(e)}
            data-tooltip={this.props.tooltip}
            {...this.props} />

}
