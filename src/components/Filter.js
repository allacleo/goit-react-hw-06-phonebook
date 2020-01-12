import React from 'react';
import T from 'prop-types';

export default function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};
