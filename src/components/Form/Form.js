import { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Form = ({ onSubmitProp }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleAdd = e => {
    e.preventDefault();
    onSubmitProp({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleAdd}>
      <label className={css.label} htmlFor={nameInputId}>
        Name:
        <input
          className={css.input}
          value={name}
          onChange={handleChange}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, spaces, hyphens, and apostrophes are allowed"
          required
        />
      </label>

      <label className={css.label} htmlFor={numberInputId}>
        Tel:
        <input
          className={css.input}
          type="tel"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
          required
        />
      </label>
      <button className={css.submit_button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

Form.propTypes = { onSubmitProp: PropTypes.func.isRequired };

export default Form;
