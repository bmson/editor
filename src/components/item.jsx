// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';

// Module definition
class Item extends React.Component {

  onClick() {

    //
    const dispatcher = this.props.dispatcher
    const input = dispatcher.input

    const utils = RichUtils.toggleInlineStyle(input.state.editorState, 'BOLD');

    input.onChange(utils)


  }

  render() {
    return  <button onClick={this.onClick.bind(this)} {...this.props}>{this.props.name}</button>
  }

}

//
export default Item
