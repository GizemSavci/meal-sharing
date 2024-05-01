import { FaSearch } from "react-icons/fa";
import './SearchBar.css';
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    };

    const handleSearch = () => {
        onSearch(input);
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}