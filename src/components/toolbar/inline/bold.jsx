// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Bold extends React.Component {

  select(event) {

    //
    const { editor } = this.props

    //
    const richUtils = RichUtils.toggleInlineStyle(editor.editor.state.editorState, 'BOLD')
    editor.editor.setState(richUtils)

    //
    event.preventDefault()

  }

  render = () =>
    <button onMouseDown = { e => this.select(e) }
            data-tooltip = { this.props.tooltip }
            { ...this.props } />

}
