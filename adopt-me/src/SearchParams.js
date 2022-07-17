import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed , updateBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, updatePets] = useState([]);

  useEffect( () => {
    requestPets();
  },[]);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json();
    updatePets(json.pets);
  }

  return (
    <div>
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input
              id="location"
              placeholder="Location"
              onChange={(e) => updateLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                updateAnimal(e.target.value);
                updateBreed("");
              }}
							onBlur={e => {
								updateAnimal(e.target.value);
								updateBreed("");
							}}
            >
							<option />
							{ANIMALS.map(animal => (
								<option key={animal} value={animal}>
									{animal}
								</option>
							))}
						</select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => {
                updateBreed(e.target.value);
              }}
							onBlur={e => {
								updateBreed(e.target.value);
							}}
            >
							<option />
							{breeds.map(breed => (
								<option key={breed} value={breed}>
									{breed}
								</option>
							))}
						</select>
          </label>
          <button>Submit</button>
        </form>
        {
          pets.map(pet => (
            <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed} />
          ))
        }
      </div>
    </div>
  );
};
export default SearchParams;
