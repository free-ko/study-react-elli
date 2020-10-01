import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          // Render 위에 함수를 만들어 주고 필요할 때만 사용하는게 더욱 효율적입니다.
          // 만약 버튼 밑에 에로우 함수를 만들어 주게 되면
          // Render 될 때마다 에로우 함수가 생성되어서 비효율적이게 됩니다.
          // onClick={() => this.props.onDelete(this.props.habit)}
          // 이러한 부분을 해결하기 위해 Class 안에 멤버 변수를 설정해 높고 사용하는게 좋습니다.
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
