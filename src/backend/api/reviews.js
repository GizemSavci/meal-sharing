import express from 'express';
import knex from '../database.js';

const router = express.Router();

// /api/reviews	GET	Returns all reviews.
router.get("/api/reviews", async (request, response) => {
    try {
        const reviews = await knex("reservation").select();
        response.send(reviews);
    } catch (error) {
        throw error;
    }
})

// /api/meals/:meal_id/reviews GET	Returns all reviews for a specific meal.
router.get("/:meal_id/reviews", async (request, response) => {
    const mealId = req.params.meal_id;
    try {
        const allReviews = await knex("review").where(mealId, meal_id);
        response.json(allReviews);
    } catch (error) {
        throw error;
      }
})

// /api/reviews	POST Adds a new review to the database.
router.post("/api/reviews", async (req, res) =>{
    const newReview = req.params;
    try {
        newReview =await knex("review").insert( {title: "Great Local Pizza"}, {description: "Intasted local pizza with local ingredients. Love it!"}, {meal_id: 1}, {stars: 5}, {created_date: "2024-04-04"});
        res.send(newReview);
    } catch (error) {
        throw error;
      }
})

// /api/reviews/:id	GET	Returns a review by id.
router.get("/:id", async (req, res) =>{
    const reviewId = req.params;
    try{
        reviewId = await knex("review").where(id, id);
        res.send(reviewId);
    } catch (error) {
        throw error;
      }
})

// /api/reviews/:id	PUT	Updates the review by id.
router.put("/:id", async (req, res) =>{
    const reviewUpdated = req.params;
    try{
        reviewUpdated = await knex("review").where(id, id).update(req.body);
        res.send(reviewUpdated);
    } catch (error) {
        throw error;
      }
})

// /api/reviews/:id	DELETE	Deletes the review by id.
router.delete("/:id", async (req, res) =>{
    const reviewDeleted = req.params;
    try{
        reviewDeleted = await knex("review").where(id, id).update(req.body);
        res.send(reviewDeleted);
    } catch (error) {
        throw error;
      } 
})

export default router;