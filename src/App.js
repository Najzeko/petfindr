import React, { useState, useEffect } from 'react';

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://petfindr.local/wp-json/petfinder/v1/pets')
      .then(response => response.json())
      .then(data => setPets(data));
  }, []);
  

  return (
    <div>
      <ul>
        {pets.map(pet => (
          <li key={pet.name}>
            <strong>{pet.name}</strong> - {pet.animal}, {pet.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
