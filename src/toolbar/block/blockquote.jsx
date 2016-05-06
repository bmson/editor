// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Blockquote extends React.Component {

  // Event handler
  select(event) {

    // Collect props
    const { state, onChange } = this.props

    // Toogle block element and send to onChange callback
    const update = RichUtils.toggleBlockType(state, 'BLOCKQUOTE')
    onChange(update)

    // Prevent default event
    event.preventDefault()

  }

  // Render component
  render = () =>
    <button onMouseDown  = { e => this.select(e) }
            className    = { this.props.className }
            data-tooltip = { this.props.tooltip } />

}
