// Global dependencies
import React from 'react'

// Local dependencies
import Bold          from'./inline/bold.jsx'
import Italic        from'./inline/italic.jsx'
import Underline     from'./inline/underline.jsx'
import Strikethrough from'./inline/strikethrough.jsx'
import Code          from'./inline/code.jsx'
import Blockquote    from'./block/blockquote.jsx'
import UnorderedList from'./block/unorderedList.jsx'
import OrderedList   from'./block/orderedList.jsx'
import CodeBlock     from'./block/codeBlock.jsx'

//
const bindProps = (children, props) => {

  const fnChildren = (child) => React.cloneElement(child, props)
  return React.Children.map(children, fnChildren)

}

// Module definition
export default ({ children, ...props }) =>

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

    {bindProps(children, props)}
  </div>
