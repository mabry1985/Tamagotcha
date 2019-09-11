import React from 'react';
import PropTypes from 'prop-types';
import Tamagotcha from './Tamagotcha';
import NewForm from './NewForm';

class AppControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tamagotchaVisibleOnPage: false,
    };
  }

  handleShowingTamagotcha = () => {
    this.setState({ tamagotchaVisibleOnPage: true });
  };

  handleNamingTamagotcha = (newName) => {
    this.setState({ name: newName });
  };

  render() {
    let currentlyVisibleContent = null;

    if (this.state.tamagotchaVisibleOnPage) {
      currentlyVisibleContent = <Tamagotcha
        name={this.state.name} />;

    } else {
      currentlyVisibleContent = <NewForm
        onShowingTamagotcha={this.handleShowingTamagotcha}
        onNamingTamagotcha={this.handleNamingTamagotcha} />;
    };

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
AppControl.propTypes = {
  onShowingTamagotcha: PropTypes.func,
  onNamingTamagotcha: PropTypes.func,
};

export default AppControl;
