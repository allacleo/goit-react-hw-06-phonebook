import React, { useState, useEffect, useReducer, useMemo } from 'react';
import uuid from 'uuid';
import storage from './services/localstorage';

import Layout from './components/Layout';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'addContact':
      return [...state, action.payload.contact];

    case 'removeContact':
      return state.filter(contact => contact.id !== action.payload.contactId);

    case 'setStorage':
      return action.payload.contacts;

    default:
      return state;
  }
};

function App() {
  const [contacts, dispatch] = useReducer(contactReducer, []);

  useEffect(() => {
    const contacts = storage.get('contacts');

    if (contacts) {
      dispatch({ type: 'setStorage', payload: { contacts } });
    }
  }, []);

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };

    dispatch({ type: 'addContact', payload: { contact } });
  };

  const removeContact = contactId => {
    dispatch({ type: 'removeContact', payload: { contactId } });
  };

  const [filter, setFilter] = useState('');

  const changeFilter = e => setFilter(e.target.value);

  const filterContact = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [contacts, filter],
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filterContact={filterContact}
        removeContact={removeContact}
      />
    </Layout>
  );
}

export default App;
