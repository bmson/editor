// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

//Local dependencies
import Textfield     from'./components/textfield.jsx'
import Bold          from'./components/toolbar/bold.jsx'
import Italic        from'./components/toolbar/italic.jsx'
import Underline     from'./components/toolbar/underline.jsx'
import Strikethrough from'./components/toolbar/strikethrough.jsx'
import Code          from'./components/toolbar/code.jsx'

// Module definition
export default class Editor extends React.Component {

  render () {

    //
    const Toolbar = ({ children, ...props }) =>

      <div className="toolbar">
        <Bold logo="bold" {...props} />
        <Italic logo="italic" {...props} />
        <Underline logo="underline" {...props} />
        <Strikethrough logo="strikethrough" {...props} />
        <Code logo="code" {...props} />
        {children}
      </div>

    // Editor
    const Container = ({ children, ...props }) =>

      <div className="editor" {...props}>
        <Textfield dispatcher={props.dispatcher} />
        <Toolbar dispatcher={props.dispatcher}>
          {children}
        </Toolbar>
      </div>

    //
    const dispatcher = new Map()

    //
    return <Container dispatcher={dispatcher} {...this.props} />

  }

}

// Render
ReactDOM.render(
  <Editor placeholder="type something..." />,
  document.getElementById('target')
)
