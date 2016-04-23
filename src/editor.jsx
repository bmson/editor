// Global dependencies
import React    from 'react'
import { Editor, EditorState } from 'draft-js'

// Local dependencies
import Toolbar  from'./components/toolbar/toolbar.jsx'
import Preview  from'./components/preview/preview.jsx'
import compiler from'./components/compiler/compiler.jsx'

// Dictionaries
import html     from'./components/dictionaries/html.jsx'
import plain    from'./components/dictionaries/plain.jsx'
import markdown from'./components/dictionaries/markdown.jsx'
import jira     from'./components/dictionaries/jira.jsx'

// Module definition
export default class App extends React.Component {

  state = {
    editorState: EditorState.createEmpty(),
    dictionary:  html
  }

  render = () =>

    <div className='editor' { ...this.props }>

      <Editor onChange = { editorState => this.setState({editorState}) }
              editorState = { this.state.editorState }
              placeholder = { this.props.placeholder } />

      <Toolbar onChange = { editorState => this.setState({editorState}) }
               editorState = { this.state.editorState }
               children = { this.props.children } />

      <Preview>
        <div className='selection'>
          <div onClick = { e => this.setState({ dictionary: html }) }>html</div>
          <div onClick = { e => this.setState({ dictionary: plain }) }>plain</div>
          <div onClick = { e => this.setState({ dictionary: markdown }) }>markdown</div>
          <div onClick = { e => this.setState({ dictionary: jira }) }>jira</div>
        </div>
        <pre className='output'>
          { compiler(this.state.editorState, this.state.dictionary) }
        </pre>
      </Preview>

    </div>

}
