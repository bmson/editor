// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class UnorderedList extends React.Component {

  //
  select(event) {

    //
    const { editor, editor:{state} } = this.props

    //
    const richUtils = RichUtils.toggleBlockType(state.editor, 'unordered-list-item')
    editor.setState({ editor: richUtils })

    //
    event.preventDefault()

  }

  //
  render = () =>
    <button onMouseDown = { e => this.select(e) }
            data-tooltip = { this.props.tooltip }
            { ...this.props } />

}
