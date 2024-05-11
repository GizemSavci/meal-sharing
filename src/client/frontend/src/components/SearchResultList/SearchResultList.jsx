import { Link } from 'react-router-dom';

const SearchResultList = ({ searchResults }) => {
  return (
    <div>
      <ul>
        {searchResults.map((meal) => (
          <li key={meal.id}>
            <Link to={`/meals/${meal.id}`}>{meal.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultList;
