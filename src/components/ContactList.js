import React from 'react';
import T from 'prop-types';

export default function ContactList({ filterContact, removeContact }) {
  return (
    <ul>
      {filterContact.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filterContact: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      number: T.string,
    }),
  ).isRequired,

  removeContact: T.func.isRequired,
};
