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
      <Bold className='bold' tooltip='Bold style' {...props} />
      <Italic className='italic' tooltip='Italic style' {...props} />
      <Underline className='underline' tooltip='Underline style'  {...props} />
      <Strikethrough className='strikethrough' tooltip='Strikethrough style' {...props} />
    </div>

    <div className='group'>
      <UnorderedList className='unorderedList' tooltip='Unordered list style' {...props} />
      <OrderedList className='orderedList' tooltip='Ordered list style' {...props} />
    </div>

    <div className='group'>
      <Code className='code' tooltip='Code style' {...props} />
      <Blockquote className='blockquote' tooltip='Blockquote style' {...props} />
      <CodeBlock className='codeBlock' tooltip='Codeblock style' {...props} />
    </div>

    {bindProps(children, props)}
  </div>
