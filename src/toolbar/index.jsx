// Global dependencies
import React     from 'react'
import Component from './items/component.jsx'
import style     from './stylesheet.css'

// Inline dependencies
import { Bold }          from './items/inline.jsx'
import { Italic }        from './items/inline.jsx'
import { Underline }     from './items/inline.jsx'
import { Strikethrough } from './items/inline.jsx'
import { Code }          from './items/inline.jsx'

// Block dependencies
import { Blockquote } from './items/block.jsx'
import { Ul }         from './items/block.jsx'
import { Ol }         from './items/block.jsx'
import { Pre }        from './items/block.jsx'

// Module definition
export default class extends React.Component {

  // Exposed API
  static Component     = Component
  static Bold          = Bold
  static Italic        = Italic
  static Underline     = Underline
  static UnorderedList = Ul
  static OrderedList   = Ol
  static Code          = Code
  static Blockquote    = Blockquote
  static CodeBlock     = Pre

  // Add props to children
  cloneChildren = (children, options) => {
    const fn = (child) => React.cloneElement(child, options)
    return React.Children.map(children, fn)
  }

  // Render component
  render = () =>
    <div className = { style.toolbar }>
      <div className = 'group'>
        <Bold          className = { style.bold }          tooltip = 'Bold style'          { ...this.props } />
        <Italic        className = { style.italic }        tooltip = 'Italic style'        { ...this.props } />
        <Underline     className = { style.underline }     tooltip = 'Underline style'     { ...this.props } />
        <Strikethrough className = { style.strikethrough } tooltip = 'Strikethrough style' { ...this.props } />
      </div>

      <div className = 'group'>
        <Ul className = { style.unorderedList } tooltip = 'Unordered list style' { ...this.props } />
        <Ol className = { style.orderedList }   tooltip = 'Ordered list style'   { ...this.props } />
      </div>

      <div className = 'group'>
        <Code       className = { style.code }       tooltip = 'Code style'       { ...this.props } />
        <Blockquote className = { style.blockquote } tooltip = 'Blockquote style' { ...this.props } />
        <Pre        className = { style.codeBlock }  tooltip = 'Codeblock style'  { ...this.props } />
      </div>

      { this.cloneChildren(this.props.children, { ...this.props }) }
    </div>

}
