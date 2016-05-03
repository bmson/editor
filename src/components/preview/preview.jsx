// Global dependencies
import React from 'react'

// Module definition
export default class extends React.Component {

  // Render component
  render = () =>
    <div className = 'preview'>
      <div className = 'selection'>{ this.props.children }</div>
      <pre className = 'output'>{ this.props.value }</pre>
    </div>

}
