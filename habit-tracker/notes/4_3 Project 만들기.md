# 🌈 4.3 Project 만들기 (react-dom)

```jsx
// 이전에 만든 template 폴더를 복사 및 이름 변경을 합니다.
// cp -R template habit-tracker
```

- 일반적으로 브라우저를 통해 사용자에게 무언가를 보여주기 위해서는 HTML,CSS,JS로 작성을 해야 합니다.
- 그러나 React-Dom을 통해 React로 작성된 코드를 바벨을 통하여 브라우저가 읽을 수 있도록 변환 시켜 줍니다.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    {" "}
    // 이 코드를 작성함으로 React 코드를 작성할시 엄격하게 오류를 잡을 수 있습니다.
    마치 use-stric과 같습니다.
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
