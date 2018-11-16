import React, {Component} from 'react';

const defaultBreak = 5;
const defaultSession = 25;

const SESSION = "Session";
const BREAK = "Break";

function stringify(x) {
  if (parseInt(x) < 10){
    return '0' + parseInt(x).toString();
  } else {
    return x;
  }
}

function countDown(obj) {
  let newObj = obj;
  return newObj;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: defaultBreak,
      session: defaultSession,
      currentLabel: SESSION,
      min: defaultSession,
      sec: 0,
      running: false
    }
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.timerCtrl = this.timerCtrl.bind(this);
    this.reset = this.reset.bind(this);
    this.timed = this.timed.bind(this);
  }

  breakDecrement() {
    if (this.state.break > 1) {
      this.setState({
        break: this.state.break - 1
      });
      if ((this.state.currentLabel == BREAK) & !(this.state.running)){
        this.setState({
          min:  this.state.break - 1
        });
      }
    }
  }
  breakIncrement() {
    if (this.state.break < 59) {
      this.setState({
        break: this.state.break + 1
      });
      if ((this.state.currentLabel == BREAK) & !(this.state.running)){
        this.setState({
          min:  this.state.break + 1
        });
      }
    }
  }
  sessionDecrement() {
    if (this.state.session > 1) {
      this.setState({
        session: this.state.session - 1
      });
      if ((this.state.currentLabel == SESSION) & !(this.state.running)){
        this.setState({
          min:  this.state.session - 1
        });
      }
    }
  }
  sessionIncrement() {
    if (this.state.session < 59) {
      this.setState({
        session: this.state.session + 1
      });
      if ((this.state.currentLabel == SESSION) & !(this.state.running)){
        this.setState({
          min:  this.state.session + 1
        });
      }
    }
  }

  timerCtrl() {
    this.setState({
      running: !(this.state.running)
    });
  }
  reset() {
    this.setState({
      break: defaultBreak,
      session: defaultSession,
      currentLabel: SESSION,
      min: defaultSession,
      sec: 0,
      running: false
    });
  }

  timed() {
    if (this.state.running) {
      this.setState(countDown(this.state));
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.timed, 1000);
  }

  render() {
    return (
      <div>
        <div className="grid1x2">
          <div>
            <div id="break-label">Break Length</div>
            <div>
              <div onClick={this.breakIncrement} className="button" id="break-increment">+</div>
              <div id="break-length">{this.state.break}</div>
              <div onClick={this.breakDecrement} className="button" id="break-decrement">-</div>
            </div>
          </div>
          <div />
          <div>
            <div id="session-label">Session Length</div>
            <div>
              <div onClick={this.sessionIncrement} className="button" id="session-increment">+</div>
              <div id="session-length">{this.state.session}</div>
              <div onClick={this.sessionDecrement} className="button" id="session-decrement">-</div>
            </div>
          </div>
        </div>
        <div className="timer">
          <div id="timer-label">{this.state.currentLabel}</div>
          <div id="time-left">{stringify(this.state.min)}:{stringify(this.state.sec)}</div>
        </div>
        <div>
          <div className="button" id="start_stop" onClick={this.timerCtrl}>Start/Stop</div>
          <div className="button" id="reset" onClick={this.reset}>Reset</div>
        </div>
      </div>
    );
  }
}

export default Clock;
