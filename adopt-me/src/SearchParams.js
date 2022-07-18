import { useEffect, useState } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const LOCATIONS = [
  "Seattle",
  "Minneapolis",
  "Denver",
  "Carol Stream",
  "Bridgeport",
  "Charlotte",
  "Springfield",
  "Tucson",
];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, updatePets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    updatePets(json.pets);
  }

  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          <label htmlFor="location">
            Location
            <select
              id="location"
              value={location}
              // placeholder="Location"
              onChange={(e) => updateLocation(e.target.value)}
              onBlur={(e) => updateLocation(e.target.value)}
            >
              <option />
              {LOCATIONS.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
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
              onBlur={(e) => {
                updateAnimal(e.target.value);
                updateBreed("");
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
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
              onBlur={(e) => {
                updateBreed(e.target.value);
              }}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
        <div>
          <Results pets={pets} />
        </div>
      </div>
    </div>
  );
};
export default SearchParams;
