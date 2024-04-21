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

// maxPrice	Number	Returns all meals that are cheaper than maxPrice.	api/meals?maxPrice=90
// availableReservations	Boolean	Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.1	api/meals?availableReservations=true
//  title	String	Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde.	api/meals?title=Indian%20platter
// dateAfter	Date	Returns all meals where the date for when is after the given date.	api/meals?dateAfter=2022-10-01
// dateBefore	Date	Returns all meals where the date for when is before the given date.	api/meals?dateBefore=2022-08-08
// sortKey	String	Returns all meals sorted by the given key. Allows when, max_reservations and price as keys. Default sorting order is asc(ending).	api/meals?sortKey=price
// sortDir	String	Returns all meals sorted in the given direction. Only works combined with the sortKey and allows asc or desc.	api/meals?sortKey=price&sortDir=desc
// limit	Number	Returns the given number of meals.	api/meals?limit=7


router.get("/", async (req, res) => {
  const {
    maxPrice,
    availableReservations,
    title,
    dateAfter,
    dateBefore,
    limit,
    sortKey,
    sortDir
  } = req.query;


  let query = knex('meal')

  if (maxPrice){
    query.where('price', '<', req.query.maxPrice)
    res.json( await query)
  }

  //let availableReservations = true;
  if (availableReservations){
    query.innerJoin("reservation", "meal.id", "reservation.meal_id").groupBy("meal.id");
    res.json( await query)
    
  }
  // maxPrice = await knex('meal').select('price').where('price', '<', req.query.maxPrice);
  // res.json(maxPrice);

  // availableReservations = await knex('meal').innerJoin("reservation", "meal.id", "reservation.meal_id").groupBy("meal.id");
  // res.json(availableReservations);
  //availableReservations = awwait knex()
})

  // if (availableReservations){
  //   response.json(availableReservations);
  // }
  // })




// availableReservations	Boolean	Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.1	api/meals?availableReservations=true
// router.get("/", async (request, response) => {
//   try {
//     const availableReservations = await knex("meal").innerJoin("reservation", "meal.id", "reservation.meal_id").groupBy("meal.id")
//     .select("meal.*").having("meal.max_reservations", ">", knex.sum("reservation.number_of_guests"));
//     if (availableReservations){
//       response.json(availableReservations);
//     }else{
//       response.status(404).send("No meals found");
//     }
//   }
//     catch (error) {
//       throw error;
//     }
//   })

//  title	String	Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde.	api/meals?title=Indian%20platter
// router.get("/", async (request, response) => {
//   try{
//   const title = await knex("meal").where("title", "like", "%Rød%grød%med%fløde");
//   response.json(title);
//   }catch (error) {
//     throw error;
//   }
// })


// limit	Number	Returns the given number of meals.	api/meals?limit=7
// router.get("/", async (request, response) => {
// try { 
// const limit = await knex("meal").limit(3);
// response.json(limit);
// }catch (error) {
//   throw error;
// }
// })


export default router;
