import React from 'react';
import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };

    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    const colorIndex = Math.floor(this.state.clicks / 3) % this.colors.length;
    const color = this.colors[colorIndex];

    return (
      <button style={{ backgroundColor: color }} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}
