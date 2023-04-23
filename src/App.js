import React, { Component } from "react";
import Counter from "./Component/Counter";
import Debounce from "./Component/Debounce";

class App extends Component {
  state = {
    count: 0
  };

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.increment()}>Increment</button>
        <Counter count={this.state.count} /> */}
        <Debounce />
      </div>
    );
  }
}

export default App;
