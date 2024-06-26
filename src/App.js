import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput/TextInput';
import Filter from './components/Filter/Filter';
import PetEntry from './components/PetEntry/PetEntry';
import './App.css';


const App = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [animalCounts, setAnimalCounts] = useState({});
  const [selectedAnimal, setSelectedAnimal] = useState('All Animals');
  const [selectedColor, setSelectedColor] = useState('All Colors');

  // query wordpress REST API for pet data
  useEffect(() => {
    fetch('https://petfindr.azurewebsites.net/wp-json/petfinder/v1/pets')
      .then(response => response.json())
      .then(data => {
        setPets(data);
      });
  }, []);

  // apply filters, both text and dropdowns
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedAnimal === 'All Animals' || pet.animal === selectedAnimal) &&
    (selectedColor === 'All Colors' || pet.color === selectedColor)
  );
  
  // establish summary from filter results every time filters or search changes
  useEffect(() => {
    setAnimalCounts(getAnimalCounts(filteredPets));
  }, [filteredPets, searchTerm]);

  // get filter options based on dataset
  const animalOptions = [...new Set(pets.map(pet => pet.animal))]
  const colorOptions = [...new Set(pets.map(pet => pet.color))]

  // function to tally counts of each animal type
  const getAnimalCounts = petList => {
    const counts = {};
    petList.forEach(pet => {
      counts[pet.animal] = (counts[pet.animal] || 0) + 1;
    });
    return counts;
  };

  const handleAnimalChange = event => {
    setSelectedAnimal(event.target.value);
  };

  const handleColorChange = event => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>PetFindr</h1>
        <p className="subheading">
          Welcome to PetFindr, where good samaritans post notices for found pets.
          Lost a pet? Enter your pet's name in the search bar, or use any variety of filters to see if they've been found!
          We hope you are able to find your lost pet :)
        </p>
      </header>
      <div className="container">
        <div>
          {/* search bar component */}
          <TextInput value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /> 
          <div className="filters">
            <Filter
              label="Animals"
              options={animalOptions}
              value={selectedAnimal}
              onChange={handleAnimalChange}
            />
            <Filter
              label="Colors"
              options={colorOptions}
              value={selectedColor}
              onChange={handleColorChange}
            />
          </div>
          {/* animal count summary */}
          <div className="animal-counts">
            {Object.entries(animalCounts).map(([animal, count]) => (
              <span key={animal}>{`${animal}: ${count} `}</span>
            ))}
          </div>
          {/* pet directory grid */}
          <div className="pet-list">
            {filteredPets.length === 0 && (
              <div className="no-results">No results found!</div>
            )}
            {filteredPets.map(pet => (
              <PetEntry key={pet.name} pet={pet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
