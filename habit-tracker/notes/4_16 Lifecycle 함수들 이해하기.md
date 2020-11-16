# 🌈 4.16 Lifecycle 함수들 이해 하기

<br>

[State and Lifecycle - React](https://reactjs.org/docs/state-and-lifecycle.html)

<br>

```jsx
<habit.jsx파일>

import React, { PureComponent } from "react";

class Habit extends PureComponent {

// UI상에서 mount(render) 되었을 때 밑의 코드로 상황을 컨트롤 할 수 있습니다.
  componentDidMount() {
	// 아무 곳에서나 addEventListener를 등록하는 것이 아니라, 꼭 ComponentDidMount에서 등록해야 합니다.
  }

// UI상에서 unmount 되었을 때 밑의 코드로 상황을 컨트롤 할 수 있습니다.
  componentWillUnmount() {
	// addEventListener를 삭제할려면 componentWillUnmount에서 삭제를 해줘야 합니다.
	// 해당 이벤트를 처리 해야 하는 Component가 없다면, 굳이 계속 이벤트를 듣고, 우리가 등록한 콜백 함수를 실행하는 것은 낭비 입니다.
  }

```
