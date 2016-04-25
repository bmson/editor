// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// Local dependencies
import { Editor, Preview } from './../src/index.jsx'
import Image from './../src/components/toolbar/inline/image.jsx'

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
      data: editor.export()
    })

  }

  render = () =>

    <div>
      <Editor ref = 'editor' placeholder = 'type something...' onChange = { this.update }>
        <Image className = 'codeBlock' tooltip = 'Hot content' />
      </Editor>

      <Preview data = { this.state.data } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
