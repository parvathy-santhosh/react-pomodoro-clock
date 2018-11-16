import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25
    }
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
  }

  breakDecrement() {
    if (this.state.break > 1) {
      this.setState({
        break: this.state.break - 1
      });
    }
  }
  breakIncrement() {
    if (this.state.break < 59) {
      this.setState({
        break: this.state.break + 1
      });
    }
  }
  sessionDecrement() {
    if (this.state.session > 1) {
      this.setState({
        session: this.state.session - 1
      });
    }
  }
  sessionIncrement() {
    if (this.state.session < 59) {
      this.setState({
        session: this.state.session + 1
      });
    }
  }

  render() {
    return (
      <div>
        <div className="grid2x2">
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
      </div>
    );
  }
}

export default Clock;
