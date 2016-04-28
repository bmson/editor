// React
import React from 'react'

// Local dependencies
import Editor   from './components/editor/editor.jsx'
import Toolbar  from './components/toolbar/toolbar.jsx'
import Preview  from './components/preview/preview.jsx'

// Module definition
class Container extends React.Component {

  //
  static defaultProps = {
    onChange: e => e,
    placeholder: 'Click and type…'
  }

  //
  compile = (dictionary) =>
    this.refs.editor.compile(dictionary)

  //
  componentDidMount = () =>
    this.forceUpdate()

  //
  render = () =>
    <div className = 'editor'>
      <Editor ref = 'editor' placeholder = { this.props.placeholder } onChange = { this.props.onChange } />

      <Toolbar editor = { this.refs }>
        { this.props.children }
      </Toolbar>
    </div>

}

// Exporter
export { Container, Preview }
