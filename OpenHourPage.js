import React, { useState } from 'react';
import './OpenHour.css'; // CSS for modal

const OpenHour = () => {
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        if (day && time) {
            setShowModal(true);
        } else {
            alert("❌ Please select both day and time.");
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setDay('');
        setTime('');
    };

    return (
  <div className="container text-center my-5" style={{ paddingTop: '100px' }}>
  <h1 className="stylish-heading">
    <span className="blue-text">Opening</span> Hours
  </h1>     
  <h2 className="mb-4">Choose Your Slot</h2>

            <div className="form-group mb-3">
                <select className="form-control" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Wednesday">Thrusday</option>
                    <option value="Wednesday">Friday</option>
                    <option value="Wednesday">Saturday</option>
                </select>
            </div>

            <div className="form-group mb-3">
                <select className="form-control" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Select Time</option>
                    <option value="10:00 To 1:00 AM">10:00 To 1:00 AM</option>
                    <option value="2:00 To 6:00 PM">2:00 To 6:00 PM</option>
                    
                </select>
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>
                Book Slot
            </button>

            {/* Modal Section */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>✅ Appointment Confirmed!</h3>
                        <p><strong>Day:</strong> {day}</p>
                        <p><strong>Time:</strong> {time}</p>
                        <button className="btn btn-danger mt-3" onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpenHour;
