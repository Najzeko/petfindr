import React from 'react';

const Filter = ({ label, options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value={`All ${label}`}>All {label}</option>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Filter;