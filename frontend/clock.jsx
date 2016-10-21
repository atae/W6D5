import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => this.setState({time: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return(
      <section className="clock">
        <h3>{this.state.time.toTimeString()}</h3>
      </section>
    );
  }
}

export default Clock;
