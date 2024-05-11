import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealReview from "../MealReview/MealReview";

const MealDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/meals/${id}`);
                const data = await response.json();
                setMeal(data);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };


        fetchMeal();
    }, [id]);

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{meal.title}</h2>
            <p>Description: {meal.description}</p>
            <p>Location: {meal.location}</p>
            <p>Meal Time: {meal.meal_time}</p>
            <p>Max Reservations: {meal.max_reservations}</p>
            <p>Price: {meal.price}</p>

            <MealReview mealId={meal.id} />
        </div>
    );
};

export default MealDetail;
