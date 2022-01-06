import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export default function Count() {
  const myRef = React.useRef();
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("gaoao");

  const handleClick = () => {
    console.log(1111);
    // setCount(count + 1)
    setCount((count) => count + 1);
  };
  const handleChange = () => {
    setName((name) => (name = "lyj"));
  };
  const handleUnmont = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(11111);
    };
  }, [count]);
  const handleShow = () => {
    console.log(myRef.current.value);
  };
  return (
    <div>
      <p>you clicked {count} times</p>
      <p>我的名字是{name}</p>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>点我，可靠</button>
      <button onClick={handleChange}>点我，改名</button>
      <button onClick={handleUnmont}>点我，卸载</button>
      <button onClick={handleShow}>点我，显示</button>
    </div>
  );
}
