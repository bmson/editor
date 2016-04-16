// Global dependencies
import React from 'react'

// Local dependencies
import converter from'./preview.assets/converter.jsx'
import dictionary from'./preview.assets/dictionaries/html.jsx'

// Module definition
export default class Preview extends React.Component {

  format(state) {

    //
    const content  = state.getCurrentContent()
    const compiled = converter(content, dictionary)

    //
    return compiled

  }

  render = () =>
    <pre className='preview'>{this.format(this.props.editorState)}</pre>

}
