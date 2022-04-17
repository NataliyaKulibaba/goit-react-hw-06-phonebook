import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../components/redux/filterSlice';

import Form from './Form/Form.jsx';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Contacts/Filter/Filter';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const allContacts = useSelector(state => state.items);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} changeFilter={changeFilter} />

        <Contacts contacts={getVisibleContacts()} />
      </Section>
    </>
  );
};

export default App;
