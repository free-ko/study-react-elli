# 🌈 4.17 Function Component, Memo 정리

- Class Component에는 Pure Component가 있다면
- Function Component에서는 Memo가 있습니다.

<br>

```jsx
import React, {memo} from "react";

// 우리의 Function Component를 메모를 통해 전달해 줍니다.
// Memo는 Pure Component처럼 props가 변경이 되지 않으면 밑에 있는 함수가 호출이 되지 않습니다.
const HabitAddForm = memo(props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};;

export default HabitAddForm;
```
