import { useState } from 'react';

const MaxPriceFilter = ({ onFilter }) => {
    const [maxPrice, setMaxPrice] = useState('');
  
    const handleInputChange = (event) => {
      setMaxPrice(event.target.value);
    };
  
    const handleFilterClick = () => {
      onFilter(maxPrice);
    };
  
    return (
      <div>
        <input type="number" value={maxPrice} onChange={handleInputChange} placeholder="Enter max price" />
        <button onClick={handleFilterClick}>Filter</button>
      </div>
    );
  };
  
  export default MaxPriceFilter;