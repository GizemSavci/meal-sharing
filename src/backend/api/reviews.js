import express from 'express';
const router = express.Router();
import knex from '../database.js';



// GET all reviews
router.get("/api/reviews", async (request, response) => {
    try {
        const reviews = await knex("review").select();
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});


// POST a new review
router.post("/api/reviews", async (req, res) =>{
    const newReviewData = req.body;
    try {
        const newReview = await knex("review").insert(newReviewData);
        res.send(newReview);
    } catch (error) {
        throw error;
    }
});

// GET a review by ID
router.get("/api/reviews/:id", async (req, res) =>{
    const { id } = req.params;
    try {
        const review = await knex("review").where("id", id);
        res.send(review);
    } catch (error) {
        throw error;
    }
});

// PUT update a review by ID
router.put("/api/reviews/:id", async (req, res) =>{
    const { id } = req.params;
    const updatedReviewData = req.body;
    try {
        const updatedReview = await knex("review").where("id", id).update(updatedReviewData);
        res.send(updatedReview);
    } catch (error) {
        throw error;
    }
});

// DELETE a review by ID
router.delete("/api/reviews/:id", async (req, res) =>{
    const { id } = req.params;
    try {
        const deletedReview = await knex("review").where("id", id).del();
        res.send(deletedReview);
    } catch (error) {
        throw error;
    } 
});

export default router;
