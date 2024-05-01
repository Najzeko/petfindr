import React from 'react';

const TextInput = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search by name..."
    value={value}
    onChange={onChange}
  />
);

export default TextInput;