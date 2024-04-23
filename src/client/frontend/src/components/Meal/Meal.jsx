import './Meal.css';

function Meal({ meal, mealImage }) {
    console.log("Meal Image:", mealImage); 
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
            </div>
        </div>
    );
}

export default Meal;
