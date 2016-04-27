// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Bold extends React.Component {

  //
  static defaultProps = {
    onChange: Function
  }

  select(event) {

    //
    const { editor } = this.props

    //
    const editorState = RichUtils.toggleInlineStyle(editor.state.editorState, 'BOLD')
    editor.setState({ editorState }, editor.props.onChange)

    //
    event.preventDefault()

  }

  render = () =>
    <button onMouseDown = { e => this.select(e) }
            data-tooltip = { this.props.tooltip }
            { ...this.props } />

}
