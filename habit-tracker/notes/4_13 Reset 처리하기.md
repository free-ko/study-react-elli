# 🌈 4.13 Reset 처리 하기

```jsx
<app.jsx파일>

handleReset = () => {
  // 새로운 habits 배열을 만들겠습니다.
  // map을 통해서 받은 habit의 count를 0으로 만듭니다.
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

<Habits
  onReset={this.handleReset}
/>

<habits.jsx파일>

import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        // 결국 여기서 Reset 기능을 사용 합니다.
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;

```
