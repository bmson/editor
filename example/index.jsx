// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Preview } from 'editor'

// Local dependencies
import HotContent from './components/hotContent.jsx'

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
      data: editor.compile()
    })

  }

  render = () =>

    <div>
      <Container ref = 'editor' placeholder = 'type something...' onChange = { this.update }>
        <HotContent className = 'codeBlock' tooltip = 'Hot Content' />
      </Container>

      <Preview data = { this.state.data } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
