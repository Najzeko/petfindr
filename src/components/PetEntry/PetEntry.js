import React from 'react';
import './PetEntry.css';

const PetEntry = ({ pet }) => {
  return (
    <div className="pet-list">
      <div className="pet-entry">
        <div className="content">
          <div className="pet-name">
            <strong>{pet.name}</strong>
          </div>
          <div className="pet-image">
            <img src={`${process.env.PUBLIC_URL}/default_dog.png`} alt="Profile" />
          </div>
          <div className="pet-info">
            <div>Animal: {pet.animal}</div>
            <div>Color: {pet.color}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetEntry;
