// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// Local dependencies
import Textfield     from'./components/textfield.jsx'
import Bold          from'./components/toolbar/inline/bold.jsx'
import Italic        from'./components/toolbar/inline/italic.jsx'
import Underline     from'./components/toolbar/inline/underline.jsx'
import Strikethrough from'./components/toolbar/inline/strikethrough.jsx'
import Code          from'./components/toolbar/inline/code.jsx'
import Blockquote    from'./components/toolbar/block/blockquote.jsx'
import UnorderedList from'./components/toolbar/block/unorderedList.jsx'
import OrderedList   from'./components/toolbar/block/orderedList.jsx'
import CodeBlock     from'./components/toolbar/block/codeBlock.jsx'
import Preview       from'./components/preview.jsx'

// Module definition
export default class Editor extends React.Component {

  render () {

    //
    const Toolbar = ({ children, ...props }) =>

      <div className='toolbar'>

        <div className='group'>
          <Bold className='bold' {...props} />
          <Italic className='italic' {...props} />
          <Underline className='underline' {...props} />
          <Strikethrough className='strikethrough' {...props} />
        </div>

        <div className='group'>
          <UnorderedList className='unorderedList' {...props} />
          <OrderedList className='orderedList' {...props} />
        </div>

        <div className='group'>
          <Code className='code' {...props} />
          <Blockquote className='blockquote' {...props} />
          <CodeBlock className='codeBlock' {...props} />
        </div>

        {children}
      </div>

    // Editor
    const Container = ({ children, ...props }) =>

      <div className='editor' {...props}>
        <Textfield dispatcher={props.dispatcher} />

        <Toolbar dispatcher={props.dispatcher}>
          {children}
        </Toolbar>

        <Preview dispatcher={props.dispatcher} />
      </div>

    //
    const dispatcher = new Map()

    //
    return <Container dispatcher={dispatcher} {...this.props} />

  }

}

// Render
ReactDOM.render(
  <Editor placeholder='type something...' />,
  document.getElementById('target')
)
