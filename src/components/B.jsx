import React, { Component } from 'react'
import C from './c'

export default class B extends Component {
  render() {
    return (
      <div>
        <h2>我是C组件</h2>
        <C></C>
      </div>
    )
  }
}
