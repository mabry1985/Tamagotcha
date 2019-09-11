import React from 'react';
import PropTypes from 'prop-types';

function NewForm(props) {
  let _name = null;

  function handleNewFormSubmission(event) {
    console.log('handleNewFormSubmission');
    event.preventDefault();
    props.onShowingTamagotcha();
    props.onNamingTamagotcha(_name.value);
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFormSubmission}>
        <input
          id='name'
          type='text'
          placeholder='Enter your Tamagotchas name'
          ref={(input) => { _name = input; }}/>

        <button type='submit'>Create!</button>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  onShowingTamagotcha: PropTypes.func,
  onNamingTamagotcha: PropTypes.func,
};

export default NewForm;
