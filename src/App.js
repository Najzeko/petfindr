import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [animalCounts, setAnimalCounts] = useState({});

  useEffect(() => {
    fetch('http://petfindr.local/wp-json/petfinder/v1/pets')
      .then(response => response.json())
      .then(data => setPets(data));
  }, []);

  useEffect(() => {
    setAnimalCounts(getAnimalCounts(filteredPets));
  }, [pets, searchTerm]);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAnimalCounts = petList => {
    const counts = {};
    petList.forEach(pet => {
      counts[pet.animal] = (counts[pet.animal] || 0) + 1;
    });
    return counts;
  };

  return (
    
    <div className="container">
      <header>
        <h1>PetFindr</h1>
      </header>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="animal-counts">
        {Object.entries(animalCounts).map(([animal, count]) => (
          <span key={animal}>{`${animal}: ${count} `}</span>
        ))}
      </div>
      <ul>
      {filteredPets.map(pet => (
            <li key={pet.name}>
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
          ))}
      </ul>
    </div>
  );
};

export default App;
