// Global dependencies
import React from 'react'

// Module definition
export default class Preview extends React.Component {

  render = () =>
    <div className='preview'>
      <div className='selection'>
        {this.props.children}
      </div>

      <pre className='output'>{this.props.editorState}</pre>
    </div>

}
