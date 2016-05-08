// Local dependencies
import Component from './component.jsx'

// Module definition
class Blockquote extends Component {

  onMouseDown = (state, element) =>
    element.block(state, 'BLOCKQUOTE')

}

// Module definition
class Ol extends Component {

  onMouseDown = (state, element) =>
    element.block(state, 'OL')

}

// Module definition
class Ul extends Component {

  onMouseDown = (state, element) =>
    element.block(state, 'UL')

}

// Module definition
class Pre extends Component {

  onMouseDown = (state, element) =>
    element.block(state, 'PRE')

}

// Exporter
export {
  Blockquote,
  Ol,
  Ul,
  Pre
}
