// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Bold extends React.Component {

  //
  select(event) {

    //
    const update = RichUtils.toggleInlineStyle(this.props.state, 'BOLD')
    this.props.onChange(update)

    //
    event.preventDefault()

  }

  //
  render = () =>
    <button onMouseDown = { e => this.select(e) }
            className    = { this.props.className }
            data-tooltip = { this.props.tooltip } />

}
