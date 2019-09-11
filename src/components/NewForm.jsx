import React from 'react';
import PropTypes from 'prop-types';

function NewForm(props) {
  let _name = null;

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNamingTamagotcha({ name: _name.value, });
    _names.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFormSubmission}>
        <input
          type='text'
          placeholder='Enter your Tamagotchas name'
          ref={(input) => { _name = input; }}/>

        <button onClick={props.onShowingTamagotcha}
                type='submit'>
                Create!
        </button>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  onShowingTamagotcha: PropTypes.func,
};

export default NewForm;
