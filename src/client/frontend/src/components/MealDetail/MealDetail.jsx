import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reservationData, setReservationData] = useState({
        phoneNumber: "",
        name: "",
        email: ""
    });
    const [reservationStatus, setReservationStatus] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/meals/${id}`);
                const data = await response.json();
                setMeal(data[0]);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };
        fetchMeal();
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/meals/${id}/reviews`);
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData({
            ...reservationData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5001/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    meal_id: id,
                    ...reservationData
                })
            });
            if (response.ok) {
                setReservationStatus("Reservation successful!");
            } else {
                setReservationStatus("Error: Reservation failed.");
            }
        } catch (error) {
            console.error("Error making reservation:", error);
            setReservationStatus("Error: Reservation failed.");
        }
    };

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{meal.title}</h2>
            {/* Render other meal details */}
            <p>Description: {meal.description}</p>
            <p>Location: {meal.location}</p>
            <p>Meal Time: {meal.meal_time}</p>
            <p>Max Reservations: {meal.max_reservations}</p>
            <p>Price: {meal.price}</p>

            {/* Render Reviews */}
            <h3>Reviews</h3>
            {reviews.map(review => (
                <div key={review.id}>
                    <p>Rating: {review.stars}</p>
                    <p>Comment: {review.description}</p>
                    <hr />
                </div>
            ))}

            {/* Reservation Form */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={reservationData.phoneNumber}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservationData.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={reservationData.email}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Book Seat</button>
            </form>

            {/* Reservation Status */}
            {reservationStatus && <p>{reservationStatus}</p>}
        </div>
    );
};

export default MealDetail;
