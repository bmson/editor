// Dependencies
import { Toolbar } from 'editor'

// Module definition
export default class Bold extends Toolbar.Component {

  onMouseDown = (state, element) =>
    element.inline(state, 'BLACKOUT')

}
