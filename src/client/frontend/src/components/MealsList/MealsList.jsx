import { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';
import chocolateImage from '../../assets/images/chocolate.jpg';
import pizza1Image from '../../assets/images/pizza1.jpg';
import pizza2Image from '../../assets/images/pizza2.jpg';
import './MealsList.css';

const mealImages = [pizza1Image, pizza2Image, chocolateImage];

function MealsList() {
    const [meals, setMeals] = useState([]);

    const apiUrl = "http://localhost:5001/api/meals";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                setMeals(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>List of Meals</h1>
            <div className='grid-container'>
                {meals.map((meal, index) => (
                    <Meal key={index} meal={meal} mealImage={mealImages[index % mealImages.length]} />
                ))}
            </div>
        </div>
    );
}

export default MealsList;