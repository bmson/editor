// Dependencies
import React from 'react'

// Module definition
export default class Dispatcher extends React.Component {

  constructor(reference) {
    super(...arguments)

    //
    if (reference)
      this.reference = reference
    else
      return this.reference = new Map()

  }

  //
  mount(name, value) {
    this.reference && this.reference.set(name, value)
  }

  //
  unmount(name) {
    this.reference && this.reference.delete(name)
  }

  //
  connect(name, callback) {

    //
    const component = this.reference && this.reference.get(name)

    //
    component && callback(component)

  }

}
