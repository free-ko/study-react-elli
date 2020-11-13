# 🌈 4.14 Pure Component 정리와 차이점 이해

<br>

[React Top-Level API - React](https://reactjs.org/docs/react-api.html#reactpurecomponent)

- React는 Components 입니다.
- React는 Update가 되면 전체적으로 Re-Render가 됩니다.

<br>

```jsx
<index.js파일>

ReactDOM.render(
// StrictMode로 인해 각 Component들이 2번씩 호출이 됩니다.
// 혹시나 잘못된것은 없는지 확인하기 위해 1번더 호출 합니다.
// 개발 할때에만 이렇게 Strict 모드를 사용하지만 배포 할 때에는 Strict 모드를 사용하지 않습니다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

<br>

- React는 Props나 State가 변경이 되면 전체가 업데이트 됩니다. (부모의 Component State가 변경이 되기 때문입니다.)
- 그래도 안전한 이유는 React 자체에 VDOM을 써서 실제로는 정말 업데이트 되어야 하는 아이들만 DOM요소에 업데이트 되기 때문에 괜찮습니다.
- 또한 전체적으로 업데이트 되어도 성능이 괜찮은 이유는 HTML태그 DOM요소에는 전혀 변화가 없습니다.
- 대신 업데이트가 된 부분 Tag에만 표시됩니다.
- 디버깅을 할 때에 DOM요소가 전체적으로 변경이 된다면 잘못 개발을 한 것입니다.
- 만약에 Render 함수가 호출 할 때마다 매번 모든 Component들을 호출한다면 예를 들어 Render 함수를 호출 한 뒤에 실행되는 ComponentDidmount 가 무거운 작업을 실행된다면 전체적으로 보았을 때 성능 저하가 발생합니다.
- 이러한 부분을 방지 할 수 있는 것이 PureComponent와 Memo 입니다.
- Pure Component와 Memo는 Component에 State와 Props에 변화가 없다면 Render 함수가 불려 지지 않습니다.
- Pure Component는 shouldComponentUpdate()를 가지고 있습니다.
- 기존의 Compoennt와 가볍게 State, Pros가 변경이 되었는지 비교를 합니다.
- 단 Object의 Ref만 비교를 하기 때문에 Object 안의 내용이 변경되어도 변경되지 않았다고 인지 합니다.
- 그래서 가볍게 비교한다는 의미 입니다.

<br>

```jsx
import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;

    // onAdd는 app.jsx파일에서 전달 받습니다.
    // App Component가 생길 때 멤버 변수 임으로
    // Class가 만들어질 때 한 번 할당 된 이후로 다시는 업데이트가 되지 않는 콜백 함수 입니다.
    // 그래서 Prop에 변화가 없기 때문에 계속 Rerender가 되지 않습니다.
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
```
