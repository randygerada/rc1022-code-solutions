import React from "react";

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {number: 0};
  }

  handleClick() {
    this.setState({ number: this.state.number + 1});
  }

  render() {

    if (this.state.number < 4) {
      return (
        <button className="button one" onClick={this.handleClick}>Click Me!</button>
      );
    } else if (this.state.number < 7) {
      return (
        <button className="button two" onClick={this.handleClick}>Click Me!</button>
      );
    } else if (this.state.number < 10) {
      return (
        <button className="button three" onClick={this.handleClick}>Click Me!</button>
      );
    } else if (this.state.number < 13) {
      return (
        <button className="button four" onClick={this.handleClick}>Click Me!</button>
      );
    } else if (this.state.number < 16) {
      return (
        <button className="button five" onClick={this.handleClick}>Click Me!</button>
      );
    } else if (this.state.number < 19) {
      return (
        <button className="button six" onClick={this.handleClick}>Click Me!</button>
      );
    } else {
      return (
        <button className="button six" onClick={this.handleClick}>Click Me!</button>

      );
    }
  }
}
