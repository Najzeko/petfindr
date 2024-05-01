import React, { useState, useEffect } from 'react';

const App = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://petfindr.local/wp-json/petfinder/v1/pets')
      .then(response => response.json())
      .then(data => setPets(data));
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPets.map(pet => (
          <li key={pet.name}>
            <strong>{pet.name}</strong> - {pet.animal}, {pet.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
