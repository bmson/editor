// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, Preview } from 'editor'

// Local dependencies
import HotContent from './components/hotContent.jsx'
import dictionary from './components/dictionary.jsx'

// Module definition
export default class App extends React.Component {

  state = {
    data: null
  }

  update = () => {

    //
    const { editor } = this.refs

    //
    this.setState({
      data: editor.export(dictionary)
    })

  }

  render = () =>

    <div>
      <Editor ref = 'editor' placeholder = 'type something...' onChange = { this.update }>
        <HotContent className = 'codeBlock' tooltip = 'Hot Content' />
      </Editor>

      <Preview data = { this.state.data } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
