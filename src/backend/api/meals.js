import express from "express";
const router = express.Router();
import knex from "../database.js";

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// /api/meals	GET	Returns all meals
router.get('/', async (req, res) => {
  try {
    const allMeals = await knex.select().from('meal');
    if (allMeals){
      res.json(allMeals);
    }else {
      res.send('No meals found')
    }
}catch (error){
    console.error(error)
  }
});

// /api/meals	POST	Adds a new meal to the database
router.post('/', async (req, res) => {
  try {
    const { title, description, location, meal_time, max_reservation, price, created_date } = req.body;
    const newMeal = await knex.insert( {title, description, location, meal_time, max_reservation, price, created_date});
    res.json(newMeal)
  }catch (error) {
    console.error(error);
  }
});

// /api/meals/:id	GET	Returns the meal by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mealId = await knex.select('id').from('meal');
    if (mealId) {
      res.json(mealId);
    }
  }catch (error){
    console.error(error)
  }
})

// /api/meals/:id	PUT	Updates the meal by id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location, meal_time, max_reservation, price, created_date } = req.body;
    const updatedMeal = await knex('meal')
    .where({'id': id})
    .update({ title, description, location, meal_time, max_reservation, price, created_date });
    if (updatedMeal) {
      return res.json(updatedMeal);
    }else {
      return res.send('No updated meal found.')
    }
  }catch (error) {
    console.error(error);
  }
});

// /api/meals/:id	DELETE	Deletes the meal by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMeal = await knex('meal').where({'id': id}).del();
    if (deletedMeal){
      return res.json({message: 'Meal deleted'});
    }else {
      return res.json({message: 'Meal not found'})
    }
  }catch (error) {
    console.error(error);
  }
})

export default router;
