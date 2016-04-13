// Dependencies
import React from 'react'
import { RichUtils } from 'draft-js';
import Dispatcher from'./../../dispatcher.jsx'

// Module definition
export default class Italic extends React.Component {

  onClick() {

    //
    const dispatcher = new Dispatcher(this.props.dispatcher);

    //
    dispatcher.connect('editor', component => {
      const richUtils = RichUtils.toggleInlineStyle(component.state.editorState, 'UNDERLINE')
      component.updateState(richUtils)
    })

  }

  render() {
    return  <button onClick={this.onClick.bind(this)} {...this.props} />
  }

}
