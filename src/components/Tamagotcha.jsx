import React, { Component } from 'react';

class Tamagotcha extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Health: 100</h2>
        <h2>Hunger: 100</h2>
        <h2>Sleepiness: 20</h2>
        <h2>Boredom: 34</h2>
      </div>
    );
  }

}

export default Tamagotcha;
