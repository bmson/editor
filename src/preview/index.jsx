// Global dependencies
import React from 'react'

// Style dependencies
import style from './stylesheet.css'

// Module definition
export default class extends React.Component {

  // Render component
  render = () =>
    <div className = { style.preview }>
      <div className = 'selection'>{ this.props.children }</div>
      <pre className = 'output'>{ this.props.value }</pre>
    </div>

}
