import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/itemsSlice';

function Contacts({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul className={s.contactLict}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.contactLictItem}>
          {name}
          <span>{number}</span>
          <button
            type="button"
            className={s.btnDel}
            onClick={() => dispatch(remove(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
