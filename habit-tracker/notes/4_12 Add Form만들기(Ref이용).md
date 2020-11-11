# 🌈 4.12 Add Form 만들기( Ref 이용 )

<br>

[Refs and the DOM - React](https://reactjs.org/docs/refs-and-the-dom.html)

```jsx
<app.jsx파일>

import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
```

<br>

```jsx
<habitAddForm.jsx파일>

import React, { Component } from "react";

class HabitAddForm extends Component {
  // 원래는 우리가 JS를 통해서 HTML Tag를 다룰 때 querySelector를 이용하지만
  // React에서는 굳이 그럴 필요가 없습니다.
  // createRef()는 직접적으로 멤버 변수를 정의 할 수 있습니다.
  // 그 멤버 변수(클래스 안에 선언한)를 해당하는 Component에 ref로 연결 하면 됩니다.
  // console.log(this.inputRef.current.value);

  inputRef = React.createRef();

  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    // this.inputRef.current.value = "";
    // 위의 코드로 해도 되고 밑에처럼 해도 됩니다.
    this.formRef.current.value.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="What is your Habit?"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
```

- 멤버 변수 관련 글

[[자바개념정리01]멤버변수 지역변수 전역변수 등 헷갈리지 않게 구분하기](https://easywebs.tistory.com/29)
