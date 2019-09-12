import React from 'react';
import PropTypes from 'prop-types';
import collector from '../assets/images/collector.jpg';
import './newform.scss';

function NewForm(props) {
  let _name = null;

  function handleNewFormSubmission(event) {
    console.log('handleNewFormSubmission');
    event.preventDefault();
    props.onShowingTamagotcha();
    props.onNamingTamagotcha(_name.value);
  }

  return (
    <div className='main-menu container'>
      <h1> Tamagotcha </h1>
      <img src={collector} className='collector' />
      <p>Hey guys, wanna play?</p>
      <form onSubmit={handleNewFormSubmission} >
        <input
          id='name'
          type='text'
          placeholder='Name your Tamagotcha'
          required
          ref={(input) => { _name = input; }}/>

        <br />
        <button className='btn btn-success' type='submit'>Create!</button>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  onShowingTamagotcha: PropTypes.func,
  onNamingTamagotcha: PropTypes.func,
};

export default NewForm;
