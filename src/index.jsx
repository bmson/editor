// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'

// Local dependencies
import Toolbar from'./components/toolbar/index.jsx'
import Preview from'./components/preview.jsx'

// Toolbar dependencies
import Bold          from'./components/toolbar/inline/bold.jsx'
import Italic        from'./components/toolbar/inline/italic.jsx'
import Underline     from'./components/toolbar/inline/underline.jsx'
import Strikethrough from'./components/toolbar/inline/strikethrough.jsx'
import Code          from'./components/toolbar/inline/code.jsx'
import Blockquote    from'./components/toolbar/block/blockquote.jsx'
import UnorderedList from'./components/toolbar/block/unorderedList.jsx'
import OrderedList   from'./components/toolbar/block/orderedList.jsx'
import CodeBlock     from'./components/toolbar/block/codeBlock.jsx'

// Module definition
export default class App extends React.Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  onChange(editorState) {
    this.setState({ editorState })
  }

  render () {

    // Editor
    const Container = ({ children, ...props }) =>

      <div className='editor' {...props}>
        <Editor onChange={props.onChange} editorState={props.editorState} placeholder={props.placeholder} />

        <Toolbar onChange={props.onChange} editorState={props.editorState}>
          {children}
        </Toolbar>

        <Preview editorState={props.editorState} />
      </div>

    console.log('1');

    //
    return <Container onChange={e => this.onChange(e)} editorState={this.state.editorState} {...this.props} />

  }

}

// Render
ReactDOM.render(
  <App placeholder='type something...'>
    <CodeBlock className='codeBlock' />
  </App>,
  document.getElementById('target')
)
