import { useState, useEffect } from 'react';

function MealsList() {

    const [meals, setMeals] = useState([]);

    const apiUrl = "https://toolbox-4b2da-default-rtdb.europe-west1.firebasedatabase.app/workshops.json?auth=JQBdY7NTCLQOkxFLnUGFml4KeFNp6LVgHvJV4Tgz"

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
                            {meal.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default MealsList;