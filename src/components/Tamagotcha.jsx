import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Tamagotcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 5,
      hunger: 0,

      // sleepiness: 0,
      // boredom: 0,
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

    this.healthCheckTimer = setInterval(
      () => this.healthCheck(),
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

  heal = () =>
    this.setState({
      health: this.state.health = 5,
    });

  healthCheck() {
    if (this.state.health < 1) {
      this.setState({
        health: this.state.health = 0,
      });
    }
  }

  feed = () => {
    if (this.state.hunger > 1) {
      this.setState({
        hunger: this.state.hunger -= 2,
      });
    }else
      this.setState({
        hunger: this.state.hunger = 0,
      });
    this.hungerTimer();
  };

  render() {
    return (
      <CSSTransitionGroup
  transitionName="example"
  transitionAppear={true}
  transitionAppearTimeout={500}
  transitionEnter={false}
  transitionLeave={false}>
  <h1>Name: {this.props.name}</h1>
  <h2>Health: {this.state.health}</h2>
  <h2>Hunger: {this.state.hunger}</h2>
  {/* <h2>Sleepiness: {this.state.sleepiness}</h2>
  <h2>Boredom: {this.state.boredom}</h2>
  */}
  <button className='btn btn-success' onClick={this.feed}>feed</button>
  <button className='btn btn-success' onClick={this.heal}>heal</button>
</CSSTransitionGroup>

    );
  }

}

export default Tamagotcha;
