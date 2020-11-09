# 🌈 4.8 Habits Component 만들기

```jsx
<habits.jsx파일>

import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {

// ul이기 때문에 각 li마다 고유의 id가 있어야 합니다.
// key는 배열의 index를 사용 하면 안됩니다.
// 배열의 동일한 값이 순서가 바뀌게 되면 index 값도 수정되어야 합니다.
// key 값이 동일한 오브젝트 임에도 불구하고 key 값이 달라질 수 있습니다.
// 오브젝트가 가지고 있는 고유한 id를 key 값으로 지정해 줍니다.
// 또한 동일한 id를 가지고 있는 아이들이 있으면 안됩니다.

    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        // map을 통해 코드를 중복적으로 작업할 필요가 없습니다.
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
```

<br>

```jsx
<habit.jsx파일>

import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
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
      </li>
    );
  }
}

export default Habit;
```

- Object Destructuring 문법

[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
