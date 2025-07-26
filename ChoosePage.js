import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-10 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Choose the Best Dental Plan for You</h1>
              <p>Expert dental services with transparent pricing and quality care.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Basic Plan */}
          <div className="col-lg-4 col-md-6 single-price">
            <div className="top-part">
              <h4>Basic Dental</h4>
              <p>🦷 Tooth Cleaning <br /> 💉 Tooth Filling</p>
            </div>
            <div className="package-list">
              <ul>
                <li>🦷 Teeth Cleaning</li>
                <li>💉 Tooth Filling</li>
                <li>🩺 Basic Consultation</li>
              </ul>
            </div>
            <div className="bottom-part">
              <h1>₹499</h1>
              <p>Per Visit</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-lg-4 col-md-6 single-price">
            <div className="top-part">
              <h4>Standard Care</h4>
              <p>😁 Braces & Aligners <br /> ✨ Teeth Whitening</p>
            </div>
            <div className="package-list">
              <ul>
                <li>😁 Braces & Aligners</li>
                <li>✨ Teeth Whitening</li>
                <li>🩺 Full Dental Checkup</li>
              </ul>
            </div>
            <div className="bottom-part">
              <h1>₹999</h1>
              <p>Per Visit</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>

          {/* Ultimate Plan */}
          <div className="col-lg-4 col-md-6 single-price">
            <div className="top-part">
              <h4>Advanced Dental</h4>
              <p>💉 Root Canal <br /> 🩺 Tooth Extraction</p>
            </div>
            <div className="package-list">
              <ul>
                <li>💉 Root Canal Treatment</li>
                <li>🩺 Tooth Extraction</li>
                <li>🧪 X-Ray & Diagnosis</li>
              </ul>
            </div>
            <div className="bottom-part">
              <h1>₹1499</h1>
              <p>Per Visit</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
