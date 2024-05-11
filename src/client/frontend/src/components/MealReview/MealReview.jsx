import { useEffect, useState } from "react";
import StarIcon from "../StarIcon/StarIcon";

const MealReview = ({ mealId }) => { 
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/meals/${mealId}/reviews`);
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                console.log("Review data:", data);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setReviews([]);
            }
        };
        fetchReview();
    }, [mealId]);

    return (
        <div>
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <div key={review.id}>
                        <p>Rating: {Array.from({ length: review.stars }).map((_, index) => (
                            <StarIcon key={index} filled />
                        ))}</p>
                        <p>Comment: {review.description}</p>
                    </div>
                ))
            ) : (
                <p>No reviews available</p>
            )}
        </div>
    );
};

export default MealReview;
