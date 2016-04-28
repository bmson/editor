// Global dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Preview } from 'editor'

// Local dependencies
import HotContent from './components/hotContent.jsx'

// Module definition
export default class App extends React.Component {

  //
  state = {
    value: null
  }

  //
  update = () => {

    //
    const { editor } = this.refs

    //
    this.setState({
      value: editor.compile()
    })

  }

  render = () =>
    <div>
      <Container ref = 'editor'  onChange = { this.update }>
        <HotContent className = 'codeBlock' tooltip = 'Hot Content' />
      </Container>

      <Preview value = { this.state.value } />
    </div>

}

// Render
ReactDOM.render(<App />, document.getElementById('target'))
