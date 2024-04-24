import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import ThemeContext from './ThemeContext';

const Pet = ({name, animal, breed ,images, id, location}) => {

  const theme = useContext(ThemeContext);

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length && images.length !== ' ') {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <div style={{fontSize: '1.6rem'}}>{name}</div>
        <h2>{animal} - {breed} - {location}</h2>
      </div>
    </Link>
  );
};

export default Pet;
