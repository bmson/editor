// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, Preview } from 'editor'

// Local dependencies
import Fullscreen from './components/fullscreen.jsx'
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
        <Fullscreen className = 'codeBlock' tooltip = 'Fullscreen' />
      </Editor>

      <Preview data = { this.state.data } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
