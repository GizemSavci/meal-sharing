import express from "express";
const router = express.Router();
import knex from "../database.js";

// router.get("/", async (request, response) => {
//   try {
//     // knex syntax for selecting things. Look up the documentation for knex for further info
//     const titles = await knex("meal").select("title");
//     response.json(titles);
//   } catch (error) {
//     throw error;
//   }
// });

// GET /api/meals
router.get("/", async (req, res) => {
  try {
    const meals = await knex.select("*").from("meal");
    res.json(meals);
    console.log(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// /api/meals	POST	Adds a new meal to the database
// router.post('/', async (req, res) => {
//   try {
//     const { title, description, location, meal_time, max_reservations, price, created_date } = req.body;
//     const newMealId = await knex('meal').insert({ title, description, location, meal_time, max_reservations, price, created_date });
//     if (newMealId.length > 0) {
//       res.status(201).json({ id: newMealId[0], message: "Meal created successfully" });
//     } else {
//       res.status(400).json({ message: "Failed to create meal" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


// // /api/meals/:id	GET	Returns the meal by id
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [mealId] = await knex.select('*').from('meal').where({ id });
//     if (mealId) {
//       res.json(mealId);
//     }
//   }catch (error){
//     console.error(error)
//   }
// })

// // /api/meals/:id	PUT	Updates the meal by id
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, location, meal_time, max_reservation, price, created_date } = req.body;
//     const updatedMeal = await knex('meal')
//     .where({'id': id})
//     .update({ title, description, location, meal_time, max_reservation, price, created_date });
//     if (updatedMeal) {
//       return res.json(updatedMeal);
//     }else {
//       return res.send('No updated meal found.')
//     }
//   }catch (error) {
//     console.error(error);
//   }
// });

// // GET all reviews for a specific meal 28.04
// // Cancel array on allReviews 10.05
// router.get("/:meal_id/reviews", async (req, res) => {
//   const mealId = req.params.meal_id;
//   try {
//       const allReviews = await knex("review").where("meal_id", mealId);
//       res.json(allReviews);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal server error" });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedMeal = await knex('meal').where({'id': id}).del();
//     if (deletedMeal){
//       return res.json({message: 'Meal deleted'});
//     }else {
//       return res.json({message: 'Meal not found'})
//     }
//   }catch (error) {
//     console.error(error);
//   }
// })

// // End of copy from node-week2/gizem





// // availableReservations  Boolean Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.1 api/meals?availableReservations=true
// //  title String  Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde. api/meals?title=Indian%20platter WORKS
// // dateAfter  Date  Returns all meals where the date for when is after the given date.  api/meals?dateAfter=2022-10-01 WORKS
// // dateBefore Date  Returns all meals where the date for when is before the given date. api/meals?dateBefore=2022-08-08 WORKS
// // sortKey  String  Returns all meals sorted by the given key. Allows when, max_reservations and price as keys. Default sorting order is asc(ending). api/meals?sortKey=price
// // sortDir  String  Returns all meals sorted in the given direction. Only works combined with the sortKey and allows asc or desc. api/meals?sortKey=price&sortDir=desc
// // limit  Number  Returns the given number of meals.  api/meals?limit=7

// router.get("/", async (req, res) => {
//   const {
//     maxPrice,
//     availableReservations,
//     title,
//     dateAfter,
//     dateBefore,
//     limit,
//     sortKey,
//     sortDir
//   } = req.query;

//   let query = knex('meal')
//   //console.log(maxPrice);
//   //console.log(availableReservations);

//   // maxPrice Number  Returns all meals that are cheaper than maxPrice. api/meals?maxPrice=90 WORKS
//   if (maxPrice){
//     query = query.where('price', '<', +req.query.maxPrice)
//     //res.json( await query)
//   }

//   if (availableReservations === "true") {
//     query = query
//       .innerJoin("reservation", "meal.id", "reservation.meal_id")
//       .groupBy("meal.id")
//       .select("meal.*");
//   } else if (availableReservations === "false") {
//   }

  

//   if (title){
//     query = query.where('meal.title', 'like', `${title}`);
//     console.log(title);
//   }

//   if (dateAfter) {
//     query = query.where('meal_time', '>', dateAfter);
//   }

//   if (dateBefore) {
//     query = query.where('meal_time', '<', dateBefore);
//   }

// if (limit) {
//   query = query.limit(+limit);
// }

// if (sortKey) {
//   let orderByColumn;
//   switch (sortKey) {
//     case 'when':
//       orderByColumn = 'meal_time';
//       break;
//     case 'max_reservations':
//       orderByColumn = 'max_reservations';
//       break;
//     case 'price':
//       orderByColumn = 'price';
//       break;
//     default:
//       orderByColumn = 'meal_time';
//   }

//   let sortOrder = sortDir === 'desc' ? 'desc' : 'asc';
//   query.orderBy(orderByColumn, sortOrder);
// }

//   try {
//     const meals = await query.select('*');
//     res.json(meals);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


export default router;

