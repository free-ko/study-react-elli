# 🌈 4.6 Component 만들기

<br>

```jsx
// React의 장점입니다.
// Fontawesome 라이브러리를 다운 받아서 사용 할 수 있습니다.

yarn add @fortawesome/fontawesome-free
```

<br>

```jsx
<habit.jsx파일>

import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
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

```jsx
<app.jsx파일>

import React from "react";
import "./app.css";
import Habit from "./components/habit";

function App() {
  return <Habit />;
}
export default App;

<index.js파일>

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
