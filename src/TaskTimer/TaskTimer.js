import React, { Component } from 'react';

class TaskTimer extends Component {
  state = {
    allSeconds: 0,
    timerId: null,
  };

  componentDidMount() {
    this.getSeconds();
  }

  getSeconds() {
    const { minutes } = this.props;
    let { seconds } = this.props;
    seconds = +seconds + +minutes * 60;
    this.setState(() => {
      return { allSeconds: seconds };
    });
  }

  countSeconds = () => {
    const { updateTime } = this.props;
    const { allSeconds } = this.state;
    const newSeconds = allSeconds - 1;
    if (newSeconds >= 0) {
      this.setState(() => {
        return {
          allSeconds: newSeconds,
        };
      });
      updateTime(newSeconds);
    } else {
      this.deleteInterval();
    }
  };

  interval = () => {
    const timerId = setInterval(this.countSeconds, 1000);
    this.setState(() => {
      return { timerId };
    });
  };

  deleteInterval = () => {
    const { timerId } = this.state;
    clearInterval(timerId);
    this.setState(() => {
      return {
        timerId: null,
      };
    });
  };

  handleStart = () => {
    this.interval();
  };

  handleStop = () => {
    this.deleteInterval();
  };

  render() {
    const { minutes, seconds } = this.props;
    return (
      <span className="description">
        <button type="button" label="timer play" className="icon icon-play" onClick={this.handleStart} />
        <button type="button" label="timer pause" className="icon icon-pause" onClick={this.handleStop} />
        {`${minutes}:${seconds}`}
      </span>
    );
  }
}

export default TaskTimer;
