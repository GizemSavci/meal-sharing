import './ReservationForm.css';
import { useState } from "react";
import SuccesfulModal from '../SuccesfulModal/SuccesfulModal';

function ReservationForm({ mealId }) {
    const [formData, setFormData] = useState({
        guests: "",
        phone: "",
        name: "",
        email: ""
    });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.guests || !formData.phone || !formData.name || !formData.email) {
            setError("All fields are required");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5001/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    number_of_guests: formData.guests,
                    meal_id: mealId,
                    created_date: new Date().toISOString(),
                    contact_phonenumber: formData.phone,
                    contact_name: formData.name,
                    contact_email: formData.email
                }),
            });

            if (response.ok) {
                console.log('Reservation submitted successfully!');
                setShowModal(true);
                setFormData({
                    guests: "",
                    phone: "",
                    name: "",
                    email: ""
                });
                setError("");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Failed to submit reservation");
            }
        } catch (error) {
            console.error('Error submitting reservation:', error);
            setError("An error occurred while submitting reservation");
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <h3>Make Reservation</h3>
            {error && <p className="error">{error}</p>}
            <form className="contactForm" onSubmit={handleSubmit}>
                <label>Number of Guests</label>
                <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} />

                <label>Phone Number</label>
                <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

                <label>Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                <label>Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            <SuccesfulModal isOpen={showModal} onClose={closeModal} />
        </>
    );
}

export default ReservationForm;
