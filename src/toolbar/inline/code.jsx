// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Code extends React.Component {

  // Event handler
  select(event) {

    // Collect props
    const { state, onChange } = this.props

    // Toogle inline element and send to onChange callback
    const update = RichUtils.toggleInlineStyle(state, 'CODE')
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
