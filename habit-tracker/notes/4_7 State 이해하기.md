# 🌈 4.7 State 이해 하기

- 브라우저와 다르게 React의 Event는 한 번 더 감싸져 있습니다.

[Handling Events - React](https://reactjs.org/docs/handling-events.html)

[SyntheticEvent - React](https://reactjs.org/docs/events.html)

<br>

```jsx
<habit.jsx파일>

import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // State Object 안에 있는 count를 증가 한 뒤 State를 업데이트 해야 함
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;
```
