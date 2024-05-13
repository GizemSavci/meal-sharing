import { useState } from 'react';
import MealsList from "../MealsList/MealsList";
import MaxPriceFilter from "../MaxPriceFilter/MaxPriceFilter";
import SideBar from '../SideBar/SideBar';
import SortingButton from '../SortingButton/SortingButton';

export const Meals = () => {
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    const handleMaxPriceFilter = (maxPrice) => {
        setMaxPriceFilter(maxPrice);
    };

    const handleSortChange = (direction) => {
        setSortDirection(direction);
    };

    return (
        <div>
            <SideBar></SideBar>
            <MaxPriceFilter onFilter={handleMaxPriceFilter}></MaxPriceFilter>
            <SortingButton label="Sort by Price" onClick={handleSortChange} />
            <MealsList maxPriceFilter={maxPriceFilter} sortDirection={sortDirection}></MealsList>
        </div>
    )
}