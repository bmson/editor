// Global dependencies
import React           from 'react'
import { EditorState } from 'draft-js'

// Local dependencies
import converter  from'./converter.jsx'
import dictionary from'./dictionaries/html.jsx'

// Module definition
export default class Preview extends React.Component {

  constructor() {
    super(...arguments)

    this.state = {
      compiled: ''
    }
  }

  componentDidMount() {

    /*
    //
    const dispatcher = new Dispatcher(this.props.dispatcher)

    //
    dispatcher.get('editor', component => {
      const content  = component.state.editorState.getCurrentContent()
      const compiled = converter(content, dictionary)

      this.setState({ compiled })
    })
    */

    const dispatcher = this.props.dispatcher;

    //
    if (dispatcher && dispatcher.has('editor')) {
      const editor = dispatcher.get('editor')

      editor.componentDidUpdate = () => {
        const editorState = editor.state.editorState

        const content = editorState.getCurrentContent()
        const compiled = converter(content, dictionary)

        this.setState({ compiled })
      }
    }

  }

  render() {
    return <pre className='preview'>{this.state.compiled}</pre>
  }

}
