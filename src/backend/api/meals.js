import express, { response } from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// maxPrice	Number	Returns all meals that are cheaper than maxPrice.	api/meals?maxPrice=90
router.get("/", async (request, response) => {
  try {
    const maxPrice = await knex("meal").where("price", "<", 90);
    response.json(maxPrice);
  } catch (error) {
    throw error;
  }
})

// availableReservations	Boolean	Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.1	api/meals?availableReservations=true
router.get("/", async (request, response) => {
  try {
    const availableReservations = await knex("meal").innerJoin("reservation", "meal.id", "reservation.meal_id").groupBy("meal.id")
    .select("meal.*").having("meal.max_reservations", ">", knex.sum("reservation.number_of_guests"));
    if (availableReservations){
      response.json(availableReservations);
    }else{
      response.status(404).send("No meals found");
    }
  }
    catch (error) {
      throw error;
    }
  })

//  title	String	Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde.	api/meals?title=Indian%20platter
router.get("/", async (request, response) => {
  try{
  const title = await knex("meal").where("title", "like", "%Rød%grød%med%fløde");
  response.json(title);
  }catch (error) {
    throw error;
  }
})


// limit	Number	Returns the given number of meals.	api/meals?limit=7
router.get("/", async (request, response) => {
try { 
const limit = await knex("meal").limit(3);
response.json(limit);
}catch (error) {
  throw error;
}
})


export default router;
