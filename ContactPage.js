import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('✅ Submitted Data:', formData);
    alert("Thank you! Your message has been received.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white link-nav">
                <Link to="/">Home </Link>
                <span className="lnr lnr-arrow-right"></span>
                <Link to="/"> Contact Us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59068.26496931062!2d70.74047006953126!3d22.286830960658538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c987edd7d7f9%3A0x588810e8f1c57995!2sHarsha%20Dental%20and%20Facial%20Surgical%20Hospital!5e0!3m2!1sen!2sin!4v1751796938184!5m2!1sen!2sin"
                width="100%"
                height="60vh"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Harsha Dental and Facial Surgical Hospital Map"
              />
            </div>

            <div className="col-lg-4 d-flex flex-column address-wrap">
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home"></span>
                </div>
                <div className="contact-details">
                  <h5>Rajkot, Gujarat</h5>
                  <p>Raiya Road, Hanuman Madhi Chowk, near Hanuman Temple</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset"></span>
                </div>
                <div className="contact-details">
                  <h5>09428227710</h5>
                  <p>Mon to Fri, 9am to 6pm</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope"></span>
                </div>
                <div className="contact-details">
                  <h5>info@harshahospital.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form className="form-area contact-form text-right" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="common-input mb-20 form-control"
                      required
                      type="text"
                    />

                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="common-input mb-20 form-control"
                      required
                      type="email"
                    />

                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="common-input mb-20 form-control"
                      placeholder="Enter subject"
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <textarea
                      className="common-textarea form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="genric-btn primary circle" style={{ float: "right" }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
