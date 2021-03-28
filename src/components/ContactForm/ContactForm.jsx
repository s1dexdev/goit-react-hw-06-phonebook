import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = function ({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);
    resetState();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={styles.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button
        className={styles.btn}
        type="submit"
        disabled={!(name && number) && true}
      >
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
