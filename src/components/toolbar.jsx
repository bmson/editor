// Global dependencies
import React from 'react'

// Local dependencies
import Bold          from'./toolbar.assets/inline/bold.jsx'
import Italic        from'./toolbar.assets/inline/italic.jsx'
import Underline     from'./toolbar.assets/inline/underline.jsx'
import Strikethrough from'./toolbar.assets/inline/strikethrough.jsx'
import Code          from'./toolbar.assets/inline/code.jsx'
import Blockquote    from'./toolbar.assets/block/blockquote.jsx'
import UnorderedList from'./toolbar.assets/block/unorderedList.jsx'
import OrderedList   from'./toolbar.assets/block/orderedList.jsx'
import CodeBlock     from'./toolbar.assets/block/codeBlock.jsx'

//
const bindProps = (children, props) => {

  const fn = (child) => React.cloneElement(child, props)
  return React.Children.map(children, fn)

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
