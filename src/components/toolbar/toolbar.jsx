// Global dependencies
import React from 'react'

// Local dependencies
import Bold          from './inline/bold.jsx'
import Italic        from './inline/italic.jsx'
import Underline     from './inline/underline.jsx'
import Strikethrough from './inline/strikethrough.jsx'
import Code          from './inline/code.jsx'
import Blockquote    from './block/blockquote.jsx'
import UnorderedList from './block/unorderedList.jsx'
import OrderedList   from './block/orderedList.jsx'
import CodeBlock     from './block/codeBlock.jsx'

// Module definition
export default class Preview extends React.Component {

  //
  static defaultProps = {
    children: '',
    data:     ''
  }

  //
  bindProps = (props) => {
    const fn = (child) => React.cloneElement(child, { ...this.props.editor })
    return React.Children.map(props.children, fn)
  }

  //
  render = () =>
    <div className='toolbar'>
      <div className='group'>

        <Bold className = 'bold'
              tooltip   = 'Bold style'
              { ...this.props.editor } />

        <Italic className = 'italic'
                tooltip   = 'Italic style'
                { ...this.props.editor } />

        <Underline className='underline' tooltip='Underline style'  { ...this.props.editor } />
        <Strikethrough className='strikethrough' tooltip='Strikethrough style' { ...this.props.editor } />
      </div>

      <div className='group'>
        <UnorderedList className='unorderedList' tooltip='Unordered list style' { ...this.props.editor } />
        <OrderedList className='orderedList' tooltip='Ordered list style' { ...this.props.editor } />
      </div>

      <div className='group'>
        <Code className='code' tooltip='Code style' { ...this.props.editor } />
        <Blockquote className='blockquote' tooltip='Blockquote style' { ...this.props.editor } />
        <CodeBlock className='codeBlock' tooltip='Codeblock style' { ...this.props.editor } />
      </div>

      { this.bindProps(this.props) }
    </div>

}
