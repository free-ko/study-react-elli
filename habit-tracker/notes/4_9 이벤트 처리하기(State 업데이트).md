# 🌈 4.9 이벤트 처리하기 (State 업데이트)

```jsx
<habits.jsx파일>

import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    // habits에 있는 Object를 복사해서 habits에 넣는 다는 의미의 코드 입니다.
    const index = habits.indexOf(habit);
    habits[index].count++;
    // this.state.habits[index].count++ 이렇게 작성할 경우
    // 즉 부분적으로 state를 업데이트 하게 되면 React가 바보라서 모릅니다.
    this.setState({ habits });
    // 그래서 우리는 새롭게 복사한 State를 다시 업데이트 해줍니다.
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // 선택되어진 habit만 빼고 state를 업데이트 합니다.
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
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
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
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
        <button
          className="habit-button habit-delete"
          // Render 위에 함수를 만들어 주고 필요할 때만 사용하는게 더욱 효율적입니다.
          // 만약 버튼 밑에 에로우 함수를 만들어 주게 되면
          // Render 될 때마다 에로우 함수가 생성되어서 비효율적이게 됩니다.
          // onClick={() => this.props.onDelete(this.props.habit)}
          // 이러한 부분을 해결하기 위해 Class 안에 멤버 변수를 설정해 높고 사용하는게 좋습니다.
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
```
