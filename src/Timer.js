import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
  }

  handleStart = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  };

  handlePause = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  };

  render() {
    let start =
      this.state.time == 0 ? (
        <button onClick={this.handleStart}>start</button>
      ) : null;

    return (
      <div>
        {start}
        <button onClick={this.handlePause}>Pause</button>
        {this.state.time}
      </div>
    );
  }
}

export default Timer;
