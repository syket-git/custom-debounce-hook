import React from "react";

class Counter extends React.Component {
  componentDidMount() {
    // This will log after ui is mounted
    console.log("Component Did mount");
  }

  componentDidUpdate() {
    // This will call after UI update
    console.log("Component Did update");
  }

  componentWillUnmount() {
    // This will call before componnet will unmount
    console.log("Component will unmount");
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default Counter;
