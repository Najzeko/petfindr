import React from 'react';
import './PetEntry.css'

const PetEntry = ({ pet }) => {
  return (
    <li>
      <div className="pet-name">
        <strong>{pet.name}</strong>
      </div>
      <div className="pet-info">
        Animal: {pet.animal}
      </div>
      <div className="pet-info">
        Color: {pet.color}
      </div>
    </li>
  );
};

export default PetEntry;