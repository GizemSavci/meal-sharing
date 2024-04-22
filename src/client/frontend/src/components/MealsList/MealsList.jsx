import { useState, useEffect } from 'react';

function MealsList() {

    const [meals, setMeals] = useState([]);

    const apiUrl = "http://localhost:5001/api/meals"
    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            console.log(response);
            const jsonData = await response.json();
            setMeals(jsonData);
            }
            fetchData();
        }, []);

        return (
            <div>
                <h1>List of Meals</h1>
                <ul>
                    {meals.map(meal => (
                        <li key={meal.id}>
                            {meal.title}: {meal.description}, {meal.price}
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default MealsList;