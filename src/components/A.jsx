import React, { Component } from "react";
import B from "./B";

import { MyContext } from "../context/MyContext";
const { Provider } = MyContext;
export default class A extends Component {
  state = {
    username: "gaoao",
    age: 18
  };
  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h2>我是A组件</h2>
        <h4>我的用户名是：{username}</h4>
        <Provider value={{username, age}}>
          <B></B>
        </Provider>
      </div>
    );
  }
}
