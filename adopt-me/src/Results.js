import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <p>Pets not found!</p>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city},${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
export default Results;
