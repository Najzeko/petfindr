import React from 'react';
import './TextInput.css'

const TextInput = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search by name..."
    value={value}
    onChange={onChange}
  />
);

export default TextInput;