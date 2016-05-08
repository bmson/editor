// Global dependencies
import React         from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Component extends React.Component {

  // Default action
  onMouseDown = (state, element) =>
    element.inline(state, null)

  // Event handler
  select(event) {

    // Collect props
    const { state, onChange } = this.props

    // Block and inline togglers
    const inline = RichUtils.toggleInlineStyle
    const block  = RichUtils.toggleBlockType

    // Toogle state and send to onChange callback
    const updatedState = this.onMouseDown(state, { inline, block })
    onChange(updatedState)

    // Prevent default event
    event.preventDefault()

  }

  // Render component
  render = () =>
    <button onMouseDown  = { e => this.select(e) }
            className    = { this.props.className }
            data-tooltip = { this.props.tooltip } />

}
