import React, { Component } from 'react';

class Tamagotcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 100,
      hunger: 0,
      sleepiness: 0,
      boredom: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Health: {this.state.health}</h2>
        <h2>Hunger: {this.state.hunger}</h2>
        <h2>Sleepiness: {this.state.sleepiness}</h2>
        <h2>Boredom: {this.state.boredom}</h2>
      </div>
    );
  }

}

export default Tamagotcha;
