# 🌈 4.5 JSX 정리 (HTML 차이점 정리)

<br/>

- HTML 태그가 있지만 JSX는 JS에 가깝습니다.
- JSX 안에 있는 태그는 바벨을 통해 HTML로 변환됩니다.
- JSX 안에는 태그 뿐만 아니라 JS도 작성 가능합니다.

```jsx
import React from "react";

import "./app.module.css";

function App() {
	const name = 'freeko';
  return (
		<>
			<h1>Hello :)</h1>;
			{name && <h1> Hi~ {nmae} :) </h1>}
			{['kyw','free'].map(item => (
				<h1>{item}</h1>
			)}
		</>
	);
}

export default App;
```

- 참고 사이트

[Introducing JSX - React](https://reactjs.org/docs/introducing-jsx.html)

[JSX In Depth - React](https://reactjs.org/docs/jsx-in-depth.html)
