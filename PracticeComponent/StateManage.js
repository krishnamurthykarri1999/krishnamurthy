import React, { Component } from 'react';

class TimerComponent extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Cleanup: clear the interval when the component is unmounted
    clearInterval(this.timerID);
    console.log('Component will unmount and timer is cleared');
  }

  tick() {
    console.log('Timer tick');
  }

  render() {
    return <div>Timer is running...</div>;
  }
}

class StateManage extends Component {
  state = {
    showTimer: true
  };

  toggleTimer = () => {
    this.setState({ showTimer: !this.state.showTimer });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleTimer}>
          Toggle Timer
        </button>
        {this.state.showTimer && <TimerComponent />}
      </div>
    );
  }
}

export default StateManage;
