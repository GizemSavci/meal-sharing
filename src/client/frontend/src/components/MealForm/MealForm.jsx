import { useState } from 'react';

function MealForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    meal_time: '',
    max_reservations: 0,
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {

        console.log('Meal created successfully!');
      } else {

        console.error('Failed to create meal');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <input type="datetime-local" name="meal_time" value={formData.meal_time} onChange={handleChange} placeholder="Meal Time" />
      <input type="number" name="max_reservations" value={formData.max_reservations} onChange={handleChange} placeholder="Max Reservations" />
      <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Create Meal</button>
    </form>
  );
}

export default MealForm;
