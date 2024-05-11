import express from "express";
import path from "path";
import mealsRouter from "./api/meals.js";
import reviewsRouter from "./api/reviews.js";
import reservationRouter from "./api/reservations.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//import knex from 'knex';
//import knex from "../database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = express.Router();

const buildPath = path.join(__dirname, "../../dist");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);
router.use("/reviews", reviewsRouter);
router.use("/reservations", reservationRouter);

// Copy from nodejs-week1

// 	Respond with all meals in the future (relative to the when datetime)
app.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex("meal")
      .select()
      .where("meal_time", ">", new Date());
      res.status(200).json(futureMeals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


// Respond with all meals in the past (relative to the when datetime)
app.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex("meal")
      .select()
      .where("meal_time", "<", new Date());
    res.status(200).json(pastMeals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Respond with all meals sorted by ID
app.get("/all-meals", async (req, res) => {
  try {
    const allMeals = await knex("meal")
      .select()
      .orderBy("id");
    res.status(200).json(allMeals)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// Respond with the first meal (meaning with the minimum id)
app.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex("meal")
      .select()
      .orderBy("id")
      .first();
    if (firstMeal.length === 0){
      res.status(404).send("No meal found");
    }else {
    res.status(200).json(firstMeal);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// Respond with the last meal (meaning with the maximum id)
app.get("/last-meal", async (req, res) =>{
  try {
    const lastMeal = await knex("meal")
      .select()
      .orderBy("id", "desc")
      .first();
    if (lastMeal.length === 0){
      res.status(404).send("No meal found");
    } else {
    res.status(200).json(lastMeal);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
})

// end of copy from nodejs-week1

// For localhost:5001
app.get("/", (req, res) => {
  res.send("Hello world");
});

// 	Respond with all meals in the future (relative to the when datetime)
app.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex("meal")
      .select()
      .where("meal_time", ">", new Date());
      res.status(200).json(futureMeals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


// Respond with all meals in the past (relative to the when datetime)
app.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex("meal")
      .select()
      .where("meal_time", "<", new Date());
    res.status(200).json(pastMeals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Respond with all meals sorted by ID
app.get("/all-meals", async (req, res) => {
  try {
    const allMeals = await knex("meal")
      .select()
      .orderBy("id");
    res.status(200).json(allMeals)
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// Respond with the first meal (meaning with the minimum id)
app.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex("meal")
      .select()
      .orderBy("id")
      .first();
    if (firstMeal.length === 0){
      res.status(404).send("No meal found");
    }else {
    res.status(200).json(firstMeal);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

// Respond with the last meal (meaning with the maximum id)
app.get("/last-meal", async (req, res) =>{
  try {
    const lastMeal = await knex("meal")
      .select()
      .orderBy("id", "desc")
      .first();
    if (lastMeal.length === 0){
      res.status(404).send("No meal found");
    } else {
    res.status(200).json(lastMeal);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
})

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

export default app;
