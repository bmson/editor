// Global dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// Local dependencies
import Textfield  from'./components/textfield.jsx'
import Preview    from'./components/preview.jsx'
import Dispatcher from'./components/dispatcher.jsx'

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
export default class Editor extends React.Component {

  dispatcher = {
  }

  render () {

    //
    const fnChildren = (child) => React.cloneElement(child, { dispatcher: this.dispatcher })
    const childrenProps = React.Children.map(this.props.children, fnChildren);

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
          {childrenProps}
        </Toolbar>

        <Preview dispatcher={props.dispatcher} />
      </div>

    //
    return <Container dispatcher={this.dispatcher} {...this.props} />

  }

}

// Render
ReactDOM.render(
  <Editor placeholder='type something...'>
    <CodeBlock className='codeBlock' />
  </Editor>,
  document.getElementById('target')
)
