import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area section-gap" style={{ backgroundColor: '#0c1234', color: '#fff', paddingTop: '60px' }}>
      <div className="container">
        <div className="row">

          {/* Dental Services */}
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h5 className="text-white mb-4">Dental Services</h5>
              <ul className="footer-nav">
                <li><Link to="/">Teeth Cleaning</Link></li>
                <li><Link to="/">Root Canal</Link></li>
                <li><Link to="/">Braces & Aligners</Link></li>
                <li><Link to="/">Tooth Extraction</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h5 className="text-white mb-4">Contact Us</h5>
              <p><i className="fa fa-phone"></i> +09428227710</p>
              <p><i className="fa fa-phone"></i> +91 098-765-4321</p>
              <p><i className="fa fa-envelope"></i> dentalcare@clinic.com</p>
              <p><i className="fa fa-map-marker"></i> Rajkot, Gujarat - India</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-6 col-md-12">
            <div className="single-footer-widget newsletter">
              <h5 className="text-white mb-4">Subscribe for Updates</h5>
              <p>Stay updated with dental health tips & offers. No spam. Promise.</p>
              <form className="form-inline mt-3">
                <input type="email" className="form-control mr-sm-2 mb-2" placeholder="Enter your email" style={{ width: '60%', padding: '10px' }} />
                <button className="btn btn-info mb-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: '#444' }} />

        {/* Social + Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2025 DentalCare. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-right footer-social">
            <Link to="/"><i className="fa fa-facebook mx-2"></i></Link>
            <Link to="/"><i className="fa fa-instagram mx-2"></i></Link>
            <Link to="/"><i className="fa fa-twitter mx-2"></i></Link>
            <Link to="/"><i className="fa fa-whatsapp mx-2"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
