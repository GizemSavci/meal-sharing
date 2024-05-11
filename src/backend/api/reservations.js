import express from "express";
const router = express.Router();
import knex from "../database.js";

// /api/reservations	GET	Returns all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await knex.select().from('reservation');
        if (reservations) {
            res.json(reservations);
        }else {
            res.send('No reservation found.')
        }
    } catch (error){
        console.error(error);
    }
})

// /api/reservations	POST	Adds a new reservation to the database
router.post('/', async (req, res) => {
  try {
    const { number_of_guests, meal_id, contact_phonenumber, contact_name, contact_email } = req.body;

    const [reservationId] = await knex('reservation').insert({
      number_of_guests,
      meal_id,
      created_date: new Date(),
      contact_phonenumber,
      contact_name,
      contact_email
    });

    res.status(201).json({ message: 'Reservation added successfully', reservationId });
  } catch (error) {
    console.error('Error adding reservation:', error);
    res.status(500).json({ error: 'Could not add reservation' });
  }
});


// /api/reservations/:id	GET	Returns a reservation by id
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const reservationId = await knex.select('*').from('reservation').where({ id });
      if (reservationId) {
        res.json(reservationId);
      }
    }catch (error){
      console.error(error)
    }
})

// /api/reservations/:id	PUT	Updates the reservation by id
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email } = req.body;
      const updatedReservation = await knex('reservation')
      .where({'id': id})
      .update({ number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email });
      if (updatedMeal) {
        return res.json(updatedReservation);
      }else {
        return res.send('No updated reservation found.')
      }
    }catch (error) {
      console.error(error);
    }
  });

// /api/reservations/:id	DELETE	Deletes the reservation by id
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedReservation = await knex('reservation').where({'id': id}).del();
      if (deletedReservation){
        return res.json({message: 'Reservation deleted'});
      }else {
        return res.json({message: 'Reservation not found'})
      }
    }catch (error) {
      console.error(error);
    }
  })

export default router;