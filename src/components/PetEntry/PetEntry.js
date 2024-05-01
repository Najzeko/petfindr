import React from 'react';
import './PetEntry.css';

const PetEntry = ({ pet }) => {
  return (
    <div className="pet-entry">
      <div className="content">
        <div className="pet-name">
          <strong>{pet.name}</strong>
        </div>
        <div className="pet-info">
          Animal: {pet.animal}
        </div>
        <div className="pet-info">
          Color: {pet.color}
        </div>
      </div>
    </div>
  );
};

export default PetEntry;
