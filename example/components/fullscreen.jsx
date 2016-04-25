// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
export default class Bold extends React.Component {

  onClick(e) {

    //
    console.log('Set fullscreen')

    //
    e.preventDefault()

  }

  render = () =>
    <button onMouseDown={e => this.onClick(e)}
            data-tooltip={this.props.tooltip}
            {...this.props} />

}
