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
export default class extends React.Component {

  // Add props to children
  cloneChildren = (children, options) => {
    const fn = (child) => React.cloneElement(child, options)
    return React.Children.map(children, fn)
  }

  // Render component
  render = () =>
    <div className = 'toolbar'>
      <div className = 'group'>
        <Bold          className = 'bold'          tooltip = 'Bold style'          { ...this.props } />
        <Italic        className = 'italic'        tooltip = 'Italic style'        { ...this.props } />
        <Underline     className = 'underline'     tooltip = 'Underline style'     { ...this.props } />
        <Strikethrough className = 'strikethrough' tooltip = 'Strikethrough style' { ...this.props } />
      </div>

      <div className = 'group'>
        <UnorderedList className = 'unorderedList' tooltip = 'Unordered list style' { ...this.props } />
        <OrderedList   className = 'orderedList'   tooltip = 'Ordered list style'   { ...this.props } />
      </div>

      <div className = 'group'>
        <Code       className = 'code'       tooltip = 'Code style'       { ...this.props } />
        <Blockquote className = 'blockquote' tooltip = 'Blockquote style' { ...this.props } />
        <CodeBlock  className = 'codeBlock'  tooltip = 'Codeblock style'  { ...this.props } />
      </div>

      { this.cloneChildren(this.props.children, { ...this.props }) }
    </div>

}
