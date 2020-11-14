# 🌈 4.15 PureComponent 활용 (현업에 중요)

<br>

```jsx
<habit.jsx파일>

import React, { PureComponent } from "react";

// PureComponent로 작성할 때에
// 플러스 버튼을 누르게 되면 제대로 작동하지 않습니다.
// 그 이유는 PureComponent는 가볍게 비교합니다.
// 즉 habit이라는 object 안의 내용의 변화를 인지 하지 못합니다.
// 그래서 플러스 버튼을 눌러도 변경이 안됩니다.

class Habit extends PureComponent {
  handleIncrement = () => {
// Habit 안에는 자체적인 State는 없고 props를 전달 받습니다.
// props 안에 데이터가 변경되지 않으면 render 함수가 호출되지 않는게 PuureComponent입니다.
// 밑에는 props 안에 habit과 onIncrement같은 각각의 콜백 함수가 전달되어 집니다.
// 콜백 함수는 app에서 전달받아 집니다.
// app component 에서 이미 정의된 멤버 변수 및 함수들은 절대 변경 되지 않습니다.
// 그리고 우리가 count를 증가하게 되면 habit 안에있는 count만 변하게 됩니다.
// 즉 habit object 안에 있는 count의 값만 변합니다. (이 정도의 디테일 변화는 무시합니다.)
// habit의 count를 업데이트 하지 않았습니다.
// 결국은 habit은 동일한 object로 간주 되어 집니다.
// shallow compare는 object의 ref만 검사합니다.(object 안의 값은 무시합니다.)
// habit에 변경사항이 없다고 판단하여 render 함수가 호출이 되지 않습니다.
    this.props.onIncrement(this.props.habit);
  };
```

<br>

- 위의 방법을 해결할 수 있는 방법은 2가지가 있습니다.
- 첫 번째 방법 : 변화 되어지는 것을 따로 빼어 전달합니다.
- 그러면 count가 변경될 때마다 업데이트가 됩니다.

```jsx
<habits.jsx파일>

<Habit
// count가 계속 변경되기 때문에 따로 분리해서 전달해 줍니다.
	count={habit.count}
// name도 따로 전달 합니다.
	name={habit.name}
/>

<habit.jsx파일>
render() {
// 따로 count를 가지고 옵니다. (받습니다.)
	const { count } = this.props;
```

<br>

- habit이라는 component는 habit object 모델을 어떻게 UI적으로 표현 할 껄지 알고 있는 Component입니다.
- 그래서 이 Component는 Props로 전달 받는 것이 Logic 상으로 맞습니다.
- 그렇기 때문에 따로 전달하지 않고 해결하는 방법이 있습니다.

<br>

- 우의 근본적인 문제는 Object 전체를 업데이트 하지 않고 Object 안에 있는 내용을 변경해서 없데이트 하는 것 입니다.
- 사실 다른 것도 마찬가지 입니다.
- 특히 멀티 쓰레드 환경 즉 concurrent(동시 발생의)가 발생하는 환경에서 오브젝트를 변경하는 것
- 즉 오브젝트 안에 있는 데이터를 변경하는 것 여기서 주의 해야 할 것은
- 오브젝트 안에 여러개의 오브젝트가 있을 경우 그 안에 있는 데이터를 찾아서 변경하는 것보다
- 새롭게 복사해서 만드는 것이 좋습니다.

<br>

- 두 번째 방법
- 많은 오브젝트들로 연결되어 있을 때 특정 오브젝트 안의 데이터를 변경하기 보다는
- 새로운 오브젝트를 만드는 방법이 좋습니다.
- 밑에 코드로 작성할 경우에는 불필요한 Render 되는 Component가 없어지게 됩니다.

```jsx
<app.jsx파일>

handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // 새로운 오브젝트를 만들어서 기존의 데이터를 넣는 과정 입니다. (Deconstructing 새로운 오브젝트에 오브젝트 안에 있는 데이터를 넣는 것 입니다.)
        // 단 count는 새로운 데이터를 넣겠습니다.
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) { // 이미 count가 0이면 리셋핦 필요가 없기 때문에 count가 0이 아닐 때만 리셋해줍니다.
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };
```
