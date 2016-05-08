// Global dependencies
import React from 'react'

// Local dependencies
import style from './stylesheet.css'

// Module definition
export default class extends React.Component {

  //
  state = {
    output: ''
  }

  //
  componentWillReceiveProps = (props) => {

    //
    const trim   = (props.value).trim()
    const split  = trim.split('\n')
    const output = split.map((string, index) => <div key = { index }>{ string || String.fromCharCode(0) }</div>)

    //
    this.setState({ output })

  }

  // Render component
  render = () =>
    <div className = { style.preview }>
      <div className = 'selection'>{ this.props.children }</div>
      <pre className = 'output'>{ this.state.output }</pre>
    </div>

}
