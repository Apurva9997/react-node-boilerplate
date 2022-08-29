import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
      </>
    );
  }
}

const Root = hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<Root name="Jane" />, mountNode);
