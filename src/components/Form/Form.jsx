import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add } from '../redux/itemsSlice';

import { nanoid } from 'nanoid';

import s from './Form.module.css';

function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(add({ name, number, id }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    return setId(nanoid());
  }, [name, number]);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={s.formLabel}>
        
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.formLabel}>
         
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.btmAdd} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};

export default Form;
