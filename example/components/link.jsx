// Dependencies
import React         from 'react'
import { RichUtils } from 'draft-js'
import { Entity }    from 'draft-js'

// Module definition
export default class Link extends React.Component {

  // Event handler
  select(event) {

    // Collect props
    const { state, onChange } = this.props

    //
    const selection = state.getSelection()
    const entityKey = Entity.create('LINK', 'MUTABLE', { className: 'scramble' })
    const update = RichUtils.toggleLink(state, selection, entityKey)
    //const update = RichUtils.toggleInlineStyle(state, 'LINK')

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
