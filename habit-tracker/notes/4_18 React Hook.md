# 🌈 4.18 React Hook

<br>

[Introducing Hooks - React](https://reactjs.org/docs/hooks-intro.html)

```jsx
<simpleHabit.jsx파일>

import React, { Component, useState } from "react";

const SimpleHabit = (props) => {
  // state = {
  //    count: 0,
  //  };

	// 변수를 선언 할 때에 count, setCount 이렇게 해주면
	// React 안에 useState라는 API에서 2가지를 return해줍니다.
	// 실제의 State 값(count)과 count값을 업데이트 할 수 있는 setCount 함수를 리턴해줍니다.

	const [count, setCount] = useState(0);  // 위의 코드 처럼 count: 0으로 초기 값을 설정 한 것이며 setCount는 state를 업데이트 해주는 역할입니다.

	// 지역 함수 입니다.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

```

- Class Component에서 Class 안에 있는 멤버 변수들은 Class가 만들어 질 때 딱 한 번만 만들어 집니다.
- 대신에 State가 변경이 되거나 Props가 업데이트가 될 때
- Render 함수만 반복해서 호출이 됩니다.
- 하지만 Function Component에서는 Component의 state나 props가 변경이 되면 Code Block 전체가 반복해서 호출이 됩니다. (코드 블럭 안에 있는 지역 변수 함수들도 반복 호출됩니다.)
- 즉 위의 코드에서 지역 변수 함수의 역할이 count +1을 해서 onClick에게 업데이트 해주는건 아닌가? 하는 의문이 들면서 또한
- Props의 값이 업데이트 된다면 useState의 값이 0으로 계속 초기화가 되는 건 아닌가 질문 할 수 있습니다.
- 그러나 useState의 값이 계속 기억하고 있습니다.
- useState는 React Hook에서 제공하는 API중 하나로 React가 알아서 자동으로 업데이트 된 값을 저장하고 있습니다.
- 즉 Component에 연결된 State는 따로 저장이 되어져 있어서 Code Block이 반복적으로 실행되어 져도 동일한 값을 메모리에 저장해 놓기 때문에 걱정하지 않아도 됩니다.

<br>

```jsx
import React, { useState } from "react";

const SimpleHabit = () => {
  // state = {
  //    count: 0,
  //  };

  const [count, setCount] = useState(0);

	// React.creatRef()처럼
	// 호출 할 때마다 새로운 Ref를 만드는 것 대신에
	// useRef()는 한번만 만들고 메모리에 저장해 놓고 그것을 다시 재사용 합니다.
  const spanRef = useRef();

	// 밑의 콜백 함수도 당연히 메모리에 저장해 놓고 사용 할 수 있습니다.
	// 왜냐하면 SimpleHabit의 함수가 호출 될 때마다 계속 새로운 것이 만들어지니깐
	// onClick에 새로운 것이 계속적으로 할당 되어 집니다. (게속적으로 업데이트 되어 집니다.)
	// 이것을 방지하고자 useCallback()이 있습니다.
	// React가 자동으로 캐쉬를 해서
	// 밑의 코드가 반복적으로 호출이 되어도
	// 동일한 콜백 함수를 전달합니다.
  const handleIncrement = useCallback() => {
    setCount(count + 1);
  };

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
```

<br>

- useEffect()
- Component가 Mount 되었을 때 혹은 Update가 될 때마다 호출이 됩니다.

```jsx
// 두번째 인자에 어떤 값이 변경될 때만 호출될 수 있도록 수정이 가능 합니다.
// 밑에 코드는 [] 빈공간으로 놔두었기 때문에 처음에만 호출이 됩니다.
// [count] count만 변경이 되었을 때 호출합니다.
// []안에 내가 원하는 데이터를 넣게 되면 그 데이터가 변경 될 때만 호출 할 수 있습니다.

useEffect(() => {
    console.log(`mounted & updated!`: ${count});
  },[]);
```
