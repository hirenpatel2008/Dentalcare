import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        dob: '',
        date: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // show confirmation
        console.log("Appointment Submitted:", formData);
    };

    return (
        <section className="appoinment-area section-gap relative">
            <div className="container">
                <div className="row align-items-center justify-content-end">
                    <div className="col-lg-6 no-padding appoinment-right">
                        <h1 className="text-white">
                            Book an <br />
                            Appointment
                        </h1>

                        {!submitted ? (
                            <form className="appoinment-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 d-flex flex-column">
                                        <input name="name" placeholder="Patient Name" className="form-control mt-20" required value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input name="phone" placeholder="Phone" className="form-control mt-20" required value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input name="email" placeholder="Email address" className="form-control mt-20" required type="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input name="dob" placeholder="Date of birth" className="form-control mt-20" required value={formData.dob} onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-6 d-flex flex-column">
                                        <input name="date" placeholder="Appointment date" className="form-control mt-20" required value={formData.date} onChange={handleChange} />
                                    </div>
                                    <div className="col-lg-12 flex-column">
                                        <textarea rows="5" className="form-control mt-20" name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-lg-12 d-flex justify-content-end send-btn">
                                        <button className="primary-btn primary mt-20 text-uppercase" type="submit">Confirm booking</button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="confirmation-box mt-4 text-white">
                                <h2 style={{ color: 'deepskyblue' }}>✅ Appointment Confirmed!</h2>
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Phone:</strong> {formData.phone}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Date of Birth:</strong> {formData.dob}</p>
                                <p><strong>Appointment Date:</strong> {formData.date}</p>
                                <p><strong>Message:</strong> {formData.message}</p>
                                <button className="btn btn-light mt-3" onClick={() => setSubmitted(false)}>Book Another</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
