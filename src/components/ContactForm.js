import React, { useState } from 'react';
import T from 'prop-types';

const styles = {
  form: {
    width: 320,
    border: 'solid',
    borderWidth: 1,
    padding: 10,
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const changeName = e => setName(e.target.value);

  const [number, setNumber] = useState('');
  const changeNumber = e => setNumber(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        <span>Name</span>
        <input type="text" name="name" value={name} onChange={changeName} />
      </label>
      <label style={styles.label}>
        <span>Number</span>
        <input
          type="text"
          name="number"
          value={number}
          onChange={changeNumber}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};
