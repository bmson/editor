// Global dependencies
import React from 'react'

// Module definition
export default class Preview extends React.Component {

  //
  static defaultProps = {
    children: '',
    value:    ''
  }

  //
  render = () =>
    <div className='preview'>
      <div className='selection'>{ this.props.children }</div>
      <pre className='output'>{ this.props.value }</pre>
    </div>

}
