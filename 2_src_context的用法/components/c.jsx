import React, { Component } from "react";
import { MyContext } from "../context/MyContext";
const { Consumer } = MyContext;
export default class C extends Component {
  static contextType = MyContext;
  render() {
    console.log(this);
    return (
      <div>
        <h2>我是C组件</h2>
        <h4>
          我从A组件中接收到的用户名：
          <Consumer>
            {
              value => {
                return `${value.username}, 年龄是：${value.age}`
              }
            }
          </Consumer>
        </h4>
      </div>
    );
  }
}
