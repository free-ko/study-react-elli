import React, { Component } from "react";

class HabitAddForm extends Component {
  // 원래는 우리가 JS를 통해서 HTML Tag를 다룰 때 querySelector를 이용하지만
  // React에서는 굳이 그럴 필요가 없습니다.
  // createRef()는 직접적으로 멤버 변수를 정의 할 수 있습니다.
  // 그 멤버 변수를 해당하는 Component에 ref로 연결 하면 됩니다.
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
