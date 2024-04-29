import './Meal.css';
import { useNavigate } from "react-router-dom";

function Meal({ meal, mealImage }) {
    const navigate = useNavigate();

    return (
        <div className="meal-card">
            <div className="image-container">
                <img src={mealImage} alt={meal.title} />
            </div>
            <h4>{meal.title}</h4>
            <p>{meal.description}</p>
            <div className="detail-container">
                <p>Price: {meal.price} kr</p>
                <p>Location: {meal.location}</p>
                <button onClick={() => {
                    navigate(`/meals/${meal.id}`);
                }}>
                    See details
                </button>
            </div>
        </div>
    );
}

export default Meal;
