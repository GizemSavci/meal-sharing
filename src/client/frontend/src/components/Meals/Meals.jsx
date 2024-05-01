import MealsList from "../MealsList/MealsList";
import {SearchBar} from "../SearchBar/SearchBar";

export const Meals = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <MealsList></MealsList>
        </div>
    )
}