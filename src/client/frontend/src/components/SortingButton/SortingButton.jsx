import { useState } from 'react';

const SortingButton = ({ label, onClick }) => {
  const [ascending, setAscending] = useState(true);

  const handleClick = () => {
    setAscending(!ascending);
    onClick(ascending ? 'asc' : 'desc');
  };

  return (
    <button onClick={handleClick}>{label} {ascending ? '↑' : '↓'}</button>
  );
};

export default SortingButton;