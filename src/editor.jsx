// Global dependencies
import React    from 'react'
import { Editor, EditorState } from 'draft-js'

// Local dependencies
import Toolbar from'./components/toolbar.jsx'
import Preview from'./components/preview.jsx'

// Module definition
export default class App extends React.Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  render = () =>

    <div className='editor' {...this.props}>

      <Editor onChange={editorState => this.setState({editorState})}
              editorState={this.state.editorState}
              placeholder={this.props.placeholder} />

      <Toolbar onChange={editorState => this.setState({editorState})}
               editorState={this.state.editorState}
               children={this.props.children}>
      </Toolbar>

      <Preview editorState={this.state.editorState} />

    </div>

}
