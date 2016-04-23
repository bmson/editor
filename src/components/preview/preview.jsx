// Global dependencies
import React from 'react'

// Module definition
export default class Preview extends React.Component {

  render = () =>
    <div className='preview'>
      {this.props.children}
    </div>

}
