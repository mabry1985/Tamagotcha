import React, { Component } from 'react';

class Tamagotcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 5,
      hunger: 0,
      sleepiness: 0,
      boredom: 0,
    };
  }

  componentDidMount() {
    this.hungerTimer = setInterval(
      () => this.hungerMeter(),
      1000
    );

    this.hungerCheckTimer = setInterval(
      () => this.hungerCheck(),
      1000
    );
  }

  hungerCheck() {
    if (this.state.hunger >= 5) {
      clearInterval(this.hungerTimer);
      this.setState({
        health: this.state.health -= 1,
      });
    }
  }

  hungerMeter() {
    this.setState({
      hunger: this.state.hunger += 1,
    });
  }

  feed = () => {
    this.setState({
      hunger: this.state.hunger -= 2,
    });
  };

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Health: {this.state.health}</h2>
        <h2>Hunger: {this.state.hunger}</h2>
        <h2>Sleepiness: {this.state.sleepiness}</h2>
        <h2>Boredom: {this.state.boredom}</h2>
      <button className='btn btn-success' onClick={this.feed}>feed</button>
      </div>
    );
  }

}

export default Tamagotcha;
