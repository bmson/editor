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
    onChange: Function
  }

  //
  compile = (dictionary) => this.refs.editor.compile(dictionary)

  //
  render = () =>
    <div className='editor' { ...this.props }>
      <Editor ref='editor' placeholder={ this.props.placeholder } onChange={ this.props.onChange } />

      <Toolbar editor={ this.refs } onChange={ this.props.onChange }>
        { this.props.children }
      </Toolbar>
    </div>

}

// Exporter
export { Container, Preview }
