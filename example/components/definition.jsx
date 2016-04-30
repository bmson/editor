// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class OrderedList extends React.Component {

  //
  select(event) {

    //
    const { editor, editor:{state} } = this.props

    //
    console.log(editor, state)

    //
    event.preventDefault()

  }

  //
  render = () =>
    <button onMouseDown = { e => this.select(e) }
            data-tooltip = { this.props.tooltip }
            { ...this.props } />

}
