// Dependencies
import React from 'react'

// Module definition
class Item extends React.Component {

  render() {
    return  <button name="{this.props.type}">{this.props.type}</button>
  }

}

//
export default Item
