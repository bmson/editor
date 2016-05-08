// Local dependencies
import Component from './component.jsx'

// Module definition
export default class Bold extends Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'BOLD')

}

// Module definition
export default class Code extends Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'CODE')

}

// Module definition
export default class Italic extends Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'ITALIC')

}

// Module definition
export default class Strikethrough extends Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'STRIKETHROUGH')

}

// Module definition
export default class Underline extends Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'UNDERLINE')

}

// Exporter
export {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Underline
}
